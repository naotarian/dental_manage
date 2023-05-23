//style
//next
//hooks
//mui
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useAuth } from '@/hooks/auth'

const StyledAppBar = styled(AppBar)`
  padding: 1rem;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #fff;
`
const Header = props => {
  const { user } = props
  const router = useRouter()
  const { logout } = useAuth()
  const login = () => {
    router.push('/login')
  }
  const register = () => {
    router.push('/register')
  }
  return (
    <StyledAppBar>
      {user && (
        <div className={`fixed top-0 right-0 px-6 py-4 sm:block`}>
          {user ? (
            <div className="flex justify-space">
              <Typography
                variant="body1"
                style={{ fontSize: '1.4rem' }}
                className="bold">
                {user.dental_name}様
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={logout}
                style={{ float: 'right' }}>
                ログアウト
              </Button>
            </div>
          ) : (
            <>
              <Button variant="contained" color="info" onClick={login}>
                ログイン
              </Button>
              <Button variant="contained" color="info" onClick={register}>
                会員登録
              </Button>
            </>
          )}
        </div>
      )}
    </StyledAppBar>
  )
}
export default Header
