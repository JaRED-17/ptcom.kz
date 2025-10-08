import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Vacancies = () => {
  const classNamePrefix = 'vacancies'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'vacancies'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Vacancies