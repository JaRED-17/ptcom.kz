import React from 'react'
import './Consultation.scss'
// import setMessages from '../../helpers/setMessages'
// import messages from './Consultation.messages'
import PageTitle from '../../components/PageTitle'

const Consultation = () => {
  const classNamePrefix = 'consultation'
  // const message = setMessages(messages, 'app.page.consultation.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <PageTitle name={'consultation'} />
        </div>
      </div>
    </div>
  )
}

export default Consultation