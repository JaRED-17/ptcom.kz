import React from 'react'
import './Header.scss'
import logo from '../../media/Logo.png'
import Markdown from '../Markdown'
import messages from './Header.messages'
import setMessages from '../../helpers/setMessages'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'

const Header = () => {
  const message = setMessages(messages, 'app.header.')
  const navigate = useNavigate()

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__logo'>
          <Link to={'/'}>
            <img className='header__logo-img' src={logo} alt={message('logo')} />
          </Link>
        </div>
        <div className='header__navigation'>
          <Markdown
            childrenClassName={{target: 'link', className: 'white-link'}}
            text={message('navigation.links')}
          />
        </div>
        <div className='header__button'>
          <Button
            className='button-primary'
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

export default Header