import React from 'react'
import './ProvisionOfWagons.scss'
import setMessages from '../../helpers/setMessages'
import messages from './ProvisionOfWagons.messages'
import Markdown from '../../components/Markdown'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import WagonsDescription from './WagonsDescription'
import OurAdvantages from '../../components/OurAdvantages'
import CustomHelmet from '../../components/CustomHelmet'
import StaticContent from '../../components/StaticContent'

const ProvisionOfWagons = () => {
  const classNamePrefix = 'provision-of-wagons'
  const message = setMessages(messages, 'app.page.provisionOfWagons.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={1}>
      <CustomHelmet page={'provisionOfWagons'} />
      <PageTitle name={'provisionOfWagons'} />
      <p className={'text-color-gray'}>{message('paragraph')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <div className={`${classNamePrefix}__content--list`}>
        <div className={`${classNamePrefix}__list1`}>
          <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list1')} />
        </div>
        <div className={`${classNamePrefix}__list2`}>
          <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list2')} />
        </div>
      </div>
      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list3')} />
      <WagonsDescription header={message('header3')} description={message('description1')} image={'kv'}>
        <StaticContent name={'coveredWagons'} />
      </WagonsDescription>
      <WagonsDescription header={message('header4')} description={message('description2')} image={'pv'}>
        <StaticContent name={'openTopWagons'} />
      </WagonsDescription>
      <WagonsDescription header={message('header5')} description={message('description3')} image={'pl'}>
        <StaticContent name={'flatcars'} />
      </WagonsDescription>
      <WagonsDescription header={message('header6')} description={message('description4')} image={'kvh'}>
        <StaticContent name={'coveredHopperWagons'} />
      </WagonsDescription>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default ProvisionOfWagons
