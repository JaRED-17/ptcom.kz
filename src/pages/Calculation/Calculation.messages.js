import { defineMessages } from 'react-intl'

export default defineMessages({
  'app.page.calculation.form.header1': {
    id: 'app.page.calculation.form.header1',
    defaultMessage: 'Контактная информация'
  },
  'app.page.calculation.form.header2': {
    id: 'app.page.calculation.form.header2',
    defaultMessage: 'Описание груза (тип груза и его особенности)'
  },
  'app.page.calculation.form.header3': {
    id: 'app.page.calculation.form.header3',
    defaultMessage: 'Информация о маршруте'
  },
  'app.page.calculation.form.company': {
    id: 'app.page.calculation.form.company',
    defaultMessage: 'Наименование компании'
  },
  'app.page.calculation.form.phone': {
    id: 'app.page.calculation.form.phone',
    defaultMessage: 'Телефон'
  },
  'app.page.calculation.form.name': {
    id: 'app.page.calculation.form.name',
    defaultMessage: 'Контактное лицо'
  },
  'app.page.calculation.form.email': {
    id: 'app.page.calculation.form.email',
    defaultMessage: 'E-mail'
  },
  'app.page.calculation.form.weightName': {
    id: 'app.page.calculation.form.weightName',
    defaultMessage: 'Наименование груза'
  },
  'app.page.calculation.form.cargoCodes': {
    id: 'app.page.calculation.form.cargoCodes',
    defaultMessage: 'Коды груза ЕТСНГ, ГНГ'
  },
  'app.page.calculation.form.packing': {
    id: 'app.page.calculation.form.packing',
    defaultMessage: 'Упаковка'
  },
  'app.page.calculation.form.weight': {
    id: 'app.page.calculation.form.weight',
    defaultMessage: 'Загрузка вагона'
  },
  'app.page.calculation.form.from': {
    id: 'app.page.calculation.form.from',
    defaultMessage: 'Станция отправления'
  },
  'app.page.calculation.form.to': {
    id: 'app.page.calculation.form.to',
    defaultMessage: 'Станция назначения'
  },
  'app.page.calculation.form.typeWagons': {
    id: 'app.page.calculation.form.typeWagons',
    defaultMessage: 'Тип вагонов'
  },
  'app.page.calculation.form.message': {
    id: 'app.page.calculation.form.message',
    defaultMessage: 'Дополнительно'
  },
  'app.page.calculation.form.button': {
    id: 'app.page.calculation.form.button',
    defaultMessage: 'Отправить'
  },
  'app.page.calculation.notification.success': {
    id: 'app.page.calculation.notification.success',
    defaultMessage: 'Письмо успешно отправлено'
  },
  'app.page.calculation.notification.error': {
    id: 'app.page.calculation.notification.error',
    defaultMessage: 'Произошла ошибка во время отправки письма'
  },
  'app.page.calculation.notification.warning': {
    id: 'app.page.calculation.notification.warning',
    defaultMessage: 'Пожалуста, проверьте Captcha'
  },
  'app.page.calculation.email': {
    id: 'app.page.calculation.email',
    defaultMessage: 'Наименование компании: {company}\n\n' +
      'Телефон: {phone}\n\n' +
      'Контактное лицо: {name}\n\n' +
      'E-mail: {email}\n\n' +
      'Наименование груза: {weightName}\n\n' +
      'Коды груза ЕТСНГ, ГНГ: {cargoCodes}\n\n' +
      'Упаковка: {packing}\n\n' +
      'Загрузка вагона: {weight}\n\n' +
      'Станция отправления: {from}\n\n' +
      'Станция назначения: {to}\n\n' +
      'Тип вагонов: {typeWagons}\n\n' +
      'Дополнительно: {message}\n\n' +
      'Дата и время создания запроса: {dateTime}'
  },
  'app.page.calculation.subject': {
    id: 'app.page.calculation.subject',
    defaultMessage: 'Новый запрос на расчет тарифов'
  },
  'app.page.calculation.mandatory': {
    id: 'app.page.calculation.mandatory',
    defaultMessage: '* - обязательные поля'
  }
})