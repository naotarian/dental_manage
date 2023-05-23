import { useState, useEffect } from 'react'

//mui
import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'

import CheckIcon from '@mui/icons-material/Check'

import { Typography, Grid, Button } from '@mui/material'

//Parts
import axios from '@/lib/axios'
const Index = () => {
  const [categories, setCategories] = useState(null)
  const [dataFetch, setDataFetch] = useState(false)
  const [checkList, setCheckList] = useState([])
  const [success, setSuccess] = useState('')
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/medical_treatment')
      setCategories(res.data.categories)
      setCheckList(res.data.default_checks)
      setDataFetch(true)
    })()
  }, [])
  const check = id => {
    checkList.includes(id)
      ? setCheckList(checkList.filter((l, _) => l !== id))
      : setCheckList([...checkList, id])
  }
  const submit = async () => {
    const sendData = { checkList }
    const res = await axios.post(
      '/api/manages/medical_treatment/update',
      sendData,
    )
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSuccess('診療内容情報を更新しました。')
    window.setTimeout(function () {
      setSuccess('')
    }, 3000)
  }
  return (
    <>
      {dataFetch && (
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
          <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
            <Alert variant="filled" severity="info">
              実際に取り扱っている項目にチェックを入れてください。
            </Alert>
          </Stack>
          <Grid item xs={2}>
            <Typography variant="item" className="item">
              診療内容
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {categories.map((data, index) => {
              return (
                <div key={index} className="mt1 mb1">
                  <Typography variant="h2">{data.title}</Typography>
                  <FormGroup style={{ flexDirection: 'row' }}>
                    {data?.children.map((d, index) => {
                      return (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              checked={checkList.includes(d.id)}
                              onChange={() => check(d.id)}
                            />
                          }
                          label={d.title}
                        />
                      )
                    })}
                  </FormGroup>
                  <Divider />
                </div>
              )
            })}
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
