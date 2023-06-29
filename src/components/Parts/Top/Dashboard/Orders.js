import * as React from 'react'

import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useRouter } from 'next/router'

import Title from './Title'

export default function Orders(props) {
  const { todayReserves } = props
  const router = useRouter()
  const reserverDatail = id => {
    router.push(`/reserve/${id}`)
  }
  return (
    <React.Fragment>
      <Title>今日の予約</Title>
      {todayReserves.length === 0 ? (
        <>今日は予約がありません。</>
      ) : (
        <>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>氏名</TableCell>
                <TableCell>時間</TableCell>
                <TableCell>診療内容</TableCell>
                <TableCell>診察券番号</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {todayReserves.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.detail.last_name_kana}</TableCell>
                  <TableCell>{row.start_time.slice(0, -3)} ~</TableCell>
                  <TableCell>{row.detail.category.title}</TableCell>
                  <TableCell>{row.detail.category_id}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="text"
                      className="p0"
                      onClick={() => reserverDatail(row.id)}>
                      詳細
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link color="primary" href="/reserve/list" sx={{ mt: 3 }}>
            予約一覧はこちら
          </Link>
        </>
      )}
    </React.Fragment>
  )
}
