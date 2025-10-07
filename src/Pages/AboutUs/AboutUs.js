import React from 'react'
import './AboutUs.scss'
import setMessages from '../../helpers/setMessages'
import messages from './AboutUs.messages'
import OurAdvantages from '../../components/OurAdvantages'
import Markdown from '../../components/Markdown'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const AboutUs = () => {
  const classNamePrefix = 'about-us'
  const message = setMessages(messages, 'app.page.aboutUs.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'aboutUs'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <p className={'text-color-gray'}>{message('paragraph2')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header')}</p>
      <p className={'text-color-gray'}>{message('paragraph3')}</p>
      <Markdown childrenClassName={{target: 'paragraph', className: 'text-color-gray'}} text={message('paragraph4')} />
      <p className={'text-color-gray'}>{message('paragraph5')}</p>
      <OurAdvantages />
    </Page>
  )
}

export default AboutUs