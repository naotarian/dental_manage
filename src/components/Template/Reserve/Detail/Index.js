import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import dayjs from 'dayjs'
const Index = props => {
  const router = useRouter()
  const { dental } = props
  const dateFormat = date => {
    const day = dayjs(date)
    return day.format('YYYY-MM-DD HH:mm')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
            <TextField
              value={dental.detail.gender == '1' ? '女性' : '男性'}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">メールアドレス</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.email}
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">携帯電話番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={
                dental.detail.mobile_tel ? dental.detail.mobile_tel : '入力なし'
              }
              size="small"
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">固定電話番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={
                dental.detail.fixed_tel ? 'dental.detail.fixed_tel' : '入力なし'
              }
              size="small"
              disabled
              fullWidth
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
            <TextField
              value={dental.detail.examination == '1' ? '初診' : '2回目以降'}
              size="small"
              disabled
              fullWidth
            />
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
              disabled
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="button-area">
        <Button
          variant="outlined"
          className="wi-200"
          onClick={() => router.back()}>
          戻る
        </Button>
      </div>
    </>
  )
}
export default Index
