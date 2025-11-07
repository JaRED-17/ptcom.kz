import React from 'react'
import './Header.scss'
import logo from '../../cms/images/Logo.png'
import messages from './Header.messages'
import setMessages from '../../helpers/setMessages'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import withRoute from '../../helpers/withRoute'
import PropTypes from 'prop-types'
import SiteMenu from '../SiteMenu'
import LanguageSelector from '../../ui/LanguageSelector'

const Header = ({ navigate }) => {
  const classNamePrefix = 'header'
  const message = setMessages(messages, 'app.header.')

  return (
    <header className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__logo`}>
          <Link to={'/'}>
            <img className={`${classNamePrefix}__logo-img`} src={logo} alt={message('logo')} />
          </Link>
        </div>
        <div className={`${classNamePrefix}__navigation`}>
          <SiteMenu />
        </div>
        <div className={`${classNamePrefix}__button`}>
          <Button
            className={'button-primary'}
            onClick={() => {
              navigate('/calculation')
            }}
          >
            {message('button')}
          </Button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Header)