import React from 'react'
import './Page.scss'
import PropTypes from 'prop-types'

const Page = ({ classNamePrefix, children, background }) => {
  return (
    <div className={`${classNamePrefix} page`}>
      <div className={`${classNamePrefix}__content page__content`}>
        <div className={`${classNamePrefix}__content--block page__content--block`}>
          {children}
        </div>
      </div>
      {background}
    </div>
  )
}

Page.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  background: PropTypes.any
}

export default Page