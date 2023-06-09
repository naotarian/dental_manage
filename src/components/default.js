import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#a5e9d8',
      main: '#027c7e',
      dark: '#009b9e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#27AE60',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '"Yu Gothic"',
      'YuGothic',
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      'Verdana',
      '"メイリオ"',
      'Meiryo',
      'sans-serif',
    ].join(','),
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    body2: {
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.6)',
      // fontSize: '1.5rem'
    },
    bold: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    largeBold: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    item: {
      fontSize: '16px',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    h1: {
      fontSize: 22,
      lineHeight: 2,
      fontWeight: 700,
    },
    h2: {
      fontSize: 18,
      lineHeight: 2,
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
    caption: {
      fontSize: 12,
      fontWeight: 700,
    },
    captionRed: {
      fontSize: 12,
      fontWeight: 700,
      fontColor: 'red',
    },
  },
})

export default theme
