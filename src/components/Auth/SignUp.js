import * as React from 'react'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function SignUp(props) {
  const {
    setDentalName,
    setEmail,
    setTel,
    setLastName,
    setFirstName,
    setLastNameKana,
    setFirstNameKana,
    setPostNumber,
    setAddress1,
    setAddress2,
    setAddress3,
    setAddress4,
    setPassword,
    setPasswordConfirmation,
    submitForm,
  } = props

  return (
    <Paper style={{ width: '600px', margin: '0 auto', padding: '2rem 0' }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            管理新規アカウント作成
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="歯科医院名"
                  autoFocus
                  size="small"
                  onChange={event => setDentalName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                  size="small"
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="電話番号"
                  name="tel"
                  autoComplete="tel"
                  size="small"
                  onChange={event => setTel(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="代表者姓"
                  autoComplete="tel"
                  size="small"
                  onChange={event => setLastName(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="代表者名"
                  autoComplete="tel"
                  size="small"
                  onChange={event => setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="代表者姓(フリガナ)"
                  autoComplete="tel"
                  size="small"
                  onChange={event => setLastNameKana(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="代表者名(フリガナ)"
                  autoComplete="tel"
                  size="small"
                  onChange={event => setFirstNameKana(event.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="郵便番号"
                  size="small"
                  inputProps={{ maxLength: 7 }}
                  onChange={event => setPostNumber(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained">住所検索</Button>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  label="都道府県名"
                  size="small"
                  onChange={event => setAddress1(event.target.value)}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label="市町村区"
                  size="small"
                  onChange={event => setAddress2(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="町域"
                  size="small"
                  onChange={event => setAddress3(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="以降の住所"
                  size="small"
                  onChange={event => setAddress4(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                  onChange={event => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="パスワード確認"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  size="small"
                  onChange={event =>
                    setPasswordConfirmation(event.target.value)
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitForm}>
              作成する
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ログインはこちら
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Paper>
  )
}
