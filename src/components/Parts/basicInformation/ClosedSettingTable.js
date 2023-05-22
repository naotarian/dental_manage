import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ToggleButton from '@mui/material/ToggleButton'
import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const ClosedSettingTable = () => {
  const [data, setData] = useState([
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
    {
      sunday: {
        is_closed: false,
        is_morning: true,
        is_afternoon: false,
        morning_start: '08:00',
        morning_end: '13:00',
        afternoon_start: null,
        afternoon_end: null,
      },
      monday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: true,
        morning_start: null,
        morning_end: null,
        afternoon_start: '13:30',
        afternoon_end: '19:00',
      },
      tuesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      wednesday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      thursday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      friday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
      saturday: {
        is_closed: false,
        is_morning: false,
        is_afternoon: false,
        morning_start: null,
        morning_end: null,
        afternoon_start: null,
        afternoon_end: null,
      },
    },
  ])
  const change = (num, yobi) => {
    let newValue = data
    newValue[num][yobi].is_closed = !newValue[num][yobi].is_closed
    if (newValue[num][yobi].is_closed) {
      newValue[num][yobi].is_morning = false
      newValue[num][yobi].is_afternoon = false
      newValue[num][yobi].morning_start = null
      newValue[num][yobi].morning_end = null
      newValue[num][yobi].morning_start = null
      newValue[num][yobi].morning_end = null
    }
    setData(data.map((d, index) => (index === num ? newValue[num] : d)))
  }
  const timeItem = time => {
    let items = []
    for (let i = 0; i < 24; i++) {
      items.push(
        <option
          selected={time == `${('00' + i).slice(-2)}:00`}
          value={`${i}:00`}
          key={`${i}:00`}>
          {i}:00
        </option>,
      )
      items.push(
        <option
          selected={time == `${('00' + i).slice(-2)}:30`}
          value={`${i}:30`}
          key={`${i}:30`}>
          {i}:30
        </option>,
      )
    }
    return items
  }
  const change_morning_check = (event, num, yobi) => {
    let newValue = data
    newValue[num][yobi].is_morning = event.target.checked
    setData(data.map((d, index) => (index === num ? newValue[num] : d)))
  }
  const change_afternoon_check = (event, num, yobi) => {
    let newValue = data
    newValue[num][yobi].is_afternoon = event.target.checked
    setData(data.map((d, index) => (index === num ? newValue[num] : d)))
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell
              align="center"
              className="bold"
              style={{ color: '#FF0000' }}>
              日
            </TableCell>
            <TableCell align="center" className="bold">
              月
            </TableCell>
            <TableCell align="center" className="bold">
              火
            </TableCell>
            <TableCell align="center" className="bold">
              水
            </TableCell>
            <TableCell align="center" className="bold">
              木
            </TableCell>
            <TableCell align="center" className="bold">
              金
            </TableCell>
            <TableCell
              align="center"
              className="bold"
              style={{ color: '#007bff' }}>
              土
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}>
              <>
                <TableCell align="center" style={{ whiteSpace: 'nowrap' }}>
                  第{index + 1}週
                </TableCell>
                {[
                  'sunday',
                  'monday',
                  'tuesday',
                  'wednesday',
                  'thursday',
                  'friday',
                  'saturday',
                ].map((dow, i) => (
                  <TableCell align="center" key={i}>
                    <ToggleButton
                      value="check"
                      selected={d[dow].is_closed}
                      color="error"
                      onChange={() => change(index, dow)}>
                      {d[dow].is_closed ? (
                        <Typography variant="body2" color="error">
                          休診
                        </Typography>
                      ) : (
                        <Typography variant="body2">診察</Typography>
                      )}
                    </ToggleButton>
                    <FormControlLabel
                      style={{ whiteSpace: 'nowrap' }}
                      disabled={d[dow].is_closed}
                      control={
                        <Checkbox
                          onChange={e => change_morning_check(e, index, dow)}
                          checked={d[dow].is_morning}
                          style={{ padding: 0, paddingRight: '2px' }}
                          size="small"
                        />
                      }
                      label={
                        <span
                          style={{
                            fontSize: '0.4rem',
                            color: '#333',
                            fontWeight: 'bold',
                          }}>
                          午前診療
                        </span>
                      }
                    />
                    <div>
                      <select
                        disabled={!d[dow].is_morning}
                        style={{ fontSize: '.4rem' }}>
                        {timeItem(d[dow].morning_start)}
                      </select>
                      ~
                      <select
                        disabled={!d[dow].is_morning}
                        style={{ fontSize: '.4rem' }}>
                        {timeItem(d[dow].morning_end)}
                      </select>
                    </div>
                    <FormControlLabel
                      style={{ whiteSpace: 'nowrap' }}
                      disabled={d[dow].is_closed}
                      control={
                        <Checkbox
                          onChange={e => change_afternoon_check(e, index, dow)}
                          checked={d[dow].is_afternoon}
                          style={{ padding: 0, paddingRight: '2px' }}
                          size="small"
                        />
                      }
                      label={
                        <span
                          style={{
                            fontSize: '0.4rem',
                            color: '#333',
                            fontWeight: 'bold',
                          }}>
                          午後診療
                        </span>
                      }
                    />
                    <div>
                      <select
                        disabled={!d[dow].is_afternoon}
                        style={{ fontSize: '.4rem' }}>
                        {timeItem(d[dow].afternoon_start)}
                      </select>
                      ~
                      <select
                        disabled={!d[dow].is_afternoon}
                        style={{ fontSize: '.4rem' }}>
                        {timeItem(d[dow].afternoon_end)}
                      </select>
                    </div>
                  </TableCell>
                ))}
              </>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ClosedSettingTable
