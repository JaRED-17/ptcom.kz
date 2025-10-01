import { useIntl } from 'react-intl'

export default (messages, prefix) => {
  const intl = useIntl()

  return (postfix) => {
    return intl.formatMessage(messages[prefix + postfix])
  }
}