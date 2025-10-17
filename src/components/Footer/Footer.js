import React from 'react'
import './Footer.scss'
import messages from './Footer.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from '../Markdown'
import LanguageSelector from '../../ui/LanguageSelector'

const Footer = () => {
  const message = setMessages(messages, 'app.footer.')

  return (
    <div className={'footer'}>
      <div className={'footer__content'}>
        <div className={'footer__block footer_about-us'}>
          <h4 className={'footer__block-header'}>
            {message('about-us.title')}
          </h4>
          <p>{message('about-us.text')}</p>
        </div>
        <div className={'footer__block footer_contacts'}>
          <h4 className={'footer__block-header'}>
            {message('contacts.title')}
          </h4>
          <Markdown text={message('contacts.text')} />
        </div>
        <div className={'footer__block footer_address'}>
          <h4 className={'footer__block-header'}>
            {message('address.title')}
          </h4>
          <p>{message('address.text')}</p>
        </div>
        <div className={'footer__block footer_navigation'}>
          <h4 className={'footer__block-header'}>
            {message('navigation.title')}
          </h4>
          <Markdown
            childrenClassName={{ target: 'link', className: 'grey-link' }}
            text={message('navigation.text')}
          />
        </div>
      </div>
      <LanguageSelector />
    </div>
  )
}

export default Footer