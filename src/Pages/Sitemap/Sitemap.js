import React from 'react'
import './Sitemap.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Sitemap.messages'

const Sitemap = () => {
  const classNamePrefix = 'sitemap'
  const message = setMessages(messages, 'app.page.sitemap.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap