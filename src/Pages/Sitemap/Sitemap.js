import React from 'react'
import './Sitemap.scss'
import setMessages from '../../helpers/setMessages'
import pageTitles from '../../components/PageTitle/PageTitle.messages'
import data from '../../media/data/pages.json'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'

const SiteMapLink = ({url, name}) => {
  const pageTitle = setMessages(pageTitles, 'app.page.')

  return (
    <li>
      <Link to={url} className={'white-link'}>
        {pageTitle(name + '.title')}
      </Link>
    </li>
  )
}

SiteMapLink.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
}

const Sitemap = () => {
  const classNamePrefix = 'sitemap'
  const { pages } = data
  const handlePages = (pages) => {
    return pages.map((page, index) => {
      if (page.entries) {
        return (
          <div key={index}>
            <SiteMapLink url={page.url} name={page.name} />
            <ul className={`${classNamePrefix}-links sub-links`}>
              {(() => handlePages(page.entries))()}
            </ul>
          </div>
        )
      }

      return <SiteMapLink key={index} url={page.url} name={page.name} />
    })
  }

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'sitemap'} />
      <ul className={`${classNamePrefix}-links`}>
        {(() => handlePages(pages))()}
      </ul>
    </Page>
  )
}

export default Sitemap