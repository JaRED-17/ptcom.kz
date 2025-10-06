import React from 'react'
import './OurAdvantages.scss'
import messages from './OurAdvantages.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from '../Markdown'

const OurAdvantages = () => {
  const classNamePrefix = 'our-advantages'
  const message = setMessages(messages, 'app.ourAdvantages.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <p className={'text-color-orange text-bolt text-header'}>{message('title')}</p>
        <div className={`${classNamePrefix}__content--list`}>
          <div className={`${classNamePrefix}__list1`}>
            <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list1')} />
          </div>
          <div className={`${classNamePrefix}__list2`}>
            <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list2')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurAdvantages