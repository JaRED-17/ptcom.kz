import React from 'react'
import './HandlingDostyk.scss'
import setMessages from '../../helpers/setMessages'
import messages from './HandlingDostyk.messages'
import Markdown from '../../components/Markdown'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import CustomHelmet from '../../components/CustomHelmet'

const HandlingDostyk = () => {
  const classNamePrefix = 'handling-dostyk'
  const message = setMessages(messages, 'app.page.handlingDostyk.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={1}>
      <CustomHelmet page={'handlingDostyk'} />
      <PageTitle name={'handlingDostyk'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>

      <p className={'text-color-orange text-bolt text-header'}>{message('header')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list')} />

      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default HandlingDostyk