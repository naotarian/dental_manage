import { useState, useEffect } from 'react'

import Button from '@mui/material/Button'

import { Typography } from '@mui/material'

import ShiftTable from '@/components/Parts/Shift/ShiftTable'
import axios from '@/lib/axios'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [staff, setStaff] = useState(false)
  const [days, setDays] = useState(false)
  const [month, setMonth] = useState(false)
  const [year, setYear] = useState(false)
  const [shifts, setShifts] = useState(null)
  const [checkList, setCheckList] = useState([])
  const [open, setOpen] = useState(false)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [allChecked, setAllChecked] = useState([])

  const startChange = event => {
    setStartTime(event.target.value)
  }
  const endChange = event => {
    setEndTime(event.target.value)
  }
  const handleClose = () => {
    setOpen(false)
    setStartTime('')
    setEndTime('')
  }
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/shift')
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setMonth(res.data.target_month)
      setYear(res.data.target_year)
      setShifts(res.data.shifts)
      setDataFetch(true)
    })()
  }, [])
  const change = async kind => {
    try {
      var dt = new Date(year + '-' + month)
      if (kind === 'prev') {
        dt.setMonth(dt.getMonth() - 1)
      }
      if (kind === 'next') {
        dt.setMonth(dt.getMonth() + 1)
      }
      const target_month =
        dt.getFullYear() + '-' + ('00' + (dt.getMonth() + 1)).slice(-2)
      const res = await axios.get(`/api/manages/shift/${target_month}`)
      setCheckList([])
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setMonth(res.data.target_month)
      setYear(res.data.target_year)
      setShifts(res.data.shifts)
    } catch (e) {
      console.log(e)
    }
  }
  const shiftDelete = async () => {
    var result = window.confirm('選択中のシフト情報を削除してよろしいですか？')
    if (!result) return
    try {
      const res = await axios.post('/api/manages/shift/delete', {
        data: checkList,
        date: year + '-' + ('00' + month).slice(-2),
      })
      setCheckList([])
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setMonth(res.data.target_month)
      setYear(res.data.target_year)
      setShifts(res.data.shifts)
      setStartTime('')
      setEndTime('')
      setDataFetch(true)
    } catch (e) {
      console.log(e)
    }
  }
  const shiftRegist = () => {
    setOpen(true)
  }
  const shiftSubmit = async () => {
    try {
      const tmp = shifts
      checkList.map((data, _) => {
        const some = tmp[data.day].some(
          b => b.date === data.day && b.staff_id === data.id,
        )
        if (some) {
          tmp[data.day].map((d, _) => {
            d.start_time = startTime
            d.end_time = endTime
          })
        } else {
          tmp[data.day].push({
            staff_id: data.id,
            start_time: startTime,
            end_time: endTime,
            date: data.day,
          })
        }
      })
      const res = await axios.post('/api/manages/shift/update', {
        shifts: tmp,
        date: year + '-' + ('00' + month).slice(-2),
      })
      setCheckList([])
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setMonth(res.data.target_month)
      setYear(res.data.target_year)
      setShifts(res.data.shifts)
      setStartTime('')
      setEndTime('')
      setDataFetch(true)
      setOpen(false)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      {dataFetch && staff && days && (
        <>
          <div className="flex justify-center mb1 gap-40">
            <Button variant="outlined" onClick={() => change('prev')}>
              前月
            </Button>
            <Typography variant="h2">
              {year}年{month}月シフト設定
            </Typography>
            <Button variant="outlined" onClick={() => change('next')}>
              翌月
            </Button>
          </div>
          <div className="justify-right mb1 flex gap-40">
            <Button
              variant="contained"
              onClick={shiftRegist}
              disabled={checkList.length === 0}>
              登録
            </Button>
            <Button
              variant="contained"
              onClick={shiftDelete}
              color="error"
              disabled={checkList.length === 0}>
              削除
            </Button>
          </div>
          <ShiftTable
            staff={staff}
            days={days}
            shifts={shifts}
            setShifts={setShifts}
            checkList={checkList}
            setCheckList={setCheckList}
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            startTime={startTime}
            endTime={endTime}
            startChange={startChange}
            endChange={endChange}
            shiftSubmit={shiftSubmit}
            allChecked={allChecked}
            setAllChecked={setAllChecked}
          />
        </>
      )}
    </>
  )
}
export default Index
