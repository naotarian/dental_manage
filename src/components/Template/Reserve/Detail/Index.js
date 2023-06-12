import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import dayjs from 'dayjs'
const Index = props => {
  const { dental } = props
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約番号</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <Typography>
              <TextField value={dental.id} size="small" disabled />
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約日</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField value={dental.reserve_date} size="small" disabled />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約開始時間</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.start_time.slice(0, -3)}
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約終了時間</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.start_time.slice(0, -3)}
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">患者氏名</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField value={dental.detail.full_name} size="small" disabled />
          </Grid>
          <Grid item xs={4} md={2} lg={2} className="p1 b-gray">
            <Typography variant="bold">予約終了時間</Typography>
          </Grid>
          <Grid item xs={8} md={4} lg={4} className="p1 b-gray">
            <TextField
              value={dental.detail.full_name_kana}
              size="small"
              disabled
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Index
