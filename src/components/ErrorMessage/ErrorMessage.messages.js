import { defineMessages } from 'react-intl'

export default defineMessages({
  'app.error.code.mandatory': {
    id: 'app.error.code.mandatory',
    defaultMessage: 'Это поле является обязательным'
  },
  'app.error.code.minWidth': {
    id: 'app.error.code.minWidth',
    defaultMessage: 'Содержимое этого поля должно быть минимум {amount} символ(а)'
  },
  'app.error.code.maxWidth': {
    id: 'app.error.code.maxWidth',
    defaultMessage: 'Содержимое этого поля должно быть максимум {amount} символов'
  },
  'app.error.code.wrongEmail': {
    id: 'app.error.code.wrongEmail',
    defaultMessage: 'Введите корректный email'
  },
  'app.error.code.wrongPhone': {
    id: 'app.error.code.wrongPhone',
    defaultMessage: 'Введите корректный номер телефонв'
  }
})