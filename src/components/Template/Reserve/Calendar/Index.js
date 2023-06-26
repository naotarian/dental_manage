import { useState, useEffect } from 'react'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react' // must go before plugins
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
  const handleDateSelect = selectionInfo => {
    console.log('selectionInfo: ', selectionInfo) // 選択した範囲の情報をconsoleに出力
    const reserveDay = dayjs(selectionInfo.startStr).format('YYYY-MM-DD')
    const reserveStart = dayjs(selectionInfo.startStr).format('HH:mm')
    const reserveEnd = dayjs(selectionInfo.endStr).format('HH:mm')
    setReserveData(prevState => ({
      ...prevState,
      staff: selectionInfo.resource.id,
      reserveDay: reserveDay,
      reserveStart: reserveStart,
      reserveEnd: reserveEnd,
    }))
    setModalOpen(true)
    // calendarApi.unselect() // 選択した部分の選択を解除
  }
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve_calendar/fetch')
      // console.log(res.data.reserves)
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
      })
    } catch (e) {
      setErrors(e.response.data.errors)
    }
  }
  const selectEvent = data => {
    console.log(data)
    setReserveData(prevState => ({
      ...prevState,
      staff: data.staff_id,
      reserveDay: data.reserve_date,
      reserveStart: data.start_time.slice(0, -3),
      reserveEnd: data.end_time.slice(0, -3),
      unit: data.unit_id,
      category: data.detail.category_id,
      lastNameKana: data.detail.full_name_kana,
    }))
    setModalOpen(true)
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
        contentHeight={'auto'}
        events={reserves}
        eventClick={e => selectEvent(e.event.extendedProps)}
      />
    </>
  )
}
export default Index
