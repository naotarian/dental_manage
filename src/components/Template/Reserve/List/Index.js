import { useState, useEffect, useRef } from 'react'

import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import ReserveTable from '@/components/Parts/Reserve/List/ReserveTable'
import axios from '@/lib/axios'

const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [list, setList] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/reserve/list')
      setList(res.data.list)
      setDataFetch(true)
    })()
  }, [])
  const todayOnlyChange = async e => {
    const sendData = { todayOnly: e.target.checked }
    const res = await axios.post('/api/manages/reserve/listSearch', sendData)
    console.log(res.data.list)
    setList(res.data.list)
    setDataFetch(true)
  }
  return (
    <>
      {dataFetch && (
        <>
          <Alert severity="info" className="mb1">
            予約番号をクリックすると、詳細画面に遷移します。
          </Alert>
          <FormGroup className="mb1">
            <FormControlLabel
              control={<Checkbox />}
              label="今日の予約のみ"
              onChange={todayOnlyChange}
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
