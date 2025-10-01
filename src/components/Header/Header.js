import React from 'react'
import './Header.scss'
import logo from '../../media/Logo.png'
import Markdown from 'react-markdown'
import messages from './Header.messages'
import setMessages from '../../helpers/setMessages'

const Header = () => {
  const message = setMessages(messages, 'app.header.')

  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='/'>
          <img className='header__logo-img' src={logo} alt={message('logo')} />
        </a>
        <h1 className='header__logo-text'>
          {message('logo')}
        </h1>
      </div>
      <div className='header__title'>
        <Markdown children={message('title')} />
      </div>
      <div className='header__contacts'>
        <a href='tel:87172978468'>
          {message('contact.astana')}
        </a>
        <a href='tel:87273122115'>
          {message('contact.almaty')}
        </a>
        <a href='tel:87152630047'>
          {message('contact.petropavl')}
        </a>
        <div className='mailto'>
          <a href='mailto:info@ptcom.kz'>
            {message('contact.email')}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header