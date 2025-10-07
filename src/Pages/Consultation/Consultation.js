import React from 'react'
import './Consultation.scss'
// import setMessages from '../../helpers/setMessages'
// import messages from './Consultation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const Consultation = () => {
  const classNamePrefix = 'consultation'
  // const message = setMessages(messages, 'app.page.consultation.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'consultation'} />
    </Page>
  )
}

export default Consultation