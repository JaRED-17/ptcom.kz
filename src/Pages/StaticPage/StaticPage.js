import React, { useEffect, useState } from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Loading from '../../components/Loading'
import PropTypes from 'prop-types'

const StaticPage = ({ name }) => {
  const classNamePrefix = 'static-page'
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
  })

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={name} />
      {error
        ? <p>Ошибка: {error}</p>
        : content
          ? <div className={`${classNamePrefix}__content`} dangerouslySetInnerHTML={{ __html: content }} />
          : <Loading />
      }
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

StaticPage.propTypes = {
  name: PropTypes.string
}

export default StaticPage