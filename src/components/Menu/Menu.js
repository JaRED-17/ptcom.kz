import React, { useState } from "react"
import { Toolbar, IconButton, Menu as MenuUI, MenuItem, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div className={'menu'}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <MenuUI anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Главная</MenuItem>
        <MenuItem onClick={handleClose}>Услуги</MenuItem>
        <MenuItem onClick={handleClose}>Контакты</MenuItem>
      </MenuUI>
    </div>
  )
}

export default Menu
