import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './Containers.messages'
import NewsWidget from '../../components/NewsWidget'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import CustomHelmet from '../../components/CustomHelmet'

const Containers = () => {
  const classNamePrefix = 'containers'
  const message = setMessages(messages, 'app.page.containers.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <CustomHelmet page={'containers'} />
      <PageTitle name={'containers'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
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

export default Containers