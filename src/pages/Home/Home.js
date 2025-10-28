import React from 'react'
import './Home.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Home.messages'
import Button from '../../ui/Button'
import withRoute from '../../helpers/withRoute'
import PropTypes from 'prop-types'
import Page from '../../components/Page'
import CustomHelmet from '../../components/CustomHelmet'

const Home = ({ navigate }) => {
  const classNamePrefix = 'home'
  const message = setMessages(messages, 'app.page.home.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <CustomHelmet page={'home'} />
      <div className={`${classNamePrefix}__content--text`}>
        <h1>{message('title')}</h1>
        <p>{message('text')}</p>
      </div>
      <div className={`${classNamePrefix}__content--buttons`}>
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
    </Page>
  )
}

Home.propTypes = {
  navigate: PropTypes.object
}

export default withRoute(Home)