import React from 'react'
import './ProvisionOfWagons.scss'
import setMessages from '../../helpers/setMessages'
import messages from './ProvisionOfWagons.messages'
import Markdown from '../../components/Markdown'

const ProvisionOfWagons = () => {
  const classNamePrefix = 'provision-of-wagons'
  const message = setMessages(messages, 'app.page.provisionOfWagons.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
          </div>
          <p className={'text-color-gray'}>{message('paragraph')}</p>
          <div className={`${classNamePrefix}__content--list`}>
            <div className={`${classNamePrefix}__list1`}>
              <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list1')} />
            </div>
            <div className={`${classNamePrefix}__list2`}>
              <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list2')} />
            </div>
          </div>
        </div>
      </div>
      <div className={'backgrounds provision-of-wagons-background'} />
    </div>
  )
}

export default ProvisionOfWagons
