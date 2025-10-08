import React, {useEffect} from 'react'
import './Page.scss'
import PropTypes from 'prop-types'

const Page = ({ classNamePrefix, children, background }) => {
  useEffect(() => {
    const background = document.querySelector('#background')
    background?.classList.add(`backgrounds`)
    background?.classList.add(`background__${classNamePrefix}-page`)

    return () => {
      background?.classList.remove(`backgrounds`)
      background?.classList.remove(`background__${classNamePrefix}-page`)
    }
  }, [])

  return (
    <div className={`${classNamePrefix} page`}>
      <div className={`${classNamePrefix}__content page__content`}>
        <div className={`${classNamePrefix}__content--block page__content--block fade-in-up`}>
          {children}
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  background: PropTypes.any
}

export default Page