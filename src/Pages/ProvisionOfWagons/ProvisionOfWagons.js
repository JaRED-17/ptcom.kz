import React from 'react'
import './ProvisionOfWagons.scss'
import setMessages from '../../helpers/setMessages'
import messages from './ProvisionOfWagons.messages'
import Markdown from '../../components/Markdown'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const ProvisionOfWagons = () => {
  const classNamePrefix = 'provision-of-wagons'
  const message = setMessages(messages, 'app.page.provisionOfWagons.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'provisionOfWagons'} />
      <p className={'text-color-gray'}>{message('paragraph')}</p>
      <div className={`${classNamePrefix}__content--list`}>
        <div className={`${classNamePrefix}__list1`}>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list1')} />
        </div>
        <div className={`${classNamePrefix}__list2`}>
          <Markdown childrenClassName={{target: 'list', className: 'text-color-gray'}} text={message('list2')} />
        </div>
      </div>
      <div className={'backgrounds provision-of-wagons-background'} />
    </Page>
  )
}

export default ProvisionOfWagons
