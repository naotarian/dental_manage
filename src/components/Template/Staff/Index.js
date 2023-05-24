import { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import CheckIcon from '@mui/icons-material/Check'

import StaffList from '@/components/Parts/Staff/StaffList'
import StaffRegist from '@/components/Parts/Staff/StaffRegist'
import axios from '@/lib/axios'
const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [colors, setColors] = useState(null)
  const [staff, setStaff] = useState(null)

  const [gender, setGender] = useState('')
  const [staffColor, setStaffColor] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [staffNumber, setStaffNumber] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastNameKana, setLastNameKana] = useState('')
  const [firstNameKana, setFirstNameKana] = useState('')
  const [nickName, setNickName] = useState('')
  const [displayOrder, setDisplayOrder] = useState('')
  const [priority, setPriority] = useState('')
  const [listSelect, setListSelect] = useState(0)
  const [success, setSuccess] = useState('')
  const [destory, setDestory] = useState('')
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/staff')
      setColors(res.data.colors)
      setStaff(res.data.staff)
      setPriority(res.data.staff.length + 1)
      setDisplayOrder(res.data.staff.length + 1)
      setStaffNumber(res.data.staff.length + 1)
      setDataFetch(true)
    })()
  }, [])
  const regist = async sendData => {
    const res = await axios.post('/api/manages/staff/regist', sendData)
    setGender('')
    setFirstName('')
    setLastName('')
    setLastNameKana('')
    setFirstNameKana('')
    setNickName('')
    setDisplayOrder(res.data.staff.length + 1)
    setPriority(res.data.staff.length + 1)
    setStaffColor(1)
    setStaff(res.data.staff)
    setListSelect(0)
    sendData.staffId
      ? setSuccess('スタッフ情報を更新しました。')
      : setSuccess('スタッフを登録しました。')
    window.setTimeout(function () {
      setSuccess('')
    }, 4000)
  }
  const deleteStaff = async id => {
    var result = window.confirm(`本当に削除してよろしいですか?`)
    if (!result) return
    const res = await axios.post('/api/manages/staff/delete', {
      id: id,
    })
    setGender('')
    setFirstName('')
    setLastName('')
    setLastNameKana('')
    setFirstNameKana('')
    setNickName('')
    setDisplayOrder(res.data.staff.length + 1)
    setPriority(res.data.staff.length + 1)
    setStaffColor(1)
    setStaff(res.data.staff)
    setListSelect(0)
    setDestory('スタッフ情報を削除しました。')
    window.setTimeout(function () {
      setDestory('')
    }, 4000)
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
          {destory.length > 0 && (
            <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                variant="filled"
                severity="error">
                {destory}
              </Alert>
            </Stack>
          )}
          <Grid item xs={4}>
            <StaffList
              staff={staff}
              setGender={setGender}
              setStaffColor={setStaffColor}
              setSelectedColor={setSelectedColor}
              setStaffNumber={setStaffNumber}
              setLastName={setLastName}
              setFirstName={setFirstName}
              setLastNameKana={setLastNameKana}
              setFirstNameKana={setFirstNameKana}
              setNickName={setNickName}
              setDisplayOrder={setDisplayOrder}
              setPriority={setPriority}
              listSelect={listSelect}
              setListSelect={setListSelect}
            />
          </Grid>
          <Grid item xs={8}>
            <StaffRegist
              colors={colors}
              regist={regist}
              staff={staff}
              gender={gender}
              staffColor={staffColor}
              selectedColor={selectedColor}
              staffNumber={staffNumber}
              lastName={lastName}
              firstName={firstName}
              lastNameKana={lastNameKana}
              firstNameKana={firstNameKana}
              nickName={nickName}
              displayOrder={displayOrder}
              priority={priority}
              setGender={setGender}
              setStaffColor={setStaffColor}
              setSelectedColor={setSelectedColor}
              setStaffNumber={setStaffNumber}
              setLastName={setLastName}
              setFirstName={setFirstName}
              setLastNameKana={setLastNameKana}
              setFirstNameKana={setFirstNameKana}
              setNickName={setNickName}
              setDisplayOrder={setDisplayOrder}
              setPriority={setPriority}
              listSelect={listSelect}
              success={success}
              deleteStaff={deleteStaff}
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}
export default Index
