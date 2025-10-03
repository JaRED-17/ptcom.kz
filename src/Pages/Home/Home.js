import React from 'react'
import './Home.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Home.messages'
import Button from '../../components/Button'
import withRoute from '../../helpers/withRoute'
import PropTypes from 'prop-types'

const Home = ({ navigate }) => {
  const message = setMessages(messages, 'app.page.home.')

  return (
    <div className={'home'}>
      <div className={'home__content'}>
        <div className={'home__content--block'}>
          <div className={'home__content--text'}>
            <h1>{message('title')}</h1>
            <p>{message('text')}</p>
          </div>
          <div className={'home__content--buttons'}>
            <Button
              className='button-secondary button-services'
              onClick={() => {
                navigate('/services')
              }}
            >
              {message('button.services')}
            </Button>
            <Button
              className='button-secondary button-consultation'
              onClick={() => {
                navigate('/consultation')
              }}
            >
              {message('button.consultation')}
            </Button>
          </div>
        </div>
      </div>
      <div className='backgrounds curve-orange-1' />
      <div className='backgrounds curve-orange-2' />
      <div className='backgrounds curve-turquoise' />
      <div className='backgrounds curve-orange-bottom-1' />
      <div className='backgrounds curve-orange-bottom-2' />
      <div className='backgrounds trains trains-home' />
    </div>
  )
}

Home.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Home)