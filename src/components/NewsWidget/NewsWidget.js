import React from 'react'
import './NewsWidget.scss'
import pages from '../../cms/data/pages.json'
import { Link } from 'react-router-dom'
import messages from './NewsWidget.messages'
import PageTitles from '../PageTitle/PageTitle.messages'
import setMessages from '../../helpers/setMessages'

const NewsWidget = () => {
  const classNamePrefix = 'news-widget'
  const message = setMessages(messages, 'app.newsWidget.')
  const PageTitle = setMessages(PageTitles, 'app.page.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <p className={'text-color-orange text-bolt text-header'}>{message('title')}</p>
      </div>
      <div className={`${classNamePrefix}__links`}>
        {pages[0].entries[1].entries.map((entry, index) => (
          <div className={`${classNamePrefix}__link`} key={index}>
            <Link className={'grey-link'} to={entry.url}>{PageTitle(entry.name + '.title')}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsWidget