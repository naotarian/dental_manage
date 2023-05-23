import { useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { useRouter } from 'next/router'

import { config } from '@/config/app'
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
      className="pc-only"
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        height: '100vh',
        position: 'fixed',
      }}>
      <List style={{ padding: 0 }}>
        {config.sidebarMenu.map((text, index) => {
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
                      <ListItemIcon>{text?.icon ? text.icon : ''}</ListItemIcon>
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
                              {text?.icon ? text.icon : ''}
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
                    <ListItemIcon>{text?.icon ? text.icon : ''}</ListItemIcon>
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
