import { useIntl } from 'react-intl'

export default (messages, prefix) => {
  const intl = useIntl()

  return (postfix, replacements) => {
    const message = messages[prefix + postfix]

    return message ? intl.formatMessage(message, replacements) : prefix + postfix
  }
}