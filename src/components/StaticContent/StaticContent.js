import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import withRoute from '../../helpers/withRoute'
import language from '../../helpers/language'

const StaticContent = React.memo(
  ({ name, navigate }) => {
    const classNamePrefix = 'static-content'
    const [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch('/cms/static/' + name + '/' + language.getCurrentLanguage() + '.html')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }

          return response.text()
        })
        .then(html => setContent(html))
        .catch(err => setError(err.message))
    }, [name])

    const addMetaTag = (name, content) => {
      const description = document.querySelector('meta[name="' + name + '"]')

      if (description) {
        description.setAttribute('content', content)
      } else {
        const newMetaTag = document.createElement('meta')

        newMetaTag.setAttribute('name', name)
        newMetaTag.setAttribute('content', content)
        document.head.appendChild(newMetaTag)
      }
    }

    const updateMetaTags = (ref) => {
      if (!ref) return null
      const meta = ref.querySelectorAll('meta')

      meta.forEach((meta) => {
        if (meta.name === 'fp:title') {
          document.title = meta.content
        } else if (meta.name === 'fp:description') {
          addMetaTag('description', meta.content)
        } else if (meta.name === 'fp:keywords') {
          addMetaTag('keywords', meta.content)
        }
      })
    }

    return error
      ? <p>Ошибка: {error}</p>
      : content
        ? (
          <div
            ref={(ref) => {
              updateMetaTags(ref)
            }}
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

StaticContent.displayName = 'StaticContent'

StaticContent.propTypes = {
  name: PropTypes.string,
  navigate: PropTypes.object
}

export default withRoute(StaticContent)