import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useRouter } from 'next/router'
const SideBar = () => {
  const [expanded, setExpanded] = useState([])
  const router = useRouter()
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter(fruit => fruit !== panel),
    )
  }
  const menuClick = path => {
    router.push(path)
  }
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        height: '100vh',
        position: 'fixed',
      }}>
      <List style={{ padding: 0 }}>
        {menus.map((text, index) => {
          if (text.sub.length) {
            return (
              <Accordion
                expanded={expanded.includes('panel' + index)}
                onChange={handleChange('panel' + index)}
                style={{ margin: 0, padding: 0, boxShadow: 'none' }}
                key={index + 100}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1bh-header"
                  style={{
                    paddingRight: '1rem',
                    paddingLeft: 0,
                    maxHeight: '40px',
                  }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails style={{ padding: 0 }}>
                  <List>
                    {text.sub.map((text, index) => (
                      <Grid key={index}>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => menuClick(text.path)}>
                            <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                          </ListItemButton>
                        </ListItem>
                      </Grid>
                    ))}
                  </List>
                  <Divider />
                </AccordionDetails>
              </Accordion>
            )
          } else {
            return (
              <Grid key={index}>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton onClick={() => menuClick(text.path)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Grid>
            )
          }
        })}
      </List>
      <Divider />
    </Box>
  )
}
export default SideBar

const menus = [
  {
    name: '管理画面TOP',
    sub: [],
    path: '/',
  },
  {
    name: '基本設定',
    sub: [{ name: '基本情報', path: '/basic_information' }],
  },
  {
    name: 'ポータルサイト',
    sub: [],
    path: '/portal',
  },
  {
    name: 'スタッフ管理',
    sub: [
      { name: 'スタッフ登録', path: '/staffs' },
      { name: 'シフト登録', path: '/shifts' },
    ],
  },
  {
    name: '予約管理',
    sub: [
      { name: '予約一覧', path: '/reserves' },
      { name: '予約状況', path: '/reserve_state' },
    ],
  },
  {
    name: '施設管理',
    sub: [{ name: 'ユニット管理', path: '/units' }],
  },
]
