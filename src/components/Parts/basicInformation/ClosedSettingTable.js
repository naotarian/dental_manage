//mui
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ToggleButton from '@mui/material/ToggleButton'

import { Typography } from '@mui/material'

const ClosedSettingTable = props => {
  const { data, holiday, setHoliday, setData } = props
  const timeItem = time => {
    return [...Array(24)].map((_, i) => {
      return (
        <>
          <option
            selected={time == `${('00' + i).slice(-2)}:00`}
            value={`${('00' + i).slice(-2)}:00`}
            key={`${i}:00`}>
            {i}:00
          </option>
          <option
            selected={time == `${('00' + i).slice(-2)}:30`}
            value={`${i}:30`}
            key={`${i}:30`}>
            {i}:30
          </option>
        </>
      )
    })
  }
  const change = (num, yobi) => {
    const target = data[num]
    target[yobi].is_closed = !target[yobi].is_closed
    //is_closedがtrueなら初期化
    if (target[yobi].is_closed) {
      target[yobi].is_morning = false
      target[yobi].is_afternoon = false
      target[yobi].morning_start = null
      target[yobi].morning_end = null
      target[yobi].afternoon_start = null
      target[yobi].afternoon_end = null
    }
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const holidayChange = () => {
    const target = holiday
    target.is_closed = !target.is_closed
    //is_closedがtrueなら初期化
    if (target.is_closed) {
      target.is_morning = false
      target.is_afternoon = false
      target.morning_start = null
      target.morning_end = null
      target.afternoon_start = null
      target.afternoon_end = null
    }
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
    // setHoliday(prevState => ({ ...prevState, target }))
  }

  const change_morning_check = (event, num, yobi) => {
    const target = data[num]
    target[yobi].is_morning = event.target.checked
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const change_afternoon_check = (event, num, yobi) => {
    const target = data[num]
    target[yobi].is_afternoon = event.target.checked
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const morning_start_change = (event, num, yobi) => {
    const target = data[num]
    target[yobi].morning_start = event.target.value
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const morning_end_change = (event, num, yobi) => {
    const target = data[num]
    target[yobi].morning_end = event.target.value
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const afternoon_start_change = (event, num, yobi) => {
    const target = data[num]
    target[yobi].afternoon_start = event.target.value
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  const afternoon_end_change = (event, num, yobi) => {
    const target = data[num]
    target[yobi].afternoon_end = event.target.value
    setData(data.map((d, index) => (index === num ? target : d)))
  }
  //祝日
  const change_morning_holiday = event => {
    const target = holiday
    target.is_morning = event.target.checked
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
    // setHoliday(prevState => ({ ...prevState, target }))
  }
  const change_afternoon_holiday = event => {
    const target = holiday
    target.is_afternoon = event.target.checked
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
  }
  const morning_start_holiday = event => {
    const target = holiday
    target.morning_start = event.target.value
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
  }
  const morning_end_holiday = event => {
    const target = holiday
    target.morning_end = event.target.value
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
  }
  const afternoon_start_holiday = event => {
    const target = holiday
    target.afternoon_start = event.target.value
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
  }
  const afternoon_end_holiday = event => {
    const target = holiday
    target.afternoon_end = event.target.value
    setHoliday({
      ...holiday,
      is_closed: target.is_closed,
      is_morning: target.is_morning,
      is_afternoon: target.is_afternoon,
      morning_start: target.morning_start,
      morning_end: target.morning_end,
      afternoon_start: target.afternoon_start,
      afternoon_end: target.afternoon_end,
    })
  }
  return (
    <TableContainer component={Paper} style={{ maxHeight: '550px' }}>
      {data && (
        <Table>
          <TableHead className="sticky z-999 top-0 bg-white">
            <TableRow>
              <TableCell />
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
                          onChange={e => morning_start_change(e, index, dow)}
                          disabled={!d[dow].is_morning}
                          style={{ fontSize: '.4rem' }}>
                          {timeItem(d[dow].morning_start)}
                        </select>
                        ~
                        <select
                          onChange={e => morning_end_change(e, index, dow)}
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
                            onChange={e =>
                              change_afternoon_check(e, index, dow)
                            }
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
                          onChange={e => afternoon_start_change(e, index, dow)}
                          disabled={!d[dow].is_afternoon}
                          style={{ fontSize: '.4rem' }}>
                          {timeItem(d[dow].afternoon_start)}
                        </select>
                        ~
                        <select
                          onChange={e => afternoon_end_change(e, index, dow)}
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
            <TableRow>
              <TableCell align="center" style={{ whiteSpace: 'nowrap' }}>
                祝日
              </TableCell>
              <TableCell align="center">
                <ToggleButton
                  value="check"
                  color="error"
                  selected={holiday.is_closed}
                  onChange={() => holidayChange()}>
                  {holiday.is_closed ? (
                    <Typography variant="body2" color="error">
                      休診
                    </Typography>
                  ) : (
                    <Typography variant="body2">診察</Typography>
                  )}
                </ToggleButton>
                <FormControlLabel
                  style={{ whiteSpace: 'nowrap' }}
                  disabled={holiday.is_closed}
                  control={
                    <Checkbox
                      onChange={change_morning_holiday}
                      checked={holiday.is_morning}
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
                    onChange={morning_start_holiday}
                    disabled={!holiday.is_morning}
                    style={{ fontSize: '.4rem' }}>
                    {timeItem(holiday.morning_start)}
                  </select>
                  ~
                  <select
                    onChange={morning_end_holiday}
                    disabled={!holiday.is_morning}
                    style={{ fontSize: '.4rem' }}>
                    {timeItem(holiday.morning_end)}
                  </select>
                </div>
                <FormControlLabel
                  style={{ whiteSpace: 'nowrap' }}
                  disabled={holiday.is_closed}
                  control={
                    <Checkbox
                      onChange={change_afternoon_holiday}
                      checked={holiday.is_afternoon}
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
                    onChange={afternoon_start_holiday}
                    disabled={!holiday.is_afternoon}
                    style={{ fontSize: '.4rem' }}>
                    {timeItem(holiday.afternoon_start)}
                  </select>
                  ~
                  <select
                    onChange={afternoon_end_holiday}
                    disabled={!holiday.is_afternoon}
                    style={{ fontSize: '.4rem' }}>
                    {timeItem(holiday.afternoon_end)}
                  </select>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </TableContainer>
  )
}
export default ClosedSettingTable
