import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Markdown = ({ text, inline, childrenClassName, params = {} }) => {
  const getComponents = (inline, childrenClassName) => {
    if (inline) {
      return {
        p: ({ children }) => <>{children}</>
      }
    }

    if (childrenClassName) {
      if (Array.isArray(childrenClassName.target)) {
        return {
          p: ({ children }) => childrenClassName.target.includes('paragraph') ? <p className={childrenClassName.className[0]}>{children}</p> : <>{children}</>,
          a: ({ children, href }) => childrenClassName.target.includes('link') ? <Link to={href} className={childrenClassName.className[1]}>{children}</Link> : null
        }
      }
      if (childrenClassName.target === 'link') {
        return {
          p: ({ children }) => <>{children}</>,
          a: ({ children, href }) => <Link {...params} to={href} className={childrenClassName.className}>{children}</Link>
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
    <ReactMarkdown components={getComponents(inline, childrenClassName)}>
      {text}
    </ReactMarkdown>
  )
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  childrenClassName: PropTypes.object,
  params: PropTypes.object
}

export default Markdown