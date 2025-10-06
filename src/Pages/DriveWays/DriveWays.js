import React from 'react'
import './DriveWays.scss'
import setMessages from '../../helpers/setMessages'
import messages from './DriveWays.messages'
import YandexMap from '../../components/YandexMap'
import Markdown from '../../components/Markdown'

const DriveWays = () => {
  const classNamePrefix = 'drive-ways'
  const message = setMessages(messages, 'app.page.driveWays.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
          </div>
          <p className={'text-color-gray'}>{message('paragraph1')}</p>
          <p className={'text-color-gray'}>{message('paragraph2')}</p>

          <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('services.list1')} />
          <p className={'text-color-gray'}>{message('paragraph3')}</p>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('services.list2')} />

          <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('services.list3')} />

          <p className={'text-color-orange text-bolt text-header'}>{message('header3')}</p>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('services.list4')} />

          <p className={'text-color-orange text-bolt text-header'}>{message('header4')}</p>
          <YandexMap />

          <p className={'text-color-orange text-bolt text-header'}>{message('header5')}</p>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('services.list5')} />
        </div>
      </div>
      <div className={'backgrounds drive-ways-background'} />
    </div>
  )
}

export default DriveWays
