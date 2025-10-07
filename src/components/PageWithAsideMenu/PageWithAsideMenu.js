import React from 'react'
import PropTypes from 'prop-types'
import AsideMenu from '../AsideMenu'
import Page from '../Page'
import data from '../../data/pages.json'

const PageWithAsideMenu = ({ classNamePrefix, children, background }) => {
  const { pages } = data

  return (
    <Page classNamePrefix={classNamePrefix} background={background}>
      <AsideMenu list={pages[1].entries} />
      <div>
        {children}
      </div>
    </Page>
  )
}

PageWithAsideMenu.propTypes = {
  classNamePrefix: PropTypes.string,
  children: PropTypes.any,
  background: PropTypes.any
}

export default PageWithAsideMenu