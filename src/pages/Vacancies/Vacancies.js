import React from 'react'
import setMessages from '../../helpers/setMessages'
import messages from './Vacancies.messages'
import OurAdvantages from '../../components/OurAdvantages'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import Markdown from '../../components/Markdown'

const Vacancies = () => {
  const classNamePrefix = 'vacancies'
  const message = setMessages(messages, 'app.page.vacancies.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={0}>
      <PageTitle name={'vacancies'} />
      <p className={'text-color-gray'}>{message('paragraph1')}</p>
      <Markdown childrenClassName={{ target: 'paragraph', className: 'text-color-gray' }} text={message('paragraph2')} />
      <Markdown childrenClassName={{ target: ['paragraph', 'link'], className: ['text-color-gray', 'white-link'] }} text={message('paragraph3')} />
      <p className={'text-color-gray'}>{message('paragraph4')}</p>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default Vacancies