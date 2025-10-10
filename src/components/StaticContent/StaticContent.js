import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import PropTypes from 'prop-types'

const StaticContent = React.memo(
  ({ name }) => {
    const classNamePrefix = 'static-content'
    const [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch('/cms/static/' + name + '/ru.html')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }

          return response.text()
        })
        .then(html => setContent(html))
        .catch(err => setError(err.message))
    }, [name])

    return error
      ? <p>Ошибка: {error}</p>
      : content
        ? <div className={`${classNamePrefix}__content`} dangerouslySetInnerHTML={{ __html: content }} />
        : <Loading />
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name
)

StaticContent.propTypes = {
  name: PropTypes.string
}

export default StaticContent