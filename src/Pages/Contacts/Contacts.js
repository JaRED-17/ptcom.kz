import React from 'react'
import './Contacts.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Contacts.messages'
import StaffList from '../../components/StaffList'
import ContactWithImage from './ContactWithImage'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const Contacts = () => {
  const classNamePrefix = 'contacts'
  const message = setMessages(messages, 'app.page.contacts.')

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'contacts'} />
      <p className={'text-color-gray'}>{message('hint')}</p>
      <div className={'contacts-with-image'}>
        <ContactWithImage image={'astana'} title={message('astana.title')} contact={message('astana.contact')} />
        <ContactWithImage image={'almaty'} title={message('almaty.title')} contact={message('almaty.contact')} />
        <ContactWithImage image={'petropavl'} title={message('petropavl.title')} contact={message('petropavl.contact')} />
      </div>
      <div className={'contacts-sipnet'}>
        <img className={'contacts-sipnet__image'} src={'../../../media/images/icons/sipnet.png'} alt={''} />
        <img className={'contacts-sipnet__phone-image'} src={'../../../media/images/icons/phone.png'} alt={''} />
        <div className={'contacts-sipnet__phone-text'}>{message('sipnet.phone')}</div>
        <div className={'contacts-sipnet__warning text-color-gray'}>{message('sipnet.warning')}</div>
      </div>
      <p className={'text-color-gray'}>{message('address.title')}</p>
      <p className={'text-color-gray'}>{message('address.text')}</p>
      <StaffList />
    </Page>
  )
}

export default Contacts
