import { useState, useEffect } from 'react'

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import CheckIcon from '@mui/icons-material/Check'

import UnitList from '@/components/Parts/Unit/UnitList'
import UnitRegist from '@/components/Parts/Unit/UnitRegist'
import axios from '@/lib/axios'
const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [units, setUnits] = useState([])
  const [result, setResult] = useState('')
  const [deleteAlert, setDeleteAlert] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [displayNameErr, setDisplayNameErr] = useState('')
  const [displayOrderErr, setDisplayOrderErr] = useState('')
  const [priorityErr, setPriorityErr] = useState('')
  const [dentalTreat, setDentalTreat] = useState([])
  const [treatCheckList, setTreatCheckList] = useState([])
  const [unitTreat, setUnitTreat] = useState([])
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
      setUnitTreat(res.data.unit_treats)
      setUnits(res.data.units)
      setDentalTreat(res.data.treat)
      setSelectUnit(prevState => ({
        ...prevState,
        display_order: res.data.units.length + 1,
        priority: res.data.units.length + 1,
      }))
      setDataFetch(true)
    })()
  }, [])
  const submit = async () => {
    let isError = false
    if (!selectUnit.name) {
      isError = true
      setNameErr('ユニット名を入力してください。')
    } else {
      setNameErr('')
    }
    if (!selectUnit.display_name) {
      isError = true
      setDisplayNameErr('ユニット表示名を入力してください。')
    } else {
      setDisplayNameErr('')
    }
    if (!selectUnit.display_order) {
      isError = true
      setDisplayOrderErr('表示順序を入力してください。')
    } else {
      setDisplayOrderErr('')
    }
    if (!selectUnit.priority) {
      isError = true
      setPriorityErr('予約優先度を入力してください。')
    } else {
      setPriorityErr('')
    }
    if (isError) return
    const kind = listSelect ? 'edit' : 'new'
    const sendData = {
      kind: kind,
      data: selectUnit,
      treatCheckList: treatCheckList,
      id: kind === 'edit' ? listSelect : '',
    }
    const res = await axios.post('/api/manages/unit/update', sendData)
    if (res.data.is_change) {
      setUnits(res.data.units)
    }
    setResult('更新が完了しました。')
    setSelectUnit({
      name: '',
      display_name: '',
      display_order: res.data.units.length + 1,
      priority: res.data.units.length + 1,
      status: 'S',
    })
    setListSelect(0)
    setDentalTreat(res.data.treat)
    setTreatCheckList([])
    setUnitTreat(res.data.unit_treats)
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
              setTreatCheckList={setTreatCheckList}
              unitTreat={unitTreat}
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
              nameErr={nameErr}
              displayNameErr={displayNameErr}
              displayOrderErr={displayOrderErr}
              priorityErr={priorityErr}
              dentalTreat={dentalTreat}
              treatCheckList={treatCheckList}
              setTreatCheckList={setTreatCheckList}
              unitTreat={unitTreat}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}
export default Index
