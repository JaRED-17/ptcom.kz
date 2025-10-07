import React from 'react'
import './PaymentRailwayTariffs.scss'
import setMessages from '../../helpers/setMessages'
import messages from './PaymentRailwayTariffs.messages'
import Markdown from '../../components/Markdown'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const PaymentRailwayTariffs = () => {
  const classNamePrefix = 'payment-railway-tariffs'
  const message = setMessages(messages, 'app.page.paymentRailwayTariffs.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'paymentRailwayTariffs'} />
      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list1')} />

      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list2')} />

      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <p className={'text-color-gray'}>{message('paragraph3')}</p>

      <OurAdvantages />
      <div className={'backgrounds payment-railway-tariffs-background'} />
    </Page>
  )
}

export default PaymentRailwayTariffs