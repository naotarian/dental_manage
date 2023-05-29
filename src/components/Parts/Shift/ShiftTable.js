import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import Link from 'next/link'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const ShiftTable = props => {
  const { staff, days, shifts } = props
  const shiftData = (id, day) => {
    // console.log(day)
    // console.log(id)
    const target = shifts[day].find(data => data.staff_id === id)
    console.log(target)
    if (target === undefined) {
      console.log('test')
      return <FormControlLabel control={<Checkbox />} label="-" />
    }
    return (
      <FormControlLabel
        control={<Checkbox />}
        label={
          target.start_time.slice(0, -3) + '~' + target.end_time.slice(0, -3)
        }
      />
    )
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
                <TableCell></TableCell>
                {staff?.map((data, index) => (
                  <TableCell align="left" key={index}>
                    {data.nick_name}
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
                    style={{ width: '100px', borderRight: '1px solid #ddd' }}>
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
    </>
  )
}
export default ShiftTable
const dow = ['月', '火', '水', '木', '金', '土', '日']
