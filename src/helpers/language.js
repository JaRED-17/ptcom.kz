import settings from '../cms/data/settings.json'

export default {
  getCurrentLanguage: () => {
    return window.localStorage.getItem('_lang') || settings?.languages[0] || settings?.defaultLanguage || 'ru'
  },
  setCurrentLanguage: (language) => {
    window.localStorage.setItem('_lang', language)
  },
  getDefaultLanguage: () => {
    return settings?.defaultLanguage || 'ru'
  },
  setDefaultLanguage: () => {
    window.localStorage.setItem('_lang', settings?.defaultLanguage || 'ru')
  }
}