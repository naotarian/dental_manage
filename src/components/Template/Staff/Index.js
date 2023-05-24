import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import StaffList from '@/components/Parts/Staff/StaffList'
import StaffRegist from '@/components/Parts/Staff/StaffRegist'
import axios from '@/lib/axios'
const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [colors, setColors] = useState(null)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/staff')
      setColors(res.data.colors)
      setDataFetch(true)
    })()
  }, [])
  const regist = async sendData => {
    console.log(sendData)
    const res = await axios.post('/api/manages/staff/regist', sendData)
  }
  return (
    <>
      {dataFetch && (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StaffList />
          </Grid>
          <Grid item xs={8}>
            <StaffRegist colors={colors} regist={regist} />
          </Grid>
        </Grid>
      )}
    </>
  )
}
export default Index
