import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

//components
import SignIn from '@/components/Auth/SignIn'
import Head from '@/components/Common/Head'
import { useAuth } from '@/hooks/auth'

const Login = () => {
  const router = useRouter()

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length == 0) {
      setStatus(atob(router.query.reset))
    } else {
      setStatus(null)
    }
  })

  const submitForm = async event => {
    setLoading(true)
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <>
      <Head title="管理画面ログインページ" />
      <SignIn
        submitForm={submitForm}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </>
  )
}

export default Login
