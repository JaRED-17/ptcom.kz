import React from 'react'
import messages from './ErrorMessage.messages'
import setMessages from '../../helpers/setMessages'
import PropTypes from 'prop-types'

const ErrorMessage = ({ code, replacements }) => {
  const message = setMessages(messages, 'app.error.code.')
  return message(code, replacements)
}

ErrorMessage.propTypes = {
  code: PropTypes.string,
  replacements: PropTypes.object
}

export default ErrorMessage