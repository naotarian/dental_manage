import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter()

  const { data: user, error, revalidate } = useSWR('/api/manages/user', () =>
    axios
      .get('/api/manages/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status != 409) return false
        router.push('/verify-email')
      }),
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }) => {
    await csrf()

    setErrors([])
    axios
      .post('/manages/register', props)
      .then(res => {
        revalidate()
        if (res.data) setErrors(res.data)
      })
      .catch(error => {
        if (error.response.status != 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setStatus(null)
    setErrors([])

    axios
      .post('/manages/login', props)
      .then(() => revalidate())
      .catch(error => {
        if (error.response.status != 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf()

    setStatus(null)
    setErrors([])

    axios
      .post('/manages/forgot-password', { email })
      .then(response => setStatus(response.data.status))
      .catch(error => {
        if (error.response.status != 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setStatus(null)
    setErrors([])

    axios
      .post('/manages/reset-password', { token: router.query.token, ...props })
      .then(response =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch(error => {
        if (error.response.status != 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post('/manage/email/verification-notification')
      .then(response => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/manages/logout')

      revalidate()
    }

    window.location.pathname = '/login'
  }

  useEffect(() => {
    if (middleware == 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (middleware == 'auth' && error) logout()
    if (middleware == 'auth' && !user && user != undefined)
      router.push('/login')
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
