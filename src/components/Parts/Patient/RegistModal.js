import { useState, useRef } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import axios from '@/lib/axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ddd',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'scroll',
}

export default function RegistModal(props) {
  const {
    registModalOpen,
    setRegistModalOpen,
    registData,
    setRegistData,
    setRegisted,
  } = props
  const [errors, setErrors] = useState([])
  const scrollModalRef = useRef(null)

  const handleClose = () => {
    setRegistModalOpen(false)
    setErrors([])
    setRegistData({
      patientNumber: '',
      lastName: '',
      lastNameKana: '',
      firstName: '',
      firstNameKana: '',
      mobileTel: '',
      fixedTel: '',
      email: '',
      remark: '',
      gender: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
    })
  }
  const required = () => {
    return <span className="px-05 color-white ml1 bg-red fs-08">必須</span>
  }
  const nullable = () => {
    return <span className="px-05 color-white ml1 bg-madgray fs-08">任意</span>
  }
  const registDataChange = (e, name) => {
    setRegistData(prevState => ({ ...prevState, [name]: e.target.value }))
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
        <MenuItem value={('00' + (i + 1)).slice(-2)} key={i}>
          {i + 1}月
        </MenuItem>
      )
    })
  }
  const daySelectSet = () => {
    if (!registData.birthYear || !registData.birthMonth) return
    let datesOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const datesOfFebruary = isLeapYear(registData.birthYear) ? 29 : 28
    datesOfYear = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return [...Array(datesOfYear[registData.birthMonth - 1])].map((_, i) => {
      return (
        <MenuItem value={('00' + (i + 1)).slice(-2)} key={i}>
          {('00' + (i + 1)).slice(-2)}日
        </MenuItem>
      )
    })
  }
  const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  const submit = async () => {
    try {
      await axios.post('/api/manages/patient/regist', registData)
      setRegisted('患者様情報を登録しました。')
    } catch (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setErrors(e.response.data.errors)
      scrollModalRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start',
      })
    }
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
  return (
    <div>
      <Modal
        open={registModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {err()}
          <Typography variant="h2" ref={scrollModalRef}>
            患者情報の登録
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            診察券番号と、その他の情報を入力することで、患者様の管理ができるようになります。
          </Typography>
          <Grid container spacing={2} className="mt-05">
            <Grid item xs={12}>
              <Typography className="px-1 bg-gray">
                診察券番号{required()}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="診察券番号"
                size="small"
                value={registData.patientNumber}
                onChange={e => registDataChange(e, 'patientNumber')}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className="px-1 bg-gray">
                患者様氏名{required()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="姓"
                size="small"
                value={registData.lastName}
                onChange={e => registDataChange(e, 'lastName')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="名"
                size="small"
                value={registData.firstName}
                onChange={e => registDataChange(e, 'firstName')}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className="px-1 bg-gray">
                患者様氏名(フリガナ){required()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="姓(フリガナ)"
                size="small"
                value={registData.lastNameKana}
                onChange={e => registDataChange(e, 'lastNameKana')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="名(フリガナ)"
                size="small"
                value={registData.firstNameKana}
                onChange={e => registDataChange(e, 'firstNameKana')}
              />
            </Grid>
            <Grid item xs={12}>
              <Accordion style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="bold">任意項目を入力する</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} className="mt-05">
                    <Grid item xs={12}>
                      <Typography className="px-1 bg-gray">
                        連絡先メールアドレス{nullable()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="メールアドレス"
                        size="small"
                        fullWidth
                        value={registData.email}
                        onChange={e => registDataChange(e, 'email')}
                      />
                      <Typography variant="caption">
                        ※定期健診のお知らせ等を自動で行うことができます。
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="px-1 bg-gray">
                        携帯電話番号{nullable()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="携帯電話番号"
                        size="small"
                        fullWidth
                        value={registData.mobileTel}
                        onChange={e => registDataChange(e, 'mobileTel')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="px-1 bg-gray">
                        固定電話番号{nullable()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="固定電話番号"
                        size="small"
                        fullWidth
                        value={registData.fixedTel}
                        onChange={e => registDataChange(e, 'fixedTel')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="px-1 bg-gray">
                        性別{nullable()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="flex justify-around gap-20">
                        <input
                          type="radio"
                          name="sex"
                          value="1"
                          className="btnRadio"
                          id="woman"
                          onChange={e => {
                            registDataChange(e, 'gender')
                          }}
                        />
                        <label htmlFor="woman" className="btnRadioLabel wi45">
                          女性
                        </label>
                        <input
                          type="radio"
                          name="sex"
                          value="2"
                          className="btnRadio"
                          id="man"
                          onChange={e => {
                            registDataChange(e, 'gender')
                          }}
                        />
                        <label htmlFor="man" className="btnRadioLabel wi45">
                          男性
                        </label>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className="px-1 bg-gray">
                        生年月日{nullable()}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                        <InputLabel>年</InputLabel>
                        <Select
                          value={registData.birthYear}
                          label="年"
                          style={{ minWidth: '80px' }}
                          onChange={e => registDataChange(e, 'birthYear')}>
                          {yearSelectSet()}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                        <InputLabel>月</InputLabel>
                        <Select
                          value={registData.birthMonth}
                          label="月"
                          style={{ minWidth: '80px' }}
                          onChange={e => registDataChange(e, 'birthMonth')}>
                          {monthSelectSet()}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
                        <InputLabel>日</InputLabel>
                        <Select
                          value={registData.birthDay}
                          label="日"
                          style={{ minWidth: '80px' }}
                          onChange={e => registDataChange(e, 'birthDay')}>
                          {daySelectSet()}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="患者様備考"
                        value={registData.remark}
                        multiline
                        fullWidth
                        rows={4}
                        placeholder="例)麻酔効きにくい、遅刻多い ...etc"
                        onChange={e => registDataChange(e, 'remark')}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={12} className="flex gap-20 justify-center">
              <Button variant="outlined" onClick={handleClose}>
                閉じる
              </Button>
              <Button variant="contained" onClick={submit}>
                登録する
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                ※閉じるを押した場合は、入力したデータはリセットされます。
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
