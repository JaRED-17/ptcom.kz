import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const News = () => {
  const classNamePrefix = 'news'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'news'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default News