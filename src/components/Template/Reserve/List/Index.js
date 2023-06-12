import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import ReserveTable from '@/components/Parts/Reserve/List/ReserveTable'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [list, setList] = useState(null)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve/list')
      setList(res.data.list)
      setDataFetch(true)
    })()
  }, [])
  return (
    <>
      {list && <ReserveTable list={list} />}
      <p>sss</p>
      <p>sss</p>
    </>
  )
}
export default Index
