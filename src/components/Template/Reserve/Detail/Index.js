import { useState, useEffect } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import dayjs from 'dayjs'
import { useRouter } from 'next/router'
const Index = props => {
  const router = useRouter()
  const { dental, setDental, update, success } = props
  const dateFormat = date => {
    const day = dayjs(date)
    return day.format('YYYY-MM-DD HH:mm')
  }
  const examinationChange = e => {
    let detail = dental.detail
    detail.examination = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }
  const sexChange = e => {
    let detail = dental.detail
    detail.gender = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }
  const remarkChange = e => {
    let detail = dental.detail
    detail.remark = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }
  const emailChange = e => {
    let detail = dental.detail
    detail.email = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }
  const mobileChange = e => {
    let detail = dental.detail
    detail.mobile_tel = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }
  const fixedChange = e => {
    let detail = dental.detail
    detail.fixed_tel = e.target.value
    setDental(prevState => ({ ...prevState, detail: detail }))
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {success && (
          <div className="mb2 wi100">
            <Alert variant="filled" severity="success">
              予約情報を更新しました。
            </Alert>
          </div>
        )}
        <Grid container spacing={2}>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <Typography>
              <TextField value={dental.id} size="small" disabled fullWidth />
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">治療内容</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail?.category?.title}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">スタッフ</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.staff?.last_name + dental.staff?.first_name}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">ユニット</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.unit?.name}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約日</Typography>
          </Grid>
          <Grid item xs={8} md={2} lg={2} className="p1 b-gray">
            <TextField
              value={dental.reserve_date}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約開始時間</Typography>
          </Grid>
          <Grid item xs={8} md={2} lg={2} className="p1 b-gray">
            <TextField
              value={dental.start_time.slice(0, -3)}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約終了時間</Typography>
          </Grid>
          <Grid item xs={8} md={2} lg={2} className="p1 b-gray">
            <TextField
              value={dental.start_time.slice(0, -3)}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">患者氏名</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.full_name}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約終了時間</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.full_name_kana}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">性別</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <FormControl>
              <RadioGroup row onChange={sexChange}>
                <FormControlLabel
                  checked={dental.detail.gender == '1'}
                  value="1"
                  control={<Radio />}
                  label="女性"
                />
                <FormControlLabel
                  checked={dental.detail.gender == '2'}
                  value="2"
                  control={<Radio />}
                  label="男性"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">メールアドレス</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.email}
              size="small"
              fullWidth
              onChange={emailChange}
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">携帯電話番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.mobile_tel}
              size="small"
              fullWidth
              onChange={mobileChange}
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">固定電話番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.fixed_tel}
              size="small"
              fullWidth
              onChange={fixedChange}
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">生年月日</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.birth}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">当院での受診</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={examinationChange}
                name="row-radio-buttons-group">
                <FormControlLabel
                  checked={dental.detail.examination == '1'}
                  value="1"
                  control={<Radio />}
                  label="初診"
                />
                <FormControlLabel
                  checked={dental.detail.examination == '2'}
                  value="2"
                  control={<Radio />}
                  label="2回目以降"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約受付日時</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dateFormat(dental.created_at)}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">キャンセル日時</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={
                dental.cancel_date
                  ? dental.cancel_date
                  : 'この予約はキャンセルされていません。'
              }
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">備考欄</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={10} className="p1 b-gray">
            <TextField
              value={dental.detail?.remark ? dental.detail?.remark : '記入なし'}
              size="small"
              fullWidth
              multiline
              onChange={remarkChange}
              rows={4}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="button-area gap-20 flex justify-center">
        <Button
          variant="outlined"
          className="wi-200"
          onClick={() => router.back()}>
          戻る
        </Button>
        <Button variant="contained" className="wi-200" onClick={update}>
          更新
        </Button>
      </div>
    </>
  )
}
export default Index
