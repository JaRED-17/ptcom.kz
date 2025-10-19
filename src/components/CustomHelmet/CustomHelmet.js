import React from 'react'
import { Helmet } from 'react-helmet'
import messages from './CustomHelmet.messages'
import PageTitles from '../PageTitle/PageTitle.messages'
import setMessages from '../../helpers/setMessages'
import PropTypes from 'prop-types'

const CustomHelmet = ({ page }) => {
  const message = setMessages(messages, 'app.page.seo.')
  const PageTitle = setMessages(PageTitles, 'app.page.')

  return (
    <Helmet>
      <title>
        {page === 'home'
          ? message('title.home')
          : message('title.template', {
            title: PageTitle(page + '.title')
          })
        }
      </title>
      <meta name={'description'} content={message({
        key: 'description.' + page,
        default: message('description.home')
      })} />
      <meta name={'keywords'} content={message({
        key: 'keywords.' + page,
        default: message('keywords.home')
      })} />
      <link rel={'canonical'} href={window.location.href} />
    </Helmet>
  )
}

CustomHelmet.propTypes = {
  page: PropTypes.string
}

export default CustomHelmet