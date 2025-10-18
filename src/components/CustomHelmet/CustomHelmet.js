import React from 'react'
import { Helmet } from 'react-helmet-async'
import messages from './CustomHelmet.messages'
import setMessages from '../../helpers/setMessages'
import PropTypes from 'prop-types'

const CustomHelmet = ({ page }) => {
  const message = setMessages(messages, 'app.page.seo.')

  console.log(message({
    key: 'title.' + page,
    default: message('title.home')
  }))
  console.log(message({
    key: 'description.' + page,
    default: message('description.home')
  }))
  return (
    <Helmet>
      <title>
        {message({
          key: 'title.' + page,
          default: message('title.home')
        })}
      </title>
      <meta name={'description'} content={message({
        key: 'description.' + page,
        default: message('description.home')
      })}/>
      <link rel={'canonical'} href={window.location.href} />
    </Helmet>
  )
}

CustomHelmet.propTypes = {
  page: PropTypes.string
}

export default CustomHelmet