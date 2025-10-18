import React from 'react'
import './Consultation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Consultation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import Markdown from '../../components/Markdown'
import CustomHelmet from '../../components/CustomHelmet'

const Consultation = () => {
  const classNamePrefix = 'consultation'
  const message = setMessages(messages, 'app.page.consultation.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <CustomHelmet page={'consultation'} />
      <PageTitle name={'consultation'} />
      <Markdown childrenClassName={{ target: 'link', className: 'orange-link' }} text={message('header1')} />
      <p className={'text-color-gray'}>{message('description1')}</p>

      <Markdown childrenClassName={{ target: 'link', className: 'orange-link' }} text={message('header2')} />
      <p className={'text-color-gray'}>{message('description2')}</p>

      <Markdown childrenClassName={{ target: 'link', className: 'orange-link' }} text={message('header3')} />
      <p className={'text-color-gray'}>{message('description3')}</p>

      <Markdown childrenClassName={{ target: 'link', className: 'orange-link' }} text={message('header4')} />
      <p className={'text-color-gray'}>{message('description4')}</p>
    </Page>
  )
}

export default Consultation