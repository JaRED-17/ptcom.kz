import React from 'react'
import './WagonsDescription.scss'
import PropTypes from 'prop-types'
import Markdown from '../../components/Markdown'

const WagonsDescription = ({ header, description, image, children }) => {
  const classNamePrefix = 'wagons-description'

  return (
    <div className={classNamePrefix}>
      <p className={'text-color-orange text-bolt text-header'}>{header}</p>
      <div className={`${classNamePrefix}__description-block`}>
        <div className={`${classNamePrefix}__description-block--text`}>
          <Markdown childrenClassName={{target: 'paragraph', className: 'text-color-gray'}} text={description} />
        </div>
        <img className={`${classNamePrefix}__description-block--text`} src={`../../../media/${image}.jpg`} alt={''} />
      </div>
      <div className={`${classNamePrefix}__table-block`}>
        {children}
      </div>
    </div>
  )
}

WagonsDescription.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.any
}

export default WagonsDescription