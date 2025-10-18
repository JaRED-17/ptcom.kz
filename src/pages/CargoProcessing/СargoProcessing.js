import React from 'react'
import './СargoProcessing.scss'
import setMessages from '../../helpers/setMessages'
import messages from './СargoProcessing.messages'
import Markdown from '../../components/Markdown'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import CustomHelmet from '../../components/CustomHelmet'

const CargoProcessing = () => {
  const classNamePrefix = 'cargo-processing'
  const message = setMessages(messages, 'app.page.cargoProcessing.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={1}>
      <CustomHelmet page={'cargoProcessing'} />
      <PageTitle name={'cargoProcessing'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>

      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list1')} />

      <p className={'text-color-gray'}>{message('paragraph2')}</p>

      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list2')} />

      <p className={'text-color-gray'}>{message('paragraph3')}</p>

      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default CargoProcessing