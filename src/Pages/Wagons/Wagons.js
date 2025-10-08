import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Wagons = () => {
  const classNamePrefix = 'wagons'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'wagons'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Wagons