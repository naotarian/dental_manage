import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
//mui
import { Typography, Grid } from '@mui/material'
import ClosedSettingTable from '@/components/Parts/basicInformation/ClosedSettingTable'
const Index = () => {
  const [businessStart, setBusinessStart] = useState('')
  const [businessEnd, setBusinessEnd] = useState('')
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
        <MenuItem value={`${i}:00`} key={`${i}:00`}>
          {i}:00
        </MenuItem>,
      )
      items.push(
        <MenuItem value={`${i}:30`} key={`${i}:30`}>
          {i}:30
        </MenuItem>,
      )
    }
    return items
  }
  return (
    <Grid container spacing={2} className="al-center">
      <Grid item xs={2}>
        <Typography variant="item" className="item">
          営業時間
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <FormControl sx={{ m: 1, minWidth: 120, mr: 6 }} size="small">
          <InputLabel id="demo-select-small-label">開始時間</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={businessStart}
            label="Age"
            onChange={businessStartChange}>
            {timeItem()}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">終了時間</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={businessEnd}
            label="Age"
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
        <ClosedSettingTable />
      </Grid>
    </Grid>
  )
}
export default Index
