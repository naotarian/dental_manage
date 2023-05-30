import { useState } from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Link from 'next/link'
const StaffRegist = props => {
  const {
    colors,
    regist,
    gender,
    setGender,
    staffColor,
    setStaffColor,
    setSelectedColor,
    staffNumber,
    setStaffNumber,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    lastNameKana,
    setLastNameKana,
    firstNameKana,
    setFirstNameKana,
    nickName,
    setNickName,
    displayOrder,
    setDisplayOrder,
    priority,
    setPriority,
    listSelect,
    staff,
    deleteStaff,
    dentalTreat,
    treatCheckList,
    setTreatCheckList,
  } = props
  const [genderErr, setGenderErr] = useState('')
  const [staffNumberErr, setStaffNumberErr] = useState('')
  const [firstNameErr, setFirstNameErr] = useState('')
  const [firstNameKanaErr, setFirstNameKanaErr] = useState('')
  const [lastNameErr, setLastNameErr] = useState('')
  const [lastNameKanaErr, setLastNameKanaErr] = useState('')
  const genderChange = e => {
    setGender(e.target.value)
  }
  const handleChange = event => {
    setStaffColor(event.target.value)
    setSelectedColor(event.target.value - 1)
  }
  const staffNumberChange = e => {
    setStaffNumber(e.target.value)
  }
  const lastNameChange = e => {
    setLastName(e.target.value)
  }
  const firstNameChange = e => {
    setFirstName(e.target.value)
  }
  const lastNameKanaChange = e => {
    setLastNameKana(e.target.value)
  }
  const firstNameKanaChange = e => {
    setFirstNameKana(e.target.value)
  }
  const displayOrderChange = e => {
    setDisplayOrder(e.target.value)
  }
  const priorityChange = e => {
    setPriority(e.target.value)
  }
  const nickNameChange = e => {
    setNickName(e.target.value)
  }
  const check = id => {
    treatCheckList.includes(id)
      ? setTreatCheckList(treatCheckList.filter((l, _) => l !== id))
      : setTreatCheckList([...treatCheckList, id])
  }
  const submit = () => {
    let isError = false
    if (!gender) {
      isError = true
      setGenderErr('性別を選択してください。')
    } else {
      setGenderErr('')
    }
    if (!staffNumber) {
      isError = true
      setStaffNumberErr('社員番号を入力してください。')
    } else {
      setStaffNumberErr('')
    }
    if (!firstName) {
      isError = true
      setFirstNameErr('名を入力してください。')
    } else {
      setFirstNameErr('')
    }
    if (!firstNameKana) {
      isError = true
      setFirstNameKanaErr('名(カナ)を入力してください。')
    } else {
      if (firstNameKana.match(/[^ァ-ヶー　]+$/)) {
        setFirstNameKanaErr('名(カナ)は全角カタカナで入力してください。')
        isError = true
      } else {
        setFirstNameKanaErr('')
      }
    }
    if (!lastName) {
      isError = true
      setLastNameErr('姓を入力してください。')
    } else {
      setLastNameErr('')
    }
    if (!lastNameKana) {
      isError = true
      setLastNameKanaErr('姓(カナ)を入力してください。')
    } else {
      if (lastNameKana.match(/[^ァ-ヶー　]+$/)) {
        setLastNameKanaErr('姓(カナ)は全角カタカナで入力してください。')
        isError = true
      } else {
        setLastNameKanaErr('')
      }
    }
    if (isError) return
    const autoNum = listSelect ? staff.length : staff.length + 1
    const sendData = {
      gender,
      staffColor,
      staffNumber,
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      displayOrder: displayOrder ? displayOrder : autoNum,
      priority: priority ? priority : autoNum,
      nickName: nickName ? nickName : firstName,
      staffId: listSelect,
      treatCheckList,
    }
    regist(sendData)
  }

  return (
    <>
      {dentalTreat && (
        <Grid
          container
          spacing={0}
          style={{ width: '100%', padding: '1rem' }}
          component={Paper}>
          <Grid item xs={12} className="text-c mb1 relative">
            {listSelect ? (
              <Typography variant="largeBold">スタッフ情報編集</Typography>
            ) : (
              <Typography variant="largeBold">スタッフ新規登録</Typography>
            )}
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteStaff(listSelect)}
              disabled={!listSelect}
              className="absolute right-0">
              削除
            </Button>
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">社員番号</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <TextField
              fullWidth
              required
              label="社員番号"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 1 } }}
              size="small"
              value={staffNumber}
              onChange={staffNumberChange}
              error={staffNumberErr.length > 0}
              helperText={staffNumberErr}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">性別</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <FormControl error={genderErr.length > 0}>
              <RadioGroup
                onChange={genderChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel
                  value="1"
                  control={<Radio checked={gender == 1} />}
                  label="女性"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio checked={gender == 2} />}
                  label="男性"
                />
              </RadioGroup>
              <FormHelperText color="error">{genderErr}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">姓</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <TextField
              required
              label="姓"
              onChange={lastNameChange}
              value={lastName}
              fullWidth
              size="small"
              error={lastNameErr.length > 0}
              helperText={lastNameErr}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">名</Typography>
          </Grid>
          <Grid item xs={4} onChange={firstNameChange} className="b-gray p1">
            <TextField
              label="名"
              value={firstName}
              required
              fullWidth
              size="small"
              error={firstNameErr.length > 0}
              helperText={firstNameErr}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">姓(カナ)</Typography>
          </Grid>
          <Grid item xs={4} onChange={lastNameKanaChange} className="b-gray p1">
            <TextField
              value={lastNameKana}
              required
              label="姓(カナ)"
              fullWidth
              size="small"
              error={lastNameKanaErr.length > 0}
              helperText={lastNameKanaErr}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">名(カナ)</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <TextField
              required
              onChange={firstNameKanaChange}
              value={firstNameKana}
              label="名(カナ)"
              fullWidth
              size="small"
              error={firstNameKanaErr.length > 0}
              helperText={firstNameKanaErr}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">ニックネーム</Typography>
          </Grid>
          <Grid item xs={10} className="b-gray p1">
            <TextField
              required
              value={nickName}
              onChange={nickNameChange}
              label="ニックネーム"
              fullWidth
              size="small"
              helperText="※未入力の場合は名が設定されます。"
            />
          </Grid>

          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">スタッフカラー</Typography>
          </Grid>
          <Grid item xs={10} className="b-gray p1">
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small-label">
                スタッフカラー
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={staffColor}
                label="スタッフカラー"
                onChange={handleChange}>
                {colors?.map((data, index) => (
                  <MenuItem
                    key={index}
                    value={data.id}
                    selected={colors[staffColor].id == data.id}>
                    {data.color_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <span
              className="color-display-span"
              style={{ background: colors[staffColor - 1].color_code }}
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">表示順序</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <TextField
              required
              size="small"
              type="number"
              fullWidth
              value={displayOrder}
              onChange={displayOrderChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 1, max: staff.length + 1 } }}
              helperText="※未入力の場合はシステムが自動で設定します。"
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">予約優先度</Typography>
          </Grid>
          <Grid item xs={4} className="b-gray p1">
            <TextField
              required
              value={priority}
              onChange={priorityChange}
              size="small"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 1, max: staff.length + 1 } }}
              helperText="※未入力の場合はシステムが自動で設定します。"
            />
          </Grid>
          <Grid item xs={2} className="b-gray p1">
            <Typography variant="bold">対応できる診療項目</Typography>
          </Grid>
          <Grid item xs={10} className="b-gray p1">
            <FormGroup style={{ flexDirection: 'row' }}>
              <Grid container>
                <Grid item xs={12}>
                  {dentalTreat.length > 0 ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={treatCheckList.includes(data.category.id)}
                          onChange={e => {
                            const ids = dentalTreat.map(
                              obj => obj.medical_children_category_id,
                            )
                            if (e.target.checked) setTreatCheckList(ids)
                            if (!e.target.checked) setTreatCheckList([])
                          }}
                        />
                      }
                      label="全てチェック"
                    />
                  ) : (
                    <div>
                      <Typography>
                        診療項目が設定されていません。
                        <br />
                        <Link href="/medical_treatment">
                          <a className="bold">こちら</a>
                        </Link>
                        から、診療項目の設定を行ってください。
                      </Typography>
                    </div>
                  )}
                </Grid>
                {dentalTreat?.map((data, index) => (
                  <Grid item key={index} xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={treatCheckList.includes(data.category.id)}
                          onChange={() => check(data.category.id)}
                        />
                      }
                      label={data.category.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>
          <div className="button-area">
            <Button variant="contained" onClick={submit}>
              登録
            </Button>
          </div>
        </Grid>
      )}
    </>
  )
}
export default StaffRegist
