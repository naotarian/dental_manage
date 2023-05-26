import { useState, useEffect } from 'react'

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import CheckIcon from '@mui/icons-material/Check'

import axios from '@/lib/axios'
import ShiftTable from '@/components/Parts/Shift/ShiftTable'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [staff, setStaff] = useState(false)
  const [days, setDays] = useState(false)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/shift')
      console.log(res.data)
      setDays(res.data.days)
      setStaff(res.data?.staff)
      setDataFetch(true)
    })()
  }, [])
  return (
    <>
      {dataFetch && staff && days && (
        <>
          <p>aa</p>
          <p>aa</p>
          <ShiftTable staff={staff} days={days} />
        </>
      )}
    </>
  )
}
export default Index
