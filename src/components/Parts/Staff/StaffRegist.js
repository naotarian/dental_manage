import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
const StaffRegist = () => {
  return (
    <Grid
      container
      spacing={0}
      style={{ width: '100%', padding: '1rem' }}
      component={Paper}>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">社員番号</Typography>
      </Grid>
      <Grid item xs={10} className="b-gray p1">
        <TextField label="社員番号" fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">姓</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField label="姓" fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">名</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField label="名" fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">姓(カナ)</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField label="姓(カナ)" fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">名(カナ)</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField label="名(カナ)" fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">ニックネーム</Typography>
      </Grid>
      <Grid item xs={10} className="b-gray p1">
        <TextField label="ニックネーム" fullWidth size="small" />
      </Grid>
    </Grid>
  )
}
export default StaffRegist
