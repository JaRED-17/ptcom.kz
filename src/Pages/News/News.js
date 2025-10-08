import React from 'react'
import './News.scss'
import setMessages from '../../helpers/setMessages'
import messages from './News.messages.js'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Markdown from '../../components/Markdown'

const News = () => {
  const classNamePrefix = 'news'
  const message = setMessages(messages, 'app.page.news.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'news'} />
      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header1')} />
      <p className={'text-color-gray'}>{message('description1')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header2')} />
      <p className={'text-color-gray'}>{message('description2')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header3')} />
      <p className={'text-color-gray'}>{message('description3')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header4')} />
      <p className={'text-color-gray'}>{message('description4')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header5')} />
      <p className={'text-color-gray'}>{message('description5')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header6')} />
      <p className={'text-color-gray'}>{message('description6')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header7')} />
      <p className={'text-color-gray'}>{message('description7')}</p>

      <Markdown childrenClassName={{target: 'link', className: 'orange-link'}} text={message('header8')} />
      <p className={'text-color-gray'}>{message('description8')}</p>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default News