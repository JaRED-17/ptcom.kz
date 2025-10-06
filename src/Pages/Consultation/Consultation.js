import React from 'react'
import './Consultation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Consultation.messages'

const Consultation = () => {
  const classNamePrefix = 'consultation'
  const message = setMessages(messages, 'app.page.consultation.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation