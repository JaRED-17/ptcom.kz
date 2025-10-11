import React from 'react'
import PropTypes from 'prop-types'
import AsideMenu from '../AsideMenu'
import Page from '../Page'
import pages from '../../cms/data/pages.json'

const PageWithAsideMenu = ({ classNamePrefix, children, index = 0, entries }) => {
  return (
    <Page classNamePrefix={classNamePrefix} asideMenu>
      <AsideMenu list={entries ? pages[index].entries[entries].entries : pages[index].entries} />
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
  entries: PropTypes.number
}

export default PageWithAsideMenu