import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import StaffList from '../../components/StaffList'
import CustomHelmet from '../../components/CustomHelmet'

const Staffs = () => {
  const classNamePrefix = 'staffs'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <CustomHelmet page={'staffs'} />
      <PageTitle name={'staffs'} />
      <StaffList />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Staffs