import React from 'react'
import './DriveWays.scss'
import setMessages from '../../helpers/setMessages'
import messages from './DriveWays.messages'
import YandexMap from '../../components/YandexMap'
import Markdown from '../../components/Markdown'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'

const DriveWays = () => {
  const classNamePrefix = 'drive-ways'
  const message = setMessages(messages, 'app.page.driveWays.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={1}>
      <PageTitle name={'driveWays'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>

      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('services.list1')} />
      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('services.list2')} />

      <p className={'text-color-orange text-bolt text-header'}>{message('header3')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('services.list3')} />

      <p className={'text-color-orange text-bolt text-header'}>{message('header4')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('services.list4')} />

      <p className={'text-color-orange text-bolt text-header'}>{message('header5')}</p>
      <YandexMap />

      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default DriveWays
