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
  },
  syncLanguageWithUrl: function () {
    let success = false
    const languages = settings?.languages || []
    const currentPath = window.location.pathname

    languages.forEach(language => {
      const languagePrefixRegexp = new RegExp(`^/${language}($|/)`)

      if (languagePrefixRegexp.test(currentPath)) {
        this.setCurrentLanguage(language)
        success = true
      }
    })

    return success
  }
}