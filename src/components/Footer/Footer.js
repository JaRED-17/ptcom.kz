import React from 'react'
import './Footer.scss'
import messages from './Footer.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from '../Markdown'

const Footer = () => {
  const message = setMessages(messages, 'app.footer.')

  return (
    <div className='footer'>
      <div className='footer__block footer_about-us'>
        <h3>{message('about-us.title')}</h3>
        <p>{message('about-us.text')}</p>
      </div>
      <div className='footer__block footer_contacts'>
        <h3>{message('contacts.title')}</h3>
        <Markdown text={message('contacts.text')} />
      </div>
      <div className='footer__block footer_address'>
        <h3>{message('address.title')}</h3>
        <p>{message('address.text')}</p>
      </div>
      <div className='footer__block footer_navigation'>
        <h3>{message('navigation.title')}</h3>
        <Markdown
          childrenClassName={{target: 'link', className: 'white-link'}}
          text={message('navigation.text')}
        />
      </div>
    </div>
  )
}

export default Footer