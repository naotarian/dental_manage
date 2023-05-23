import { useState, useEffect } from 'react'

//mui
import { Typography, Grid, Button } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

//Parts
import axios from '@/lib/axios'
const Index = () => {
  const [categories, setCategories] = useState(null)
  const [dataFetch, setDataFetch] = useState(false)
  const [checkList, setCheckList] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/medical_treatment')
      setCategories(res.data.categories)
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
    console.log(checkList)
  }
  return (
    <>
      {dataFetch && (
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="item" className="item">
              診療内容
            </Typography>
          </Grid>
          <Grid item xs={10}>
            {categories.map((data, index) => {
              return (
                <div key={index}>
                  <Typography variant="h2">{data.title}</Typography>
                  <FormGroup style={{ flexDirection: 'row' }}>
                    {data?.children.map((d, index) => {
                      return (
                        <FormControlLabel
                          key={index}
                          control={<Checkbox onChange={() => check(d.id)} />}
                          label={d.title}
                        />
                      )
                    })}
                  </FormGroup>
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
