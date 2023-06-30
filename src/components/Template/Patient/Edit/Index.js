import { useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useRouter } from 'next/router'

import axios from '@/lib/axios'
const Index = props => {
  const router = useRouter()
  const { detail, setDetail } = props
  const [success, setSuccess] = useState(false)

  const yearSelectSet = () => {
    return [...Array(100)].map((_, i) => {
      return (
        <MenuItem value={1923 + i} key={i}>
          {1923 + i}年
        </MenuItem>
      )
    })
  }
  const monthSelectSet = () => {
    return [...Array(12)].map((_, i) => {
      return (
        <MenuItem value={('00' + (i + 1)).slice(-2)} key={i}>
          {i + 1}月
        </MenuItem>
      )
    })
  }

  const daySelectSet = () => {
    if (!detail.birth_year || !detail.birth_month) return
    let datesOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const datesOfFebruary = isLeapYear(detail.birth_year) ? 29 : 28
    datesOfYear = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return [...Array(datesOfYear[detail.birth_month - 1])].map((_, i) => {
      return (
        <MenuItem value={('00' + (i + 1)).slice(-2)} key={i}>
          {i + 1}日
        </MenuItem>
      )
    })
  }
  const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  const patientChange = (e, name) => {
    setDetail(prevState => ({ ...prevState, [name]: e.target.value }))
  }
  const submit = async () => {
    const res = await axios.post('/api/manages/patient/update', { detail })
    setSuccess('更新しました。')
    console.log(detail)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {success && (
          <Stack sx={{ width: '100%' }} spacing={2} className="mb1">
            <Alert variant="filled" severity="success">
              更新が完了しました。
            </Alert>
          </Stack>
        )}
        <Paper className="p1">
          <Grid container spacing={2} className="al-center">
            <Grid item xs={2}>
              <Typography variant="bold">診察券番号</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="診察券番号"
                size="small"
                value={detail.patient_number}
                onChange={e => patientChange(e, 'patient_number')}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">性別</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>性別</InputLabel>
                <Select
                  value={detail.gender}
                  label="性別"
                  onChange={e => patientChange(e, 'gender')}>
                  <MenuItem value={'1'}>女性</MenuItem>
                  <MenuItem value={'2'}>男性</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">患者様姓</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者様姓"
                size="small"
                onChange={e => patientChange(e, 'last_name')}
                value={detail.last_name}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">患者様名</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者様名"
                size="small"
                value={detail.first_name}
                onChange={e => patientChange(e, 'first_name')}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">患者様姓(カナ)</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者様姓"
                size="small"
                onChange={e => patientChange(e, 'last_name_kana')}
                value={detail.last_name_kana}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">患者様名(カナ)</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者様名"
                size="small"
                onChange={e => patientChange(e, 'first_name_kana')}
                value={detail.first_name_kana}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">携帯電話番号</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="携帯電話番号"
                size="small"
                onChange={e => patientChange(e, 'mobile_tel')}
                value={detail.mobile_tel}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">固定電話番号</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="固定電話番号"
                size="small"
                onChange={e => patientChange(e, 'fixed_tel')}
                value={detail.fixed_tel}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">メールアドレス</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="メールアドレス"
                size="small"
                onChange={e => patientChange(e, 'email')}
                value={detail.email}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">生年月日</Typography>
            </Grid>
            <Grid item xs={10}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>年</InputLabel>
                <Select
                  value={detail.birth_year}
                  label="年"
                  onChange={e => patientChange(e, 'birth_year')}>
                  {yearSelectSet()}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                <InputLabel>月</InputLabel>
                <Select
                  style={{ minWidth: '100px' }}
                  value={detail.birth_month}
                  onChange={e => patientChange(e, 'birth_month')}
                  label="月">
                  {monthSelectSet()}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                <InputLabel>日</InputLabel>
                <Select
                  style={{ minWidth: '100px' }}
                  value={detail.birth_day}
                  onChange={e => patientChange(e, 'birth_day')}
                  label="日">
                  {daySelectSet()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="bold">患者様備考</Typography>
            </Grid>
            <Grid item xs={10} className="justify-center gap-20 flex mt1">
              <TextField
                label="患者様備考"
                placeholder="例) 麻酔が効きにくいです。"
                multiline
                rows={4}
                fullWidth
                onChange={e => patientChange(e, 'remark')}
                value={detail.remark}
              />
            </Grid>
            <Grid item xs={12} className="justify-center gap-20 flex mt1">
              <Button
                variant="outlined"
                onClick={() => {
                  router.back()
                }}>
                戻る
              </Button>
              <Button variant="contained" onClick={submit}>
                更新
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}
export default Index
