import React from 'react'
import './Contacts.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Contacts.messages'
import ContactBlock from './ContactBlock'

const Contacts = () => {
  const message = setMessages(messages, 'app.page.contacts.')

  return (
    <div className='contacts'>
      <div className='contacts__content'>
        <div className={'contacts__content--block'}>
          <div className={'contacts__content--block__title'}>
            <h1>{message('title')}</h1>
          </div>
          <div className={'contacts__content--block__contacts'}>
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
            <ContactBlock name={'Евгения Владимировна Криворучко'} position={'Бухгалтер по налогам'} contact={'Внутренний номер 315 evgedsha_petr@mail.ru'} />
          </div>
        </div>
      </div>
      <div className='backgrounds contacts-page' />
    </div>
  )
}

export default Contacts
