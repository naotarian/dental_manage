import { useState } from 'react'

//components
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import styled from 'styled-components'

import SignUp from '@/components/Auth/SignUp'
import { useAuth } from '@/hooks/auth'
const StyledAlert = styled(Alert)`
  width: 80%;
  margin: 1rem auto;
`

const AdminRegister = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [dentalName, setDentalName] = useState('')
  const [tel, setTel] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastNameKana, setLastNameKana] = useState('')
  const [firstNameKana, setFirstNameKana] = useState('')
  const [email, setEmail] = useState('')
  const [postNumber, setPostNumber] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [address3, setAddress3] = useState('')
  const [address4, setAddress4] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    register({
      dentalName,
      email,
      password,
      password_confirmation,
      tel,
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      postNumber,
      address1,
      address2,
      address3,
      address4,
      setErrors,
    })
  }

  return (
    <>
      {errors &&
        Object.entries(errors).map(data => {
          let returnData = data[1].map(data2 => {
            return (
              <>
                {data2}
                <br />
              </>
            )
          })
          return (
            <>
              <StyledAlert severity="error">
                <AlertTitle>{returnData}</AlertTitle>
              </StyledAlert>
            </>
          )
        })}
      <SignUp
        setDentalName={setDentalName}
        setEmail={setEmail}
        setTel={setTel}
        setLastName={setLastName}
        setFirstName={setFirstName}
        setLastNameKana={setLastNameKana}
        setFirstNameKana={setFirstNameKana}
        setPostNumber={setPostNumber}
        setAddress1={setAddress1}
        setAddress2={setAddress2}
        setAddress3={setAddress3}
        setAddress4={setAddress4}
        setPassword={setPassword}
        setPasswordConfirmation={setPasswordConfirmation}
        submitForm={submitForm}
      />
    </>
  )
}

export default AdminRegister
