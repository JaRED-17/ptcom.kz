import React from 'react'
import './Calculation.scss'
// import setMessages from '../../helpers/setMessages'
// import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  // const message = setMessages(messages, 'app.page.calculation.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'calculation'} />
    </Page>
  )
}

export default Calculation