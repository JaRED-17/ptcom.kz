import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

const Markdown = ({text, inline, childrenClassName}) => {
  const getComponents = (inline, childrenClassName) => {
    if (inline) {
      return {
        p: ({ children }) => <>{children}</>
      }
    }

    if (childrenClassName) {
      return childrenClassName.target === 'link' ? {
        p: ({ children }) => <>{children}</>,
        a: ({ children, href }) => <a href={href} className={childrenClassName.className}>{children}</a>
      } : {
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