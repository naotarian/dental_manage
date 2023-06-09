import { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { useRouter } from 'next/router'

import RegistModal from '@/components/Parts/Patient/RegistModal'
import axios from '@/lib/axios'
const Index = () => {
  const router = useRouter()
  const [registModalOpen, setRegistModalOpen] = useState(false)
  const [registed, setRegisted] = useState(false)
  const [patient, setPatient] = useState([])
  const [patientNotNumber, setPatientNotNumber] = useState([])
  const [registData, setRegistData] = useState({
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
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/manages/patient')
      setPatient(res.data.patients)
      setPatientNotNumber(res.data.patients_not_number)
    })()
  }, [])
  const editPatient = id => {
    console.log(id)
    router.push(`/patients/edit/${id}`)
  }
  const handleOpen = () => setRegistModalOpen(true)
  return (
    <>
      {patient.length > 0 && (
        <>
          <div className="mb1 flex justify-space">
            <Typography variant="bold">
              診察券番号が設定されている患者様の一覧です。
            </Typography>
            <Button variant="contained" onClick={handleOpen}>
              新規登録
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">名前</TableCell>
                  <TableCell align="center">診察券番号</TableCell>
                  <TableCell align="center">性別</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {patient.map(row => (
                  <TableRow
                    key={row.last_name_kana}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                      {row.last_name_kana}
                    </TableCell>
                    <TableCell align="center">{row.patient_number}</TableCell>
                    <TableCell align="center">
                      {row.gender == '1' ? '女性' : '男性'}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => editPatient(row.id)}>
                        編集
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {patientNotNumber.length > 0 && (
        <>
          <div className="mb1">
            <Typography variant="bold">
              このリストに表示されている患者様は診察券番号が登録されていません。
              <br />
              診察券番号を入力してください。
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">名前</TableCell>
                  <TableCell align="center">診察券番号</TableCell>
                  <TableCell align="center">性別</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {patientNotNumber.map(row => (
                  <TableRow
                    key={row.last_name_kana}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                      {row.last_name_kana}
                    </TableCell>
                    <TableCell align="center">入力なし</TableCell>
                    <TableCell align="center">
                      {row.gender == '1' ? '女性' : '男性'}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => editPatient(row.id)}>
                        編集
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <RegistModal
        registModalOpen={registModalOpen}
        setRegistModalOpen={setRegistModalOpen}
        registData={registData}
        setRegistData={setRegistData}
        setRegisted={setRegisted}
      />
      {patient.length == 0 && patientNotNumber.length == 0 && (
        <Typography variant="h2">患者様情報はありません。</Typography>
      )}
    </>
  )
}
export default Index
