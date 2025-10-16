import React, { useState } from "react"
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import MenuIcon from '@mui/icons-material/Menu'
import withRoute from '../../helpers/withRoute'
import CollapseMenuItem from './CollapseMenuItem'
import PropTypes from 'prop-types'
import messages from './HamburgerMenu.messages'
import PageTitles from '../PageTitle/PageTitle.messages'
import setMessages from '../../helpers/setMessages'
import pages from '../../cms/data/pages.json'

const HamburgerMenu = ({ navigate }) => {
  const classNamePrefix = 'hamburger-menu'
  const message = setMessages(messages, 'app.hamburgerMenu.links.')
  const PageTitle = setMessages(PageTitles, 'app.page.')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  return (
    <div className={classNamePrefix}>
      <IconButton
        color={'inherit'}
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup={'true'}
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id={'menu'}
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
      >
        <MenuList>
          {pages.map((page, index) => {
            if (page.name === 'calculation') return null
            if (page.entries) {
              return (
                <CollapseMenuItem
                  key={index}
                  handleMenuClose={closeMenu}
                  name={message(page.name)}
                  items={[
                    {
                      "name": page.name,
                      "url": page.url
                    },
                    ...page.entries
                  ]}
                />
              )
            }

            return (
              <MenuItem
                key={index}
                onClick={() => {
                  navigate(page.url)
                  closeMenu()
                }}
              >
                {PageTitle(page.name + '.title')}
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
    </div>
  )
}

HamburgerMenu.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(HamburgerMenu)
