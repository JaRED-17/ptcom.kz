import React from 'react'
import './Footer.scss'
import messages from './Footer.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from 'react-markdown'

const Header = () => {
  const message = setMessages(messages, 'app.footer.')

  return (
    <div className='footer'>
      <div className='footer_1'>
        <h1>{message('about-us.title')}</h1>
        <p>{message('about-us.text')}</p>
      </div>
      <div className='footer_2'>
        <h1>{message('contacts.title')}</h1>
        <Markdown children={message('contacts.text')} />
      </div>
      <div className='footer_3'>
        <h1>{message('address.title')}</h1>
        <p>{message('address.text')}</p>
      </div>
      <div className='footer_4'>
        <h1>{message('navigation.title')}</h1>
        <Markdown children={message('navigation.text')} />
      </div>
    </div>
  )
}

export default Header