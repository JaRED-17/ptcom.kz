import React from 'react'
import './Licenses.scss'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import CustomHelmet from '../../components/CustomHelmet'

const Licenses = () => {
  const classNamePrefix = 'licenses'

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <CustomHelmet page={'licenses'} />
      <PageTitle name={'licenses'} />
      <div className={`${classNamePrefix}__list`}>
        <img src={'/cms/images/licenses/sert1.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-doc-2018-01.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-doc-2018-02.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-doc-2018-03.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-doc-2018-05.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-sert-eaa-1.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-sert-eaa-2.41f.jpg'} alt={''} />
        <img src={'/cms/images/licenses/200x200-sert-mnn-1.41f.jpg'} alt={''} />
      </div>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Licenses