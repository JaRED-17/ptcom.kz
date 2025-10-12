import React from 'react'
import './Services.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Services.messages'
import ServicesCustomButton from './ServicesCustomButton'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const Services = () => {
  const classNamePrefix = 'services'
  const message = setMessages(messages, 'app.page.services.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'services'} />
      <div className={'services__content--block__buttons'}>
        <ServicesCustomButton
          icon={'wagons'}
          text={message('provideWagons')}
          to={'/services/provision-of-wagons'}
        />
        <ServicesCustomButton
          icon={'shield'}
          text={message('railwaysPays')}
          to={'/services/payment-railway-tariffs'}
        />
        <ServicesCustomButton
          icon={'railways'}
          text={message('ways')}
          to={'/services/drive-ways'}
        />
        <ServicesCustomButton
          icon={'scheme'}
          text={message('developmentSchemes')}
          to={'/services/schema'}
        />
        <ServicesCustomButton
          icon={'cells'}
          text={message('cargoReloading')}
          to={'/services/handling-dostyk'}
        />
        <ServicesCustomButton
          icon={'cargoHandling'}
          text={message('cargoHandling')}
          to={'/services/cargo-processing'}
        />
      </div>
    </Page>
  )
}

export default Services