import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import UnitList from '@/components/Parts/Unit/UnitList'
import UnitRegist from '@/components/Parts/Unit/UnitRegist'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import CheckIcon from '@mui/icons-material/Check'
const Index = () => {
  const [dataFetch, setDataFetch] = useState([])
  const [units, setUnits] = useState([])
  const [result, setResult] = useState('')
  const [deleteAlert, setDeleteAlert] = useState('')
  const [selectUnit, setSelectUnit] = useState({
    name: '',
    display_name: '',
    display_order: '',
    priority: '',
    status: 'S',
  })
  const [listSelect, setListSelect] = useState(0)
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/unit')
      setUnits(res.data.units)
      setSelectUnit(prevState => ({
        ...prevState,
        display_order: res.data.units.length + 1,
        priority: res.data.units.length + 1,
      }))
      setDataFetch(true)
    })()
  }, [])
  const submit = async () => {
    const kind = listSelect ? 'edit' : 'new'
    const sendData = {
      kind: kind,
      data: selectUnit,
      id: kind === 'edit' ? listSelect : '',
    }
    const res = await axios.post('/api/manages/unit/update', sendData)
    if (res.data.is_change) {
      setUnits(res.data.units)
      setResult('更新が完了しました。')
    }
    if (!res.data.is_change) setResult('変更がありませんでした。')
    setSelectUnit({
      name: '',
      display_name: '',
      display_order: res.data.units.length + 1,
      priority: res.data.units.length + 1,
      status: 'S',
    })
    setListSelect(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(function () {
      setResult('')
    }, 4000)
  }
  const deleteUnit = async id => {
    var result = window.confirm(`本当に削除してよろしいですか?`)
    if (!result) return
    const res = await axios.post('/api/manages/unit/delete', {
      id: id,
    })
    setUnits(res.data.units)
    setSelectUnit({
      name: '',
      display_name: '',
      display_order: res.data.units.length + 1,
      priority: res.data.units.length + 1,
      status: 'S',
    })
    setDeleteAlert('削除が完了しました。')
    setListSelect(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(function () {
      setDeleteAlert('')
    }, 4000)
  }
  return (
    <>
      {dataFetch && (
        <Grid container spacing={2}>
          {result.length > 0 && (
            <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                variant="filled"
                severity="success">
                {result}
              </Alert>
            </Stack>
          )}
          {deleteAlert.length > 0 && (
            <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                variant="filled"
                severity="error">
                {deleteAlert}
              </Alert>
            </Stack>
          )}
          <Grid item xs={4}>
            <UnitList
              units={units}
              listSelect={listSelect}
              setListSelect={setListSelect}
              setSelectUnit={setSelectUnit}
            />
          </Grid>
          <Grid item xs={8}>
            <UnitRegist
              selectUnit={selectUnit}
              setSelectUnit={setSelectUnit}
              units={units}
              submit={submit}
              listSelect={listSelect}
              deleteUnit={deleteUnit}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}
export default Index
