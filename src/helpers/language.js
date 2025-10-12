import settings from '../cms/data/settings.json'

export default {
  get: () => {
    return window.localStorage.getItem('_lang') || settings?.languages[0] || settings?.defaultLanguage || 'ru'
  },
  set: (language) => {
    window.localStorage.setItem('_lang', language)
  },
  setDefault: (language) => {
    window.localStorage.setItem('_lang', settings?.defaultLanguage || 'ru')
  }
}