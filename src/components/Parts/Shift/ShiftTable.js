import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import Link from 'next/link'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const ShiftTable = props => {
  const {
    staff,
    days,
    shifts,
    checkList,
    setCheckList,
    open,
    handleClose,
    startTime,
    endTime,
    endChange,
    startChange,
    shiftSubmit,
    allChecked,
    setAllChecked,
  } = props

  const shiftData = (id, day) => {
    const target = shifts[day]?.find(data => data.staff_id === id)
    const some = checkList.some(b => b.day === day && b.id === id)
    if (target === undefined) {
      return (
        <FormControlLabel
          control={
            <Checkbox checked={some} onChange={() => changeCheck(day, id)} />
          }
          label="-"
        />
      )
    }
    return (
      <FormControlLabel
        control={
          <Checkbox checked={some} onChange={() => changeCheck(day, id)} />
        }
        label={
          target.start_time.slice(0, -3) + '~' + target.end_time.slice(0, -3)
        }
      />
    )
  }
  const changeCheck = (day, id) => {
    const some = checkList.some(b => b.day === day && b.id === id)
    if (some)
      setCheckList(prevState =>
        prevState.filter(b => !(b.day === day && b.id === id)),
      )
    if (!some) setCheckList(prevState => [...prevState, { day: day, id: id }])
  }
  const timeItem = () => {
    let items = []
    for (let i = 0; i < 24; i++) {
      items.push(
        <MenuItem key={i} value={`${('00' + i).slice(-2)}:00`}>
          {i}:00
        </MenuItem>,
      )
      items.push(
        <MenuItem key={i} value={`${('00' + i).slice(-2)}:30`}>
          {i}:30
        </MenuItem>,
      )
    }
    return items
  }
  const allCheck = (e, id) => {
    if (!e.target.checked) {
      let tmp = checkList.filter(function (o) {
        return o.id != id
      })
      setCheckList(tmp)
    }
    if (e.target.value) {
      Object.values(days).map((data, _) => {
        if (!data.closed) {
          const some = checkList.some(
            b => b.day === data.day_format && b.id === id,
          )
          if (!some) {
            setCheckList(prevState => [
              ...prevState,
              { id: id, day: data.day_format },
            ])
          }
        }
      })
      setAllChecked(prevState => [...prevState, id])
    }
  }
  const checkAllFlag = id => {
    let flag = true
    Object.keys(days).map((data, _) => {
      if (!days[data].closed)
        if (!checkList.some(b => b.id === id && b.day === data)) flag = false
    })
    return flag
  }
  return (
    <>
      {staff.length > 0 ? (
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="simple table"
            style={{ width: 'fitContent' }}>
            <TableHead>
              <TableRow>
                <TableCell />
                {staff?.map((data, index) => (
                  <TableCell align="left" key={index}>
                    <Typography variant="bold">{data.nick_name}</Typography>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={e => allCheck(e, data.id)}
                            checked={checkAllFlag(data.id)}
                          />
                        }
                        label="一括チェック"
                      />
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(days).map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component="th"
                    style={{
                      width: '100px',
                      borderRight: '1px solid #ddd',
                      color: row.holiday
                        ? '#ff0000'
                        : row.dow == 6
                        ? '#1E90FF'
                        : row.dow == 7
                        ? '#ff0000'
                        : '#333',
                    }}>
                    {row.day}({dow[row.dow - 1]})
                  </TableCell>
                  {staff?.map((data, i) => (
                    <TableCell
                      align="left"
                      component="th"
                      style={{ borderRight: '1px solid #ddd' }}>
                      {shiftData(data.id, row.day_format)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Paper className="p1">
          <Typography variant="h2">
            登録済みのスタッフ情報がありません。
            <br />
            <Link href="/staffs">
              <a>こちら</a>
            </Link>
            から、スタッフ登録を行ってください。
          </Typography>
        </Paper>
      )}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              登録するシフトの時間を選択してください。
            </Typography>
            <div className="flex gap-40 mt1">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                <InputLabel>シフト開始時間</InputLabel>
                <Select
                  value={startTime}
                  label="シフト開始時間"
                  onChange={startChange}>
                  {timeItem()}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                <InputLabel>シフト終了時間</InputLabel>
                <Select
                  value={endTime}
                  label="シフト終了時間"
                  onChange={endChange}>
                  {timeItem()}
                </Select>
              </FormControl>
            </div>
            <div className="text-r mt1">
              <Button variant="outlined" onClick={handleClose}>
                閉じる
              </Button>
              <Button
                className="ml1"
                variant="contained"
                disabled={!startTime || !endTime}
                onClick={shiftSubmit}>
                登録
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  )
}
export default ShiftTable
const dow = ['月', '火', '水', '木', '金', '土', '日']
