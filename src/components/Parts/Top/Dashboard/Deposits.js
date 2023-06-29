import * as React from 'react'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Title from './Title'

export default function Deposits(props) {
  const { todayShifts } = props
  return (
    <React.Fragment>
      <Title>今日のシフト</Title>
      {todayShifts.length === 0 ? (
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          本日のシフトはありません。
        </Typography>
      ) : (
        <>
          {todayShifts.map((data, index) => (
            <div key={index}>
              <Typography variant="bold">
                {data.nick_name} : {data.shifts[0].start_time.slice(0, -3)} ~{' '}
                {data.shifts[0].end_time.slice(0, -3)}
              </Typography>
            </div>
          ))}
        </>
      )}
      <div className="mt1">
        <Link color="primary" href="/shifts">
          シフト登録はこちら
        </Link>
      </div>
    </React.Fragment>
  )
}
