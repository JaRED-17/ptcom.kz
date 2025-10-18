import { useIntl } from 'react-intl'

export default (messages, prefix) => {
  const intl = useIntl()

  return (postfix, replacements = {}) => {
    if (typeof postfix === 'object') {
      const message = messages[prefix + postfix.key]

      return message ? intl.formatMessage(message, replacements) : postfix.default
    }
    const message = messages[prefix + postfix]

    return message ? intl.formatMessage(message, replacements) : prefix + postfix
  }
}