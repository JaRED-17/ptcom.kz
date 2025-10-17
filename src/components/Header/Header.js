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

const Header = ({ navigate }) => {
  const message = setMessages(messages, 'app.header.')

  return (
    <header className={'header'}>
      <div className={'header__content'}>
        <div className={'header__logo'}>
          <Link to={'/'}>
            <img className={'header__logo-img'} src={logo} alt={message('logo')} />
          </Link>
        </div>
        <div className={'header__navigation'}>
          <SiteMenu />
        </div>
        <div className={'header__button'}>
          <Button
            className={'button-primary'}
            onClick={() => {
              navigate('/calculation')
            }}
          >
            {message('button')}
          </Button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Header)