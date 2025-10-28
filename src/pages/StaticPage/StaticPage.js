import React from 'react'
import ConsultationsWidget from '../../components/ConsultationsWidget'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import StaticContent from '../../components/StaticContent'
import PropTypes from 'prop-types'
import CustomHelmet from '../../components/CustomHelmet'
import Page from '../../components/Page'

const StaticPage = ({ name }) => {
  const classNamePrefix = 'static-page'
  const content = (
    <>
      <CustomHelmet page={name} />
      <PageTitle name={name} />
      <StaticContent name={name} />
    </>
  )

  return name === 'policy' ? (
    <Page classNamePrefix={classNamePrefix}>
      {content}
    </Page>
  ) : (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0} entries={name === 'news' ? null : 1}>
      {content}
      <ConsultationsWidget />
    </PageWithAsideMenu>
  )
}

StaticPage.propTypes = {
  name: PropTypes.string
}

export default StaticPage