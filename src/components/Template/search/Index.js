import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import axios from '@/lib/axios'
const Index = () => {
  const [dataFetch, setDataFetch] = useState([])
  const [dowNumber, setDowNumber] = useState([])
  const dow = [
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
    '日曜日',
    '祝日',
  ]
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/search/fetch')
      if (res.data.fetch?.day_of_weeks.length > 0) {
        let tmpArr = []
        res.data.fetch?.day_of_weeks.map((data, _) => {
          tmpArr.push(data.id)
        })
        setDowNumber(tmpArr)
      }
      setDataFetch(true)
    })()
  }, [])
  const dowChange = (e, num) => {
    if (e.target.checked) setDowNumber(prevState => [...prevState, num])
    if (!e.target.checked)
      setDowNumber(prevState => prevState.filter(value => value !== num))
  }
  const submit = async () => {
    await axios.post('/api/manages/search/update', { dowNumber })
  }
  return (
    <>
      {dataFetch && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="item" className="item">
                曜日検索設定
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormGroup style={{ flexDirection: 'row' }}>
                {[...Array(7)].map((data, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={dowNumber.includes(index + 1)}
                        onChange={e => dowChange(e, index + 1)}
                      />
                    }
                    label={dow[index]}
                  />
                ))}
              </FormGroup>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={submit}>
            更新
          </Button>
        </Box>
      )}
    </>
  )
}
export default Index
