import * as React from 'react'

import { useTheme } from '@mui/material/styles'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import Title from './Title'

export default function Chart(props) {
  const { chartData } = props
  return (
    <>
      <Title>直近の予約件数</Title>
      {chartData.length && (
        <BarChart
          width={800}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="予約件数" fill="#1976d2" />
          <Bar dataKey="キャンセル数" fill="#e60000" />
        </BarChart>
      )}
    </>
  )
}
