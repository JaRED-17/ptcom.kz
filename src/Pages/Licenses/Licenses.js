import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Licenses = () => {
  const classNamePrefix = 'licenses'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'licenses'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Licenses