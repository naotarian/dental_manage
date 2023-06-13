import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
const UnitList = props => {
  const {
    units,
    listSelect,
    setListSelect,
    setSelectUnit,
    setTreatCheckList,
    unitTreat,
  } = props
  const edit = id => {
    const target = units.filter(e => e.id === id)
    setSelectUnit(prevState => ({
      ...prevState,
      name: target[0].name,
      display_name: target[0].display_name,
      display_order: target[0].display_order,
      priority: target[0].priority,
      status: target[0].status,
    }))
    setTreatCheckList(unitTreat[id])
    setListSelect(id)
  }
  const clear = () => {
    setSelectUnit({
      name: '',
      display_name: '',
      display_order: units.length + 1,
      priority: units.length + 1,
      status: 'S',
    })
    setListSelect('')
    setTreatCheckList([])
  }
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {units.map((data, index) => (
            <div key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  className="focus-green"
                  selected={listSelect === data.id}
                  onClick={() => edit(data.id)}>
                  <ListItemIcon />
                  <ListItemText primary={data.display_name} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          ))}
          {units.length > 0 ? (
            <div className="mt1 text-r mr1">
              <Button variant="outlined" disabled={!listSelect} onClick={clear}>
                クリア
              </Button>
            </div>
          ) : (
            <div className="p1">
              <Typography variant="bold">
                ユニット情報が登録されていません。
              </Typography>
            </div>
          )}
        </List>
      </nav>
      <Divider />
    </Box>
  )
}
export default UnitList
