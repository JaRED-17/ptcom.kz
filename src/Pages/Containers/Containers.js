import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const Containers = () => {
  const classNamePrefix = 'containers'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'containers'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Containers