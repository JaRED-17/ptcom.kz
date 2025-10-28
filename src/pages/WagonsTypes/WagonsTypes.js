import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './WagonsTypes.messages'
import NewsWidget from '../../components/NewsWidget'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Markdown from '../../components/Markdown'
import CustomHelmet from '../../components/CustomHelmet'

const WagonsTypes = () => {
  const classNamePrefix = 'wagons-types'
  const message = setMessages(messages, 'app.page.wagonsTypes.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <CustomHelmet page={'wagonsTypes'} />
      <PageTitle name={'wagonsTypes'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph3')} />
      <p className={'text-color-gray'}>{message('paragraph4')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph5')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph6')} />
      <p className={'text-color-gray'}>{message('paragraph7')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph8')} />
      <p className={'text-color-gray'}>{message('paragraph9')}</p>
      <p className={'text-color-gray'}>{message('paragraph10')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <p className={'text-color-gray'}>{message('paragraph11')}</p>
      <NewsWidget />
    </PageWithAsideMenu>
  )
}

export default WagonsTypes