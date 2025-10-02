import React from 'react'
import './Header.scss'
import logo from '../../media/Logo.png'
import Markdown from '../Markdown'
import messages from './Header.messages'
import setMessages from '../../helpers/setMessages'
import { Link } from 'react-router-dom'

const Header = () => {
  const message = setMessages(messages, 'app.header.')

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to={'/'}>
          <img className='header__logo-img' src={logo} alt={message('logo')} />
        </Link>
        <h1 className='header__logo-text'>
          {message('logo')}
        </h1>
      </div>
      <div className='header__title'>
        <Markdown text={message('title')} />
      </div>
      <div className='header__contacts'>
        <Markdown
          childrenClassName={{target: 'link', className: 'white-link'}}
          text={message('contact.astana')}
        />
        <Markdown
          childrenClassName={{target: 'link', className: 'white-link'}}
          text={message('contact.almaty')}
        />
        <Markdown
          childrenClassName={{target: 'link', className: 'white-link'}}
          text={message('contact.petropavl')}
        />
        <div className='mailto'>
          <Markdown
            childrenClassName={{target: 'link', className: 'blue-link'}}
            text={message('contact.email')}
          />
        </div>
      </div>
    </header>
  )
}

export default Header