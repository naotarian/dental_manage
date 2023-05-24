import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
const StaffRegist = props => {
  const { colors, regist } = props
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
  const submit = () => {
    const sendData = {
      gender,
      staffColor,
      staffNumber,
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      displayOrder,
      priority,
      nickName,
    }
    regist(sendData)
  }
  return (
    <Grid
      container
      spacing={0}
      style={{ width: '100%', padding: '1rem' }}
      component={Paper}>
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
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          size="small"
          value={staffNumber}
          onChange={staffNumberChange}
        />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">性別</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <FormControl>
          <RadioGroup
            onChange={genderChange}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="女性" />
            <FormControlLabel value="male" control={<Radio />} label="男性" />
          </RadioGroup>
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
        />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">名</Typography>
      </Grid>
      <Grid
        item
        xs={4}
        onChange={firstNameChange}
        value={firstName}
        className="b-gray p1">
        <TextField label="名" required fullWidth size="small" />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">姓(カナ)</Typography>
      </Grid>
      <Grid
        item
        xs={4}
        onChange={lastNameKanaChange}
        value={lastNameKana}
        className="b-gray p1">
        <TextField required label="姓(カナ)" fullWidth size="small" />
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
        />
      </Grid>

      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">スタッフカラー</Typography>
      </Grid>
      <Grid item xs={10} className="b-gray p1">
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">スタッフカラー</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={staffColor}
            label="スタッフカラー"
            onChange={handleChange}>
            {colors?.map((data, index) => (
              <MenuItem key={index} value={data.id}>
                {data.color_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <span
          className="color-display-span"
          style={{ background: colors[selectedColor].color_code }}></span>
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
          InputProps={{ inputProps: { min: 1, max: 10 } }}
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
          InputProps={{ inputProps: { min: 1, max: 10 } }}
        />
      </Grid>
      <div className="button-area">
        <Button variant="contained" onClick={submit}>
          登録
        </Button>
      </div>
    </Grid>
  )
}
export default StaffRegist
