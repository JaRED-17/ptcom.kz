import React from 'react'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const DangerousGoods = () => {
  const classNamePrefix = 'dangerous-goods'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'dangerousGoods'} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default DangerousGoods