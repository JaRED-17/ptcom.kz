import React, {useEffect, useState } from 'react'
import './StaffList.scss'
import Loading from '../Loading'

const StaffList = () => {
  const classNamePrefix = 'staff-list'
  const [employees, setEmployees] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/cms/static/staffs/ru.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        return response.text()
      })
      .then(html => setEmployees(html))
      .catch(err => setError(err.message))
  }, [])

  return error
    ? <p>Ошибка: {error}</p>
    : employees
      ? <div className={`${classNamePrefix}`} dangerouslySetInnerHTML={{ __html: employees }} />
      : <Loading />
}

export default StaffList