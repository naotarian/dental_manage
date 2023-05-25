import * as React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { Button } from '@mui/material'
const StaffList = props => {
  const {
    staff,
    setGender,
    setStaffColor,
    setLastName,
    setFirstName,
    setLastNameKana,
    setFirstNameKana,
    setNickName,
    setDisplayOrder,
    setPriority,
    listSelect,
    setListSelect,
    setTreatCheckList,
    staffChecks,
  } = props
  const edit = id => {
    const target = staff.filter(e => e.id === id)
    setGender(target[0].gender)
    setFirstName(target[0].first_name)
    setLastName(target[0].last_name)
    setLastNameKana(target[0].last_name_kana)
    setFirstNameKana(target[0].first_name_kana)
    setNickName(target[0].nick_name)
    setDisplayOrder(target[0].display_order)
    setPriority(target[0].priority)
    setStaffColor(target[0].color_id)
    setTreatCheckList(staffChecks[id])
  }
  const clear = () => {
    setListSelect(0)
    setGender('')
    setFirstName('')
    setLastName('')
    setLastNameKana('')
    setFirstNameKana('')
    setNickName('')
    setDisplayOrder('')
    setPriority('')
    setStaffColor(1)
    setTreatCheckList([])
  }
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {staff?.map((data, index) => (
            <div key={index}>
              <ListItem disablePadding onClick={() => edit(data.id)}>
                <ListItemButton
                  className="focus-green"
                  selected={listSelect === data.id}
                  onClick={() => setListSelect(data.id)}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.nick_name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
          {staff.length > 0 ? (
            <div className="mt1 text-r mr1">
              <Button variant="outlined" disabled={!listSelect} onClick={clear}>
                クリア
              </Button>
            </div>
          ) : (
            <div className="p1">
              <Typography variant="bold">
                スタッフが登録されていません。
              </Typography>
            </div>
          )}
        </List>
      </nav>
      <Divider />
    </Box>
  )
}
export default StaffList
