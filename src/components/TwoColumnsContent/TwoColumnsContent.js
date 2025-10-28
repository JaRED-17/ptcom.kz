import React from 'react'
import './TwoColumnsContent.scss'
import PropTypes from 'prop-types'

const TwoColumnsContent = ({ column1, column2 }) => {
  const classNamePrefix = 'two-columns-content'

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__first-column-content`}>
        {column1}
      </div>
      <div className={`${classNamePrefix}__second-column-content`}>
        {column2}
      </div>
    </div>
  )
}

TwoColumnsContent.propTypes = {
  column1: PropTypes.any,
  column2: PropTypes.any
}

export default TwoColumnsContent