import React from 'react'
import './StaffList.scss'
import messages from './StaffList.messages'
import setMessages from '../../helpers/setMessages'
import ContactBlock from './ContactBlock'

const StaffList = () => {
  const classNamePrefix = 'staff-list'
  const message = setMessages(messages, 'app.staff.list.')

  return (
    <div className={classNamePrefix}>
      <ContactBlock name={message('name1')} position={message('position1')} contact={message('contact1')} />
      <ContactBlock name={message('name2')} position={message('position2')} contact={message('contact2')} />
      <ContactBlock name={message('name3')} position={message('position3')} contact={message('contact3')} />
      <ContactBlock name={message('name4')} position={message('position4')} contact={message('contact4')} />
      <ContactBlock name={message('name5')} position={message('position5')} contact={message('contact5')} />
      <ContactBlock name={message('name6')} position={message('position6')} contact={message('contact6')} />
      <ContactBlock name={message('name7')} position={message('position7')} contact={message('contact7')} />
    </div>
  )
}

export default StaffList