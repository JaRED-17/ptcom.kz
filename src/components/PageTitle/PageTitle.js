import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './PageTitle.messages'
import PropTypes from 'prop-types'

const PageTitle = ({ name }) => {
  const classNamePrefix = 'page-title'
  const message = setMessages(messages, 'app.page.')

  return (
    <div className={classNamePrefix}>
      <h1 className={`${classNamePrefix}__title`}>{message(name + '.title')}</h1>
    </div>
  )
}

PageTitle.propTypes = {
  name: PropTypes.string
}

export default PageTitle
