import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import withRoute from '../../helpers/withRoute'

const StaticContent = React.memo(
  ({ name, navigate }) => {
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
        ? (
          <div
            className={`${classNamePrefix}__content`}
            onClick={(e) => {
              const targetLink = e.target.closest('a')

              if (!targetLink) return

              const href = targetLink.getAttribute('href') || ''
              const target = targetLink.getAttribute('target')

              if ((target && target !== '_self') || href.startsWith('mailto')) return

              e.preventDefault()

              if (href.startsWith('http') && !href.startsWith(this.props.location.origin)) {
                window.location.href = href

                return
              }

              navigate(href)
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )
        : <Loading />
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name
)

StaticContent.propTypes = {
  name: PropTypes.string,
  navigate: PropTypes.object
}

export default withRoute(StaticContent)