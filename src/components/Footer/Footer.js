import React from 'react'
import './Footer.scss'
import messages from './Footer.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from '../Markdown'
import LanguageSelector from '../../ui/LanguageSelector'

const Footer = () => {
  const classNamePrefix = 'footer'
  const message = setMessages(messages, 'app.footer.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__block footer_about-us`}>
          <h4 className={`${classNamePrefix}__block-header`}>
            {message('about-us.title')}
          </h4>
          <p>{message('about-us.text')}</p>
        </div>
        <div className={`${classNamePrefix}__block footer_contacts`}>
          <h4 className={`${classNamePrefix}__block-header`}>
            {message('contacts.title')}
          </h4>
          <Markdown text={message('contacts.text')} />
        </div>
        <div className={`${classNamePrefix}__block footer_address`}>
          <h4 className={`${classNamePrefix}__block-header`}>
            {message('address.title')}
          </h4>
          <p>{message('address.text')}</p>
        </div>
        <div className={`${classNamePrefix}__block footer_navigation`}>
          <h4 className={`${classNamePrefix}__block-header`}>
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