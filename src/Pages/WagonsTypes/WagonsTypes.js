import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const WagonsTypes = () => {
  const classNamePrefix = 'wagons-types'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'wagonsTypes'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default WagonsTypes