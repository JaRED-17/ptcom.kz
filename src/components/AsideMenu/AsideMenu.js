import React from 'react'
import './AsideMenu.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import setMessages from '../../helpers/setMessages'
import messages from '../PageTitle/PageTitle.messages'

const AsideMenu = ({ list }) => {
  const classNamePrefix = 'aside-menu'
  const message = setMessages(messages, 'app.page.')

  return (
    <div className={classNamePrefix}>
      {(() => {
        return list.map((menuItem, index) => {
          return <Link key={index} to={menuItem.url} className={`white-link${window.location.pathname === menuItem.url ? ' active' : ''}`}>
            {message(menuItem.name + '.title')}
          </Link>
        })
      })()}
    </div>
  )
}

AsideMenu.propTypes = {
  list: PropTypes.array.isRequired
}

export default AsideMenu
