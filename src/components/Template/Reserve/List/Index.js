import { useState, useEffect, useRef } from 'react'

import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import ReserveTable from '@/components/Parts/Reserve/List/ReserveTable'
// import useUpdateEffect from '@/hooks/useUpdateEffect'
import axios from '@/lib/axios'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [list, setList] = useState([])
  const [todayOnly, setTodayOnly] = useState(false)
  const [past, setPast] = useState(false)
  const isFirstRender = useRef(true)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve/list')
      setList(res.data.list)
      setDataFetch(true)
    })()
  }, [])
  useEffect(() => {
    ;(async () => {
      if (isFirstRender.current) {
        isFirstRender.current = false
        return
      }
      const sendData = { todayOnly, past }
      const res = await axios.post('/api/manages/reserve/listSearch', sendData)
      setList(res.data.list)
      setDataFetch(true)
    })()
  }, [todayOnly, past])
  const todayOnlyChange = async e => {
    setTodayOnly(e.target.checked)
    setPast(false)
  }
  return (
    <>
      {dataFetch && (
        <>
          <Alert severity="info" className="mb1">
            予約番号をクリックすると、詳細画面に遷移します。
          </Alert>
          <FormGroup className="mb1" style={{ flexDirection: 'row' }}>
            <FormControlLabel
              control={<Checkbox checked={todayOnly} />}
              label="今日の予約のみ"
              onChange={todayOnlyChange}
            />
            <FormControlLabel
              control={<Checkbox checked={past} />}
              label="過去の予約も表示"
              onChange={e => {
                setTodayOnly(false)
                setPast(e.target.checked)
              }}
            />
          </FormGroup>
          {list.length > 0 ? (
            <>
              <ReserveTable list={list} />
            </>
          ) : (
            <Paper className="p1">
              <Typography variant="largeBold">予約がありません。</Typography>
            </Paper>
          )}
        </>
      )}
    </>
  )
}
export default Index
