import settings from '../cms/data/settings.json'

export default {
  getCurrentLanguage: function () {
    const _lang = window.localStorage.getItem('_lang')

    return this.checkLanguageInTheList(_lang)
      ? _lang
      : this.getDefaultLanguage()
  },
  setCurrentLanguage: (language) => {
    window.localStorage.setItem('_lang', language)
  },
  getDefaultLanguage: () => {
    return settings?.defaultLanguage || 'ru'
  },
  setDefaultLanguage: () => {
    window.localStorage.setItem('_lang', settings?.defaultLanguage || 'ru')
  },
  checkLanguageInTheList: (language) => {
    return settings?.languages.includes(language) || false
  }
}