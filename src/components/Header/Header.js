import React from 'react'
import './Header.scss'
import logo from '../../media/Logo.png'
import { FormattedMessage } from 'react-intl'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo-img' src={logo} alt={'Транспортно–экспедиторские услуги'} />
        <h1 className='header__logo-text'>
          <FormattedMessage id='app.header.logo' />
        </h1>
      </div>
      <div className='header__title'>
        <FormattedMessage id='app.header.title' />
      </div>
      <div className='header__contacts'>
        <a href='tel:87172978468'>
          <FormattedMessage id='app.header.contact.astana' />
        </a>
        <a href='tel:87273122115'>
          <FormattedMessage id='app.header.contact.almaty' />
        </a>
        <a href='tel:87152630047'>
          <FormattedMessage id='app.header.contact.petropavl' />
        </a>
        <div className='mailto'>
          <a href='mailto:info@ptcom.kz'>
            <FormattedMessage id='app.header.contact.email' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header