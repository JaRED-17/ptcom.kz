import React from 'react'
import './Schema.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Schema.messages'
import Markdown from '../../components/Markdown'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const Schema = () => {
  const classNamePrefix = 'schema'
  const message = setMessages(messages, 'app.page.schema.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'schema'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <p className={'text-color-gray'}>{message('paragraph3')}</p>
      <p className={'text-color-gray'}>{message('paragraph4')}</p>

      <p className={'text-color-orange text-bolt text-header'}>{message('header')}</p>
      <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list')} />

      <p className={'text-color-gray'}>{message('paragraph5')}</p>

      <OurAdvantages />
      <div className={'backgrounds schema-background'} />
    </Page>
  )
}

export default Schema