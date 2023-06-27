import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import ja from 'date-fns/locale/ja'
import dayjs from 'dayjs'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const ReserveCalendarModal = props => {
  const {
    modalOpen,
    setModalOpen,
    reserveData,
    categories,
    setReserveData,
    submit,
    errors,
    units,
    kind,
    setKind,
  } = props
  console.log(kind)
  const handleClose = () => setModalOpen(false)
  const required = () => {
    return <span className="px-05 color-white ml1 bg-red fs-08">必須</span>
  }
  const nullable = () => {
    return <span className="px-05 color-white ml1 bg-madgray fs-08">任意</span>
  }

  const reserveDataChange = (e, name) => {
    setReserveData(prevState => ({ ...prevState, [name]: e.target.value }))
  }
  const close = () => {
    setModalOpen(false)
    setKind('new')
    setReserveData({
      id: '',
      reserveDay: '',
      category: '1',
      lastName: '',
      lastNameKana: '',
      firstName: '',
      firstNameKana: '',
      mobileTel: '',
      fixedTel: '',
      email: '',
      birth: '',
      examination: '1',
      remark: '',
      gender: '1',
      startTime: '',
      endTime: '',
    })
  }
  const err = () => {
    if (errors) {
      return errors.map((data, i) => {
        return (
          <Stack sx={{ width: '100%' }} key={i} spacing={2} className="mb-05">
            <Alert severity="error">{data}</Alert>
          </Stack>
        )
      })
    }
  }
  const yearSelectSet = () => {
    return [...Array(100)].map((_, i) => {
      return (
        <MenuItem value={1923 + i} key={i}>
          {1923 + i}年
        </MenuItem>
      )
    })
  }
  const monthSelectSet = () => {
    return [...Array(12)].map((_, i) => {
      return (
        <MenuItem value={i + 1} key={i}>
          {i + 1}月
        </MenuItem>
      )
    })
  }
  const daySelectSet = () => {
    if (!reserveData.birthYear || !reserveData.birthMonth) return
    let datesOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const datesOfFebruary = isLeapYear(reserveData.birthYear) ? 29 : 28
    datesOfYear = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return [...Array(datesOfYear[reserveData.birthMonth - 1])].map((_, i) => {
      return (
        <MenuItem value={i + 1} key={i}>
          {i + 1}日
        </MenuItem>
      )
    })
  }
  const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {err()}
          <Typography variant="largeBold" component="h2">
            {kind === 'new' ? <>予約登録</> : <>予約編集</>}
          </Typography>
          <Grid container spacing={2} className="mt1">
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">患者姓</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者姓"
                size="small"
                fullWidth
                value={reserveData.lastName}
                onChange={e => reserveDataChange(e, 'lastName')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">患者名</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者名"
                size="small"
                fullWidth
                value={reserveData.firstName}
                onChange={e => reserveDataChange(e, 'firstName')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">患者姓(カナ)</Typography>
              {required()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者姓(カナ)"
                size="small"
                fullWidth
                value={reserveData.lastNameKana}
                onChange={e => reserveDataChange(e, 'lastNameKana')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">患者名(カナ)</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="患者名(カナ)"
                size="small"
                fullWidth
                value={reserveData.firstNameKana}
                onChange={e => reserveDataChange(e, 'firstNameKana')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">予約日</Typography>
              {required()}
            </Grid>
            <Grid item xs={2}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                dateFormats={{ monthAndYear: 'yyyy年 MM月', year: 'yyyy年' }}
                adapterLocale={ja}
                localeText={{
                  previousMonth: '前月を表示', // < のツールチップ
                  nextMonth: '次月を表示', // > のツールチップ
                  cancelButtonLabel: 'キャンセル', // スマホ画面のCANCELボタン
                  okButtonLabel: '選択', // スマホ画面のOKボタン
                }}>
                <DatePicker
                  inputFormat="yyyy年MM月dd日"
                  mask="____年__月__日"
                  minDate={new Date('2023-06-01')}
                  maxDate={new Date('2025-06-01')}
                  value={new Date(reserveData.reserveDay)}
                  onChange={e => {
                    setReserveData(prevState => ({
                      ...prevState,
                      reserveDay: `${e.getFullYear()}-${(
                        '00' +
                        (e.getMonth() + 1)
                      ).slice(-2)}-${('00' + e.getDate()).slice(-2)}`,
                    }))
                  }}
                  slotProps={{
                    textField: {
                      placeholder: '****年**月**日',
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">予約時間</Typography>
              {required()}
            </Grid>
            <Grid item xs={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                ampm={false}
                adapterLocale={ja}>
                <TimePicker
                  label="予約開始時間"
                  value={
                    new Date(
                      0,
                      0,
                      0,
                      reserveData.startTime
                        ? Number(reserveData.startTime.slice(0, 2))
                        : 0,
                      reserveData.startTime
                        ? Number(reserveData.startTime.slice(-2))
                        : 0,
                    )
                  }
                  onChange={e => {
                    setReserveData(prevState => ({
                      ...prevState,
                      startTime: dayjs(e).format('HH:mm'),
                    }))
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                ampm={false}
                adapterLocale={ja}>
                <TimePicker
                  label="予約終了時間"
                  value={
                    new Date(
                      0,
                      0,
                      0,
                      reserveData.endTime
                        ? Number(reserveData.endTime.slice(0, 2))
                        : 0,
                      reserveData.endTime
                        ? Number(reserveData.endTime.slice(-2))
                        : 0,
                    )
                  }
                  minTime={new Date(0, 0, 0, 8)}
                  onChange={e => {
                    setReserveData(prevState => ({
                      ...prevState,
                      endTime: dayjs(e).format('HH:mm'),
                    }))
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">診療内容</Typography>
              {required()}
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Select
                  size="small"
                  value={reserveData.category}
                  onChange={e => reserveDataChange(e, 'category')}>
                  {categories?.map((data, index) => (
                    <MenuItem value={data.id} key={index}>
                      {data.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className="text-c">
              <Typography variant="bold">連絡先メールアドレス</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="連絡先メールアドレス"
                size="small"
                fullWidth
                value={reserveData.email}
                onChange={e => reserveDataChange(e, 'email')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">携帯電話番号</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="携帯電話番号"
                size="small"
                fullWidth
                value={reserveData.mobileTel}
                onChange={e => reserveDataChange(e, 'mobileTel')}
              />
            </Grid>
            <Grid item xs={2.1} className="text-c">
              <Typography variant="bold">固定電話番号</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={3.9}>
              <TextField
                label="固定電話番号"
                size="small"
                fullWidth
                value={reserveData.fixedTel}
                onChange={e => reserveDataChange(e, 'fixedTel')}
              />
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">患者性別</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <RadioGroup
                  row
                  onChange={e => reserveDataChange(e, 'gender')}
                  value={reserveData.gender}>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="女性"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="男性"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">当院での受診</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <RadioGroup
                  row
                  onChange={e => reserveDataChange(e, 'examination')}
                  value={reserveData.examination}>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="初診"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2回目以降"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">使用ユニット</Typography>
              {required()}
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <Select
                  size="small"
                  value={reserveData.unit}
                  onChange={e => reserveDataChange(e, 'unit')}>
                  {units?.map((data, index) => (
                    <MenuItem value={data.id} key={index}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} className="text-c">
              <Typography variant="bold">生年月日</Typography>
              {nullable()}
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={9}
                  lg={9}
                  className="gap-20 bl-gray-pc  bb-gray">
                  <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                    <InputLabel>年</InputLabel>
                    <Select
                      value={reserveData.birthYear}
                      label="年"
                      onChange={e => reserveDataChange(e, 'birthYear')}>
                      {yearSelectSet()}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                    <InputLabel>月</InputLabel>
                    <Select
                      value={reserveData.birthMonth}
                      label="月"
                      onChange={e => reserveDataChange(e, 'birthMonth')}>
                      {monthSelectSet()}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                    <InputLabel>日</InputLabel>
                    <Select
                      value={reserveData.birthDay}
                      label="日"
                      onChange={e => reserveDataChange(e, 'birthDay')}>
                      {daySelectSet()}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="justify-center gap-20 flex mt1">
              <Button variant="outlined" onClick={close}>
                閉じる
              </Button>
              {kind === 'new' ? (
                <Button variant="contained" onClick={submit}>
                  登録
                </Button>
              ) : (
                <Button variant="contained" onClick={submit}>
                  更新
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
export default ReserveCalendarModal
