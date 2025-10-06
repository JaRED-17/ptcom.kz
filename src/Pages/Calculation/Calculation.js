import React from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')

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

export default Calculation