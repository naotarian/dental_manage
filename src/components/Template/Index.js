import { useState, useEffect } from 'react'

import Dashboard from '@/components/Parts/Top/Dashboard/Dashboard'
import axios from '@/lib/axios'
const Index = () => {
  const [todayShifts, setTodayShifts] = useState([])
  const [todayReserves, setTodayReserves] = useState([])
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/dashborad')
      setTodayShifts(res.data.shifts)
      setTodayReserves(res.data.reserves)
      setChartData(res.data.chart_data)
    })()
  }, [])
  return (
    <>
      <Dashboard
        todayShifts={todayShifts}
        todayReserves={todayReserves}
        chartData={chartData}
      />
    </>
  )
}
export default Index
