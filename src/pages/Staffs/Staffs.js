import React from 'react'
import NewsWidget from '../../components/NewsWidget'
import ConsultationsWidget from '../../components/ConsultationsWidget'
import TwoColumnsContent from '../../components/TwoColumnsContent'
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
      <TwoColumnsContent
        column1={<NewsWidget />}
        column2={<ConsultationsWidget />}
      />
    </PageWithAsideMenu>
  )
}

export default Staffs