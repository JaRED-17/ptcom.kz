import React, { useState } from "react"
import { Toolbar, IconButton, Menu as MenuUI, MenuItem, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import withRoute from '../../helpers/withRoute'
import PropTypes from 'prop-types'
import messages from './Menu.messages'
import setMessages from '../../helpers/setMessages'

const Menu = ({ navigate }) => {
  const message = setMessages(messages, 'app.menu.links.')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div className={'menu'}>
      <Toolbar>
        <IconButton
          edge={'start'}
          color={'inherit'}
          aria-label={'menu'}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <MenuUI anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose()
            navigate('/company/about-us')
          }}
        >
          {message('company')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            navigate('/services')
          }}
        >
          {message('services')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            navigate('/consultation')
          }}
        >
          {message('consultation')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            navigate('/contacts')
          }}
        >
          {message('contacts')}
        </MenuItem>
      </MenuUI>
    </div>
  )
}

Menu.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Menu)
