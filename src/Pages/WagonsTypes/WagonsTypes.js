import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './WagonsTypes.messages'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const WagonsTypes = () => {
  const classNamePrefix = 'wagons-types'
  const message = setMessages(messages, 'app.page.wagonsTypes.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <PageTitle name={'wagonsTypes'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <p className={'text-color-gray'}>{message('paragraph3')}</p>
      <p className={'text-color-gray'}>{message('paragraph4')}</p>
      <p className={'text-color-gray'}>{message('paragraph5')}</p>
      <p className={'text-color-gray'}>{message('paragraph6')}</p>
      <p className={'text-color-gray'}>{message('paragraph7')}</p>
      <p className={'text-color-gray'}>{message('paragraph8')}</p>
      <p className={'text-color-gray'}>{message('paragraph9')}</p>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default WagonsTypes