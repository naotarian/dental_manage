import * as React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { jaJP } from '@mui/material/locale'
import { ThemeProvider } from '@mui/material/styles'

import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import Link from 'next/link'

const columns = [
  { id: 'name', label: '受付日時' },
  { id: 'code', label: '予約番号' },
  { id: 'lastNameKana', label: '患者名フリガナ' },
  { id: 'date', label: '予約日' },
  { id: 'start', label: '予約開始時間' },
]

const ReserveTable = props => {
  dayjs.locale(ja)
  const { list } = props
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const dateFormat = date => {
    const day = dayjs(date)
    return day.format('YYYY-MM-DD(ddd) HH:mm')
  }
  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {dateFormat(row.created_at)}
                    </TableCell>
                    <TableCell align="left">
                      <Link href={`/reserve/${row.id}`}>
                        <a>{row.id}</a>
                      </Link>
                    </TableCell>
                    <TableCell align="left">
                      {row.detail?.full_name_kana}
                    </TableCell>
                    <TableCell align="left">{row.reserve_date}</TableCell>
                    <TableCell align="left">
                      {row.start_time.slice(0, -3)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ThemeProvider theme={jaJP}>
          <TablePagination
            labelRowsPerPage="表示件数:"
            rowsPerPageOptions={[
              { label: '1件', value: 1 },
              { label: '10件', value: 10 },
              { label: '50件', value: 50 },
              { label: '100件', value: 100 },
              { label: '全て', value: list.length },
            ]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </ThemeProvider>
      </Paper>
    </>
  )
}
export default ReserveTable
