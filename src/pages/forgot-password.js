import { useState } from 'react'

//components
import ForgetPassword from '../components/Auth/ForgetPassword'

import { useAuth } from '@/hooks/auth'

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    forgotPassword({ email, setErrors, setStatus })
  }

  return (
    <>
      <ForgetPassword
        email={email}
        setEmail={setEmail}
        errors={errors}
        setErrors={setErrors}
        status={status}
        setStatus={setStatus}
        submitForm={submitForm}
      />
    </>
  )
}

export default ForgotPassword
