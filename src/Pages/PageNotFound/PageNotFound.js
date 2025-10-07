import React from 'react'
import './PageNotFound.scss'
import messages from './PageNotFound.messages'
import setMessages from '../../helpers/setMessages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const PageNotFound = () => {
  const classNamePrefix = 'page-not-found'
  const message = setMessages(messages, 'app.page.notFound.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'pageNotFound'} />
      <p className={'text-color-gray'}>{message('text')}</p>
    </Page>
  )
}

export default PageNotFound