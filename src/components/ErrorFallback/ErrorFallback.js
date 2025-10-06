import React from 'react'
import './ErrorFallback.scss'
import PropTypes from 'prop-types'

const ErrorFallback = ({ error }) => {
  const classNamePrefix = 'oops'

  return (
    <div className={classNamePrefix} role={'alert'}>
      <p>Oops! Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.object
}

export default ErrorFallback