import React, {useEffect, useState } from 'react'
import './StaffList.scss'
import messages from './StaffList.messages'
import setMessages from '../../helpers/setMessages'
import ContactBlock from './ContactBlock'
import Loading from '../Loading'

const StaffList = () => {
  const classNamePrefix = 'staff-list'
  const message = setMessages(messages, 'app.staff.list.')
  const [employees, setEmployees] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/cms/data/employees.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(json => setEmployees(json))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div className={classNamePrefix}>
      {error
        ? <p>Ошибка: {error}</p>
        : employees
          ? employees.map((employee, index) => (
            <ContactBlock
              key={index}
              name={message(employee.name)}
              position={message(employee.position)}
              contact={message(employee.contact)}
            />
          ))
          : <Loading />
      }
    </div>
  )
}

export default StaffList