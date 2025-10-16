import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import withRoute from '../../helpers/withRoute'
import messages from '../PageTitle/PageTitle.messages'
import setMessages from '../../helpers/setMessages'

const CollapseMenuItem = ({ navigate, handleMenuClose, name, items }) => {
  const message = setMessages(messages, 'app.page.')
  const [openMenu, setOpenMenu] = React.useState(false)
  const closeMainMenu = () => {
    setOpenMenu(false)
    handleMenuClose()
  }
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  return (
    <>
      <MenuItem onClick={toggleMenu}>
        {name}
        {openMenu ? <ExpandLess sx={{ ml: 'auto' }} /> : <ExpandMore sx={{ ml: 'auto' }} />}
      </MenuItem>
      <Collapse in={openMenu} timeout={'auto'} unmountOnExit>
        <Box sx={{ pl: 3 }}>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                navigate(item.url)
                closeMainMenu()
              }}
            >
              {message(item.name + '.title')}
            </MenuItem>
          ))}
        </Box>
      </Collapse>
    </>
  )
}

CollapseMenuItem.propTypes = {
  navigate: PropTypes.func,
  handleMenuClose: PropTypes.func,
  name: PropTypes.string,
  items: PropTypes.array
}

export default withRoute(CollapseMenuItem)