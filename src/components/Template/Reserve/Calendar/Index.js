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
  const [modalOpen, setModalOpen] = useState(false)
  const [reserveData, setReserveData] = useState({
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
    reserveStart: '',
    reserveEnd: '',
  })
  const [categories, setCategories] = useState(null)
  const handleDateSelect = selectionInfo => {
    console.log('selectionInfo: ', selectionInfo) // 選択した範囲の情報をconsoleに出力
    const reserveDay = dayjs(selectionInfo.startStr).format('YYYY-MM-DD')
    const reserveStart = dayjs(selectionInfo.startStr).format('HH:mm')
    const reserveEnd = dayjs(selectionInfo.endStr).format('HH:mm')
    setReserveData(prevState => ({
      ...prevState,
      reserveDay: reserveDay,
      reserveStart: reserveStart,
      reserveEnd: reserveEnd,
    }))
    // const calendarApi = selectionInfo.view.calendar
    // setReserves(prevState => [
    //   ...prevState,
    //   {
    //     resourceId: selectionInfo.resource.id,
    //     title: '虫歯',
    //     start: selectionInfo.startStr,
    //     end: selectionInfo.endStr,
    //   },
    // ])
    setModalOpen(true)
    // calendarApi.unselect() // 選択した部分の選択を解除
  }
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve_calendar/fetch')
      // console.log(res.data.reserves)
      setCategories(res.data.categories)
      setStaffs(res.data.staffs)
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
    } catch (e) {
      setErrors(e.response.data.errors)
    }
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
        />
      )}

      <FullCalendar
        schedulerLicenseKey="XXX"
        plugins={[interactionPlugin, resourceTimegridPlugin, dayGridPlugin]}
        headerToolbar={{
          left: 'prev,today,next',
          center: 'title',
          right: 'resourceTimeGridDay,resourceTimeGridWeek,dayGridMonth',
        }}
        locale="ja"
        allDayText="終日"
        // titleFormat={{
        //   month: 'yyyy年M月',
        //   week: 'yyyy年M月d日{ ～ }{[yyyy年]}{[M月]d日}',
        //   day: "yyyy年M月d日'('ddd')'",
        // }}
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
        eventClick={e => {
          console.log(e.event.title)
        }}
      />
    </>
  )
}
export default Index
