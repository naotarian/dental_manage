import { useState, useEffect } from 'react'

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import CheckIcon from '@mui/icons-material/Check'

import axios from '@/lib/axios'
import ShiftTable from '@/components/Parts/Shift/ShiftTable'
import { Typography } from '@mui/material'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [staff, setStaff] = useState(false)
  const [days, setDays] = useState(false)
  const [month, setMonth] = useState(false)
  const [year, setYear] = useState(false)
  const [shifts, setShifts] = useState(null)
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
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setMonth(res.data.target_month)
      setYear(res.data.target_year)
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
          <ShiftTable staff={staff} days={days} shifts={shifts} />
        </>
      )}
    </>
  )
}
export default Index
