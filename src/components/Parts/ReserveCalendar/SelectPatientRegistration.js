import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import axios from '@/lib/axios'
const SelectPatientRegistration = () => {
  const [patientNumber, setPatientNumber] = useState('')
  const [name, setName] = useState('')
  const searchPatient = async () => {
    const sendData = { name, patientNumber }
    await axios.post('/api/manages/reserve_calendar/search_patient', sendData)
  }
  return (
    <Box>
      <Paper elevation={3} className="wi100 p1 mb1">
        <Grid container spacing={2} className="al-center">
          <Grid item xs={2}>
            <Typography>診察券番号</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="診察券番号"
              size="small"
              value={patientNumber}
              onChange={e => {
                setPatientNumber(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>患者様名前</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="患者様名前"
              size="small"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              disabled={!patientNumber && !name}
              onClick={searchPatient}>
              検索
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
export default SelectPatientRegistration
