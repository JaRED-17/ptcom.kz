import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Markdown = ({text, inline, childrenClassName}) => {
  const getComponents = (inline, childrenClassName) => {
    if (inline) {
      return {
        p: ({ children }) => <>{children}</>
      }
    }

    if (childrenClassName) {
      if (childrenClassName.target === 'link') {
        return {
          p: ({ children }) => <>{children}</>,
          a: ({ children, href }) => <Link to={href} className={childrenClassName.className}>{children}</Link>
        }
      }
      if (childrenClassName.target === 'list') {
        return {
          li: ({ children }) => <li className={childrenClassName.className}>{children}</li>,
          p: ({ children }) => <>{children}</>
        }
      }

      return {
        p: ({ children }) => <p className={childrenClassName.className}>{children}</p>
      }
    }

    return null
  }

  return (
    <ReactMarkdown
      components={getComponents(inline, childrenClassName)}
      children={text}
    />
  )
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  childrenClassName: PropTypes.object
}

export default Markdown