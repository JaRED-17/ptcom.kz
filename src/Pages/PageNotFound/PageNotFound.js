import React from 'react'
import './PageNotFound.scss'
import messages from './PageNotFound.messages'
import setMessages from '../../helpers/setMessages'

const PageNotFound = () => {
  const classNamePrefix = 'page-not-found'
  const message = setMessages(messages, 'app.page.notFound.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
          </div>
          <p className={'text-color-gray'}>{message('text')}</p>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound