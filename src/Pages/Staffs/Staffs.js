import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Staffs = () => {
  const classNamePrefix = 'staffs'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'staffs'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Staffs