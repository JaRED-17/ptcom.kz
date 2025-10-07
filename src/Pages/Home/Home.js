import React from 'react'
import './Home.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Home.messages'
import Button from '../../components/Button'
import withRoute from '../../helpers/withRoute'
import PropTypes from 'prop-types'
import Page from '../../components/Page'

const Home = ({ navigate }) => {
  const classNamePrefix = 'home'
  const message = setMessages(messages, 'app.page.home.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <div className={'home__content--text'}>
        <h1>{message('title')}</h1>
        <p>{message('text')}</p>
      </div>
      <div className={'home__content--buttons'}>
        <Button
          className={'button-secondary button-services'}
          onClick={() => {
            navigate('/services')
          }}
        >
          {message('button.services')}
        </Button>
        <Button
          className={'button-secondary button-consultation'}
          onClick={() => {
            navigate('/consultation')
          }}
        >
          {message('button.consultation')}
        </Button>
      </div>
      <div className={'backgrounds curve-orange-1'} />
      <div className={'backgrounds curve-orange-2'} />
      <div className={'backgrounds curve-turquoise'} />
      <div className={'backgrounds curve-orange-bottom-1'} />
      <div className={'backgrounds curve-orange-bottom-2'} />
      <div className={'backgrounds trains trains-home'} />
    </Page>
  )
}

Home.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Home)