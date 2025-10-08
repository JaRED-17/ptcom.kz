import React from 'react'
import PropTypes from 'prop-types'
import AsideMenu from '../AsideMenu'
import Page from '../Page'
import data from '../../data/pages.json'

const PageWithAsideMenu = ({ classNamePrefix, children, index = 0 }) => {
  const { pages } = data

  return (
    <Page classNamePrefix={classNamePrefix} asideMenu>
      <AsideMenu list={pages[index].entries} />
      <div className={'fade-in-up'}>
        {children}
      </div>
    </Page>
  )
}

PageWithAsideMenu.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  index: PropTypes.number,
}

export default PageWithAsideMenu