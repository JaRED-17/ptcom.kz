import React from 'react'
import './Contacts.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Contacts.messages'
import ContactBlock from './ContactBlock'
import ContactWithImage from './ContactWithImage'

const Contacts = () => {
  const message = setMessages(messages, 'app.page.contacts.')

  return (
    <div className={'contacts'}>
      <div className={'contacts__content'}>
        <div className={'contacts__content--block'}>
          <div className={'contacts-title'}>
            <h1>{message('title')}</h1>
          </div>
          <p className={'text-color-gray'}>{message('hint')}</p>
          <div className={'contacts-with-image'}>
            <ContactWithImage image={'astana'} title={message('astana.title')} contact={message('astana.contact')} />
            <ContactWithImage image={'almaty'} title={message('almaty.title')} contact={message('almaty.contact')} />
            <ContactWithImage image={'petropavl'} title={message('petropavl.title')} contact={message('petropavl.contact')} />
          </div>
          <div className={'contacts-sipnet'}>
            <img className={'contacts-sipnet__image'} src={'../../../media/icons/sipnet.png'} alt={''} />
            <img className={'contacts-sipnet__phone-image'} src={'../../../media/icons/phone.png'} alt={''} />
            <div className={'contacts-sipnet__phone-text'}>{message('sipnet.phone')}</div>
            <div className={'contacts-sipnet__warning text-color-gray'}>{message('sipnet.warning')}</div>
          </div>
          <p className={'text-color-gray'}>{message('address.title')}</p>
          <p className={'text-color-gray'}>{message('address.text')}</p>
          <div className={'contacts-contacts-list'}>
            <ContactBlock name={message('list.name1')} position={message('list.position1')} contact={message('list.contact1')} />
            <ContactBlock name={message('list.name2')} position={message('list.position2')} contact={message('list.contact2')} />
            <ContactBlock name={message('list.name3')} position={message('list.position3')} contact={message('list.contact3')} />
            <ContactBlock name={message('list.name4')} position={message('list.position4')} contact={message('list.contact4')} />
            <ContactBlock name={message('list.name5')} position={message('list.position5')} contact={message('list.contact5')} />
            <ContactBlock name={message('list.name6')} position={message('list.position6')} contact={message('list.contact6')} />
            <ContactBlock name={message('list.name7')} position={message('list.position7')} contact={message('list.contact7')} />
          </div>
        </div>
      </div>
      <div className={'backgrounds contacts-page'} />
    </div>
  )
}

export default Contacts
