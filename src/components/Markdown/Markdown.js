import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

const Markdown = ({text, inline}) => {
  return (
    <ReactMarkdown
      components={inline ? {
        p: ({ children }) => <>{children}</>
      } : null}
      children={text}
    />
  )
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool
}

export default Markdown