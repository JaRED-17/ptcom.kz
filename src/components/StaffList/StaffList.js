import React from 'react'
import './StaffList.scss'
import StaticContent from '../StaticContent'

const StaffList = () => {
  const classNamePrefix = 'staff-list'

  return (
    <div className={classNamePrefix}>
      <StaticContent name={'staffs'} />
    </div>
  )
}

export default StaffList