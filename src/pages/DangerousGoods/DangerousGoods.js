import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './DangerousGoods.messages'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Markdown from '../../components/Markdown'
import CustomHelmet from '../../components/CustomHelmet'

const DangerousGoods = () => {
  const classNamePrefix = 'dangerous-goods'
  const message = setMessages(messages, 'app.page.dangerousGoods.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={2}>
      <CustomHelmet page={'dangerousGoods'} />
      <PageTitle name={'dangerousGoods'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list1')} />
      <p className={'text-color-gray'}>{message('paragraph3')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph4')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph5')} />
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list2')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph6')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph7')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph8')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph9')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph10')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph11')} />
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph12')} />
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default DangerousGoods