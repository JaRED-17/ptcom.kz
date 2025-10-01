import React from 'react'
import messages from './PageNotFound.messages'
import setMessages from '../../helpers/setMessages'

const PageNotFound = () => {
  const message = setMessages(messages, 'app.page.notFound.')

  return (
    <div className={'page-not-found'}>
      {message('text')}
    </div>
  )
}

export default PageNotFound