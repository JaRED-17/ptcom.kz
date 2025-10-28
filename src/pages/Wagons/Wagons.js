import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './Wagons.messages'
import NewsWidget from '../../components/NewsWidget'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Markdown from '../../components/Markdown'
import CustomHelmet from '../../components/CustomHelmet'

const Wagons = () => {
  const classNamePrefix = 'wagons'
  const message = setMessages(messages, 'app.page.wagons.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <CustomHelmet page={'wagons'} />
      <PageTitle name={'wagons'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph2')} />
      <p className={'text-color-gray'}>{message('paragraph3')}</p>
      <p className={'text-color-gray'}>{message('paragraph4')}</p>
      <p className={'text-color-gray'}>{message('paragraph5')}</p>
      <p className={'text-color-gray'}>{message('paragraph6')}</p>
      <p className={'text-color-gray'}>{message('paragraph7')}</p>
      <p className={'text-color-gray'}>{message('paragraph8')}</p>
      <p className={'text-color-gray'}>{message('paragraph9')}</p>
      <NewsWidget />
    </PageWithAsideMenu>
  )
}

export default Wagons