import React from 'react'
import './Services.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Services.messages'
import ServicesCustomButton from './ServicesCustomButton'

const Services = () => {
  const message = setMessages(messages, 'app.page.services.')

  return (
    <div className={'services'}>
      <div className={'services__content'}>
        <div className={'services__content--block'}>
          <div className={'services__content--block__title'}>
            <h1>{message('title')}</h1>
          </div>
          <div className={'services__content--block__buttons'}>
            <ServicesCustomButton icon={'wagons'} text={message('provideWagons')} to={'/'} />
            <ServicesCustomButton icon={'wagons'} text={message('railwaysPays')} to={'/'} />
            <ServicesCustomButton icon={'wagons'} text={message('ways')} to={'/'} />
            <ServicesCustomButton icon={'wagons'} text={message('developmentSchemes')} to={'/'} />
            <ServicesCustomButton icon={'wagons'} text={message('cargoReloading')} to={'/'} />
            <ServicesCustomButton icon={'wagons'} text={message('cargoHandling')} to={'/'} />
          </div>
        </div>
      </div>
      <div className='backgrounds curve-orange-1' />
      <div className='backgrounds curve-orange-2' />
      <div className='backgrounds curve-turquoise' />
      <div className='backgrounds curve-orange-bottom-1' />
      <div className='backgrounds curve-orange-bottom-2' />
      <div className='backgrounds trains trains-services' />
    </div>
  )
}

export default Services