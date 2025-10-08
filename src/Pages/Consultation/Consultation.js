import React from 'react'
import './Consultation.scss'
// import setMessages from '../../helpers/setMessages'
// import messages from './Consultation.messages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Consultation = () => {
  const classNamePrefix = 'consultation'
  // const message = setMessages(messages, 'app.page.consultation.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'consultation'} />
    </PageWithAsideMenu>
  )
}

export default Consultation