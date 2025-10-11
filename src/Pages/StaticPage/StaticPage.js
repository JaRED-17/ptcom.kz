import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import StaticContent from '../../components/StaticContent'
import PropTypes from 'prop-types'

const StaticPage = ({ name }) => {
  const classNamePrefix = 'static-page'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0} entries={name === 'news' ? null : 1}>
      <PageTitle name={name} />
      <StaticContent name={name} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

StaticPage.propTypes = {
  name: PropTypes.string
}

export default StaticPage