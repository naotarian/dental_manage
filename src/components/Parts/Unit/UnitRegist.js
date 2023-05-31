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
const UnitRegist = props => {
  const {
    selectUnit,
    setSelectUnit,
    units,
    submit,
    listSelect,
    deleteUnit,
  } = props
  return (
    <Grid
      container
      spacing={0}
      style={{ width: '100%', padding: '1rem' }}
      component={Paper}>
      <Grid item xs={12} className="text-c mb1 relative">
        {listSelect ? (
          <Typography variant="largeBold">ユニット情報編集</Typography>
        ) : (
          <Typography variant="largeBold">ユニット新規登録</Typography>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteUnit(listSelect)}
          disabled={!listSelect}
          className="absolute right-0">
          削除
        </Button>
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">ユニット名</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField
          fullWidth
          required
          label="ユニット名"
          size="small"
          value={selectUnit.name}
          onChange={e => {
            setSelectUnit(prevState => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
          // error={staffNumberErr.length > 0}
          // helperText={staffNumberErr}
        />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">ユニット表示名</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField
          fullWidth
          required
          label="ユニット表示名"
          size="small"
          value={selectUnit.display_name}
          onChange={e => {
            setSelectUnit(prevState => ({
              ...prevState,
              display_name: e.target.value,
            }))
          }}
          // error={staffNumberErr.length > 0}
          // helperText={staffNumberErr}
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
          value={selectUnit.display_order}
          onChange={e => {
            setSelectUnit(prevState => ({
              ...prevState,
              display_order: e.target.value,
            }))
          }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1, max: units.length + 1 } }}
          helperText="※未入力の場合はシステムが自動で設定します。"
        />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">予約優先度</Typography>
      </Grid>
      <Grid item xs={4} className="b-gray p1">
        <TextField
          required
          value={selectUnit.priority}
          onChange={e => {
            setSelectUnit(prevState => ({
              ...prevState,
              priority: e.target.value,
            }))
          }}
          size="small"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1, max: units.length + 1 } }}
          helperText="※未入力の場合はシステムが自動で設定します。"
        />
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">状態</Typography>
      </Grid>
      <Grid item xs={10} className="b-gray p1">
        <FormControl>
          {/* <FormControl error={genderErr.length > 0}> */}
          <RadioGroup
            onChange={e => {
              setSelectUnit(prevState => ({
                ...prevState,
                status: e.target.value,
              }))
            }}
            row>
            <FormControlLabel
              value="S"
              control={<Radio checked={selectUnit.status == 'S'} />}
              label="稼働中"
            />
            <FormControlLabel
              value="O"
              control={<Radio checked={selectUnit.status == 'O'} />}
              label="稼働停止中"
            />
          </RadioGroup>
          {/* <FormHelperText color="error">{genderErr}</FormHelperText> */}
        </FormControl>
      </Grid>
      <Grid item xs={2} className="b-gray p1">
        <Typography variant="bold">対応できる診療項目</Typography>
      </Grid>
      <Grid item xs={10} className="b-gray p1"></Grid>
      <div className="button-area">
        <Button variant="contained" onClick={submit}>
          登録
        </Button>
      </div>
    </Grid>
  )
}
export default UnitRegist
