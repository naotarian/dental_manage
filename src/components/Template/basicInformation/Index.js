import { useState, useEffect } from 'react'

//mui
import CheckIcon from '@mui/icons-material/Check'
import { Typography, Grid, Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'

import ClosedSettingTable from '@/components/Parts/basicInformation/ClosedSettingTable'
//Parts
import axios from '@/lib/axios'
const Index = () => {
  const [businessStart, setBusinessStart] = useState('')
  const [businessEnd, setBusinessEnd] = useState('')
  const [success, setSuccess] = useState('')
  const businessStartChange = event => {
    setBusinessStart(event.target.value)
  }
  const businessEndChange = event => {
    setBusinessEnd(event.target.value)
  }
  const timeItem = () => {
    let items = []
    for (let i = 0; i < 24; i++) {
      items.push(
        <MenuItem value={`${('00' + i).slice(-2)}:00`}>{i}:00</MenuItem>,
      )
      items.push(
        <MenuItem value={`${('00' + i).slice(-2)}:30`}>{i}:30</MenuItem>,
      )
    }
    return items
  }
  const [closed, setClosed] = useState(null)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/basic_information')
      setClosed(res?.data.basic_information.closed || null)
      setBusinessStart(res?.data.basic_information.business_start.slice(0, -3))
      setBusinessEnd(res?.data.basic_information.business_end.slice(0, -3))
    })()
  }, [])

  const submit = async () => {
    try {
      const sendData = {
        businessStart,
        businessEnd,
        closed,
      }
      const res = await axios.post(
        '/api/manages/basic_information/update',
        sendData,
      )

      window.scrollTo({ top: 0, behavior: 'smooth' })
      setSuccess(
        res.data.is_change
          ? '医院基本情報を更新しました。'
          : '変更がありませんでした。',
      )
      window.setTimeout(function () {
        setSuccess('')
      }, 4000)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {success.length > 0 && (
        <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            variant="filled"
            severity="success">
            {success}
          </Alert>
        </Stack>
      )}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="item" className="item">
            診療時間
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <FormControl sx={{ m: 1, minWidth: 120, mr: 6 }} size="small">
            <InputLabel>開始時間</InputLabel>
            <Select
              value={businessStart}
              label="終了時間"
              onChange={businessStartChange}>
              {timeItem()}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>終了時間</InputLabel>
            <Select
              value={businessEnd}
              label="終了時間"
              onChange={businessEndChange}>
              {timeItem()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="item" className="item">
            休診日設定
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <ClosedSettingTable data={closed} setData={setClosed} />
        </Grid>
      </Grid>
      <div className="button-area">
        <Button variant="contained" onClick={submit}>
          更新
        </Button>
      </div>
    </>
  )
}
export default Index
