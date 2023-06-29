import { useState, useEffect } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import resourceTimegridPlugin from '@fullcalendar/resource-timegrid'
import dayjs from 'dayjs'

import ReserveCalendarModal from '@/components/Parts/ReserveCalendar/Modal'
import axios from '@/lib/axios'
const Index = () => {
  const [reserves, setReserves] = useState([])
  const [errors, setErrors] = useState([])
  const [staffs, setStaffs] = useState(null)
  const [units, setUnits] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [reserveData, setReserveData] = useState({
    id: '',
    reserveDay: '',
    category: '1',
    staff: '',
    unit: '',
    lastName: '',
    lastNameKana: '',
    firstName: '',
    firstNameKana: '',
    mobileTel: '',
    fixedTel: '',
    email: '',
    birth: '',
    examination: '1',
    remark: '',
    gender: '1',
    startTime: '',
    endTime: '',
    reserveStart: '',
    reserveEnd: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
  })
  const [categories, setCategories] = useState(null)
  const [kind, setKind] = useState('new')
  const handleDateSelect = selectionInfo => {
    console.log('selectionInfo: ', selectionInfo) // 選択した範囲の情報をconsoleに出力
    const reserveDay = dayjs(selectionInfo.startStr).format('YYYY-MM-DD')
    const reserveStart = dayjs(selectionInfo.startStr).format('HH:mm')
    const reserveEnd = dayjs(selectionInfo.endStr).format('HH:mm')
    console.log(reserveStart)
    setReserveData(prevState => ({
      ...prevState,
      staff: selectionInfo.resource?.id,
      reserveDay: reserveDay,
      startTime: reserveStart === '00:00' ? '10:00' : reserveStart,
      endTime: reserveEnd === '00:00' ? '10:30' : reserveEnd,
    }))
    setModalOpen(true)
    // calendarApi.unselect() // 選択した部分の選択を解除
  }
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve_calendar/fetch')
      setCategories(res.data.categories)
      setStaffs(res.data.staffs)
      setUnits(res.data.units)
      setReserves(res.data.reserves)
    })()
  }, [])
  const submit = async () => {
    try {
      const sendData = reserveData
      const res = await axios.post(
        '/api/manages/reserve_calendar/regist',
        sendData,
      )
      setReserves(res.data.reserves)
      setModalOpen(false)
      setReserveData({
        id: '',
        reserveDay: '',
        category: '1',
        lastName: '',
        lastNameKana: '',
        firstName: '',
        firstNameKana: '',
        mobileTel: '',
        fixedTel: '',
        email: '',
        birth: '',
        examination: '1',
        remark: '',
        gender: '1',
        startTime: '',
        endTime: '',
        staff: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
      })
      setKind('new')
      setErrors([])
    } catch (e) {
      setErrors(e.response.data.errors)
    }
  }
  const selectEvent = data => {
    let birthYear = ''
    let birthMonth = ''
    let birthDay = ''
    if (data.detail.birth) {
      const tmp = data.detail.birth.split('-')
      birthYear = ('00', tmp[0])
      birthMonth = ('00', tmp[1]).slice(-2)
      birthDay = ('00', tmp[2]).slice(-2)
    }
    setReserveData(prevState => ({
      ...prevState,
      id: data.reserveId,
      lastName: data.detail.last_name,
      lastNameKana: data.detail.last_name_kana,
      firstName: data.detail.first_name,
      firstNameKana: data.detail.first_name_kana,
      staff: data.staff_id,
      reserveDay: data.reserve_date,
      startTime: data.start_time.slice(0, -3),
      endTime: data.end_time.slice(0, -3),
      unit: data.unit_id,
      category: data.detail.category_id,
      email: data.detail.email,
      examination: data.detail.examination,
      mobileTel: data.detail.mobile_tel,
      fixedTel: data.detail.fixed_tel,
      gender: data.detail.gender,
      birthYear: birthYear,
      birthMonth: birthMonth,
      birthDay: birthDay,
    }))
    setModalOpen(true)
  }
  const eventDrag = async e => {
    console.log(e.event.startStr)
    console.log(e.event.endStr)
    let staffId = ''
    if (e.newResource) staffId = e.newResource.id
    // let target = reserves.filter(
    //   reserve => reserve.id === e.event.extendedProps.reserveId,
    // )
    const reserveId = e.event.extendedProps.reserveId
    const sendData = {
      reserveId: reserveId,
      staffId: staffId,
      reserveDay: dayjs(e.event.startStr).format('YYYY-MM-DD'),
      startTime: dayjs(e.event.startStr).format('HH:mm'),
      endTime: dayjs(e.event.endStr).format('HH:mm'),
    }
    // const staffId =
    const res = await axios.post('/api/manages/reserve_calendar/drag', sendData)
    setReserves(res.data.reserves)
    console.log(sendData)
  }
  return (
    <>
      {reserveData && (
        <ReserveCalendarModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          reserveData={reserveData}
          categories={categories}
          setReserveData={setReserveData}
          submit={submit}
          errors={errors}
          units={units}
          staffs={staffs}
          kind={kind}
          setKind={setKind}
        />
      )}

      <FullCalendar
        schedulerLicenseKey="XXX"
        plugins={[interactionPlugin, resourceTimegridPlugin, dayGridPlugin]}
        nowIndicator={true}
        headerToolbar={{
          left: 'prev,today,next',
          center: 'title',
          right: 'resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth',
        }}
        locale="ja"
        contentHeight={'650px'}
        allDayText="終日"
        slotDuration={'00:15'}
        buttonText={{
          prev: '<',
          next: '>',
          prevYear: '<<',
          nextYear: '>>',
          today: '今日',
          month: '月',
          week: '週',
          day: '日',
          list: '一覧',
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
        resourceAreaHeaderContent="予約一覧"
        resources={staffs}
        initialView="resourceTimeGridDay" // 初期表示のモードを設定する
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: '07:00',
          endTime: '22:00',
        }}
        slotMinTime="06:00:00" //時間の表示範囲start
        slotMaxTime="23:00:00" //時間の表示範囲end
        events={reserves}
        eventClick={e => selectEvent(e.event.extendedProps)}
        eventDrop={e => eventDrag(e)}
        // eventDrop={e => {
        //   console.log(reserves)
        //   console.log(e.event.extendedProps)
        // }}
      />
    </>
  )
}
export default Index
