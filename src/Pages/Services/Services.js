import React from 'react'
import './Services.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Services.messages'
import PropTypes from 'prop-types'
import withRoute from '../../helpers/withRoute'

const Services = ({ navigate }) => {
  const message = setMessages(messages, 'app.page.services.')

  return (
    <div className={'services'}>
      <div className={'services__content'}>
        <div className={'services__content--block'}>
          <h1>{message('title')}</h1>
        </div>
      </div>
      <div className='backgrounds curve-orange-1' />
      <div className='backgrounds curve-orange-2' />
      <div className='backgrounds curve-turquoise' />
      <div className='backgrounds curve-orange-bottom-1' />
      <div className='backgrounds curve-orange-bottom-2' />
    </div>
  )
}

Services.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Services)