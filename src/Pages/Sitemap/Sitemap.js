import React from 'react'
import './Sitemap.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Sitemap.messages'
import pageTitles from '../../components/PageTitle/PageTitle.messages'
import data from '../../data/pages.json'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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
  const message = setMessages(messages, 'app.page.sitemap.')
  const { pages } = data

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <div className={`${classNamePrefix}-title`}>
            <h1>{message('title')}</h1>
            <ul className={`${classNamePrefix}-links`}>
              {(() => {
                return pages.map((page, index) => {
                  if (page.entries) {
                    return (
                      <div key={index}>
                        <SiteMapLink url={page.url} name={page.name} />
                        <ul className={`${classNamePrefix}-links sub-links`}>
                          {(() => {
                            return page.entries.map((page, index) => <SiteMapLink key={index} url={page.url} name={page.name} />)
                          })()}
                        </ul>
                      </div>
                    )
                  }

                  return <SiteMapLink key={index} url={page.url} name={page.name} />
                })
              })()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitemap