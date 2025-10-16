import React, {useEffect} from 'react'
import './Page.scss'
import PropTypes from 'prop-types'

const Page = ({ classNamePrefix, children, asideMenu = false }) => {
  useEffect(() => {
    const background = document.querySelector('body')
    background?.classList.add(`background__${classNamePrefix}-page`)

    return () => {
      background?.classList.remove(`background__${classNamePrefix}-page`)
    }
  }, [])

  return (
    <div className={`${classNamePrefix} page`}>
      <div className={`${classNamePrefix}__content page__content`}>
        <div className={`${classNamePrefix}__content--block page__content--block${asideMenu ? '' : ' fade-in-up glass-effect'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  asideMenu: PropTypes.bool
}

export default Page