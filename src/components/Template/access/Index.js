import { useState, useEffect } from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import CheckIcon from '@mui/icons-material/Check'

import axios from '@/lib/axios'
const Index = () => {
  const [stationCompanies, setStationCompanies] = useState(null)
  const [stationLines, setStationLines] = useState(null)
  const [stations, setStations] = useState(null)
  const [selectedStationCompanies, setSelectedStationCompanies] = useState(null)
  const [selectedStationLines, setSelectedStationLines] = useState(null)
  const [selectedStation, setSelectedStation] = useState(null)
  const [stationRemark, setStationRemark] = useState('')
  const [dataFetch, setDataFetch] = useState(false)
  const [success, setSuccess] = useState('')

  const companyChange = async event => {
    setSelectedStationCompanies(event.target.value)
    setSelectedStationLines(null)
    setSelectedStation(null)
    const sendData = { companyCode: event.target.value }
    const res = await axios.post('/api/manages/access/company_change', sendData)
    setStationLines(res.data)
  }
  const lineChange = async event => {
    setSelectedStationLines(event.target.value)
    setSelectedStation(null)
    const sendData = { lineCode: event.target.value }
    const res = await axios.post('/api/manages/access/line_change', sendData)
    setStations(res.data)
  }
  const stationChange = event => {
    setSelectedStation(event.target.value)
  }
  const stationRemarkChange = event => {
    setStationRemark(event.target.value)
  }
  const submit = async () => {
    const sendData = {
      selectedStationCompanies,
      selectedStationLines,
      selectedStation,
      stationRemark,
    }
    const res = await axios.post('/api/manages/access/update', sendData)
    res.data
      ? setSuccess('更新が完了しました。')
      : setSuccess('変更がありませんでした。')
    window.setTimeout(function () {
      setSuccess('')
    }, 4000)
  }
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/access')
      setStationCompanies(res.data.station_companies)
      setStationLines(res.data.station_lines)
      setStations(res.data.stations)
      setSelectedStationCompanies(res.data.selected?.company_code)
      setSelectedStationLines(res.data.selected?.line_code)
      setSelectedStation(res.data.selected?.station_code)
      setStationRemark(res.data.selected?.remark)
      setDataFetch(true)
    })()
  }, [])
  return (
    <>
      {stationCompanies && dataFetch && (
        <Grid container spacing={2}>
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
          <Grid item xs={4}>
            <Typography variant="item" className="item">
              最寄り駅設定
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl sx={{ minWidth: '300px' }} size="small">
              <InputLabel>鉄道会社</InputLabel>
              <Select
                value={selectedStationCompanies}
                label="鉄道会社"
                onChange={companyChange}>
                {stationCompanies.map((data, index) => (
                  <MenuItem key={index} value={data.company_code}>
                    {data.company_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={8}>
            <FormControl sx={{ minWidth: '300px' }} size="small">
              <InputLabel>路線</InputLabel>
              <Select
                value={selectedStationLines}
                label="路線"
                onChange={lineChange}>
                {stationLines?.map((data, index) => (
                  <MenuItem key={index} value={data.line_code}>
                    {data.line_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={8}>
            <FormControl sx={{ minWidth: '300px' }} size="small">
              <InputLabel>駅</InputLabel>
              <Select
                value={selectedStation}
                label="駅"
                onChange={stationChange}>
                {stations?.map((data, index) => (
                  <MenuItem key={index} value={data.station_code}>
                    {data.station_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={8}>
            <TextField
              id="outlined-multiline-static"
              label="備考"
              multiline
              fullWidth
              value={stationRemark}
              onChange={stationRemarkChange}
              placeholder="例)●●線▲▲駅 徒歩5分"
              rows={4}
            />
          </Grid>
        </Grid>
      )}
      <div className="button-area">
        <Button variant="contained" onClick={submit}>
          更新
        </Button>
      </div>
    </>
  )
}
export default Index
