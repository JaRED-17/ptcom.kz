import React from 'react'
import './Page.scss'
import PropTypes from 'prop-types'

const Page = ({ classNamePrefix, children }) => {
  return (
    <div className={`${classNamePrefix} page`}>
      <div className={`${classNamePrefix}__content page__content`}>
        <div className={`${classNamePrefix}__content--block page__content--block`}>
          {children}
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any
}

export default Page