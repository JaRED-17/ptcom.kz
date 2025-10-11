import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AsideMenu from '../AsideMenu'
import Page from '../Page'
import pages from '../../cms/data/pages.json'

const AnimatedWrapper = ({ children }) => {
  const [child, setChild] = useState(null)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setChild(children)
    setKey(prev => prev + 1)
  }, [children])

  return child ? (
    <div key={key} className={'fade-in-up'}>
      {child}
    </div>
  ) : <div />
}

AnimatedWrapper.propTypes = {
  children: PropTypes.any
}

const PageWithAsideMenu = ({ classNamePrefix, children, index = 0, entries }) => {
  return (
    <Page classNamePrefix={classNamePrefix} asideMenu>
      <AsideMenu list={entries ? pages[index].entries[entries].entries : pages[index].entries} />
      <AnimatedWrapper children={children} />
    </Page>
  )
}

PageWithAsideMenu.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  index: PropTypes.number,
  entries: PropTypes.number
}

export default PageWithAsideMenu