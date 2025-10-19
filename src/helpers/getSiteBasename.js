export default (currentLanguage = '') => {
  const currentPath = window.location.pathname
  const languagePrefixRegexp = new RegExp(`^/${currentLanguage}($|/)`)
  const hasLanguagePrefix = !!currentLanguage && languagePrefixRegexp.test(currentPath)
  return hasLanguagePrefix ? `/${currentLanguage}` : '/'
}
