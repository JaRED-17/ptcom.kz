import React from 'react'
import './LanguageSelector.scss'
import { FormControl, Select, MenuItem } from '@mui/material'
import language from '../../helpers/language'
import messages from './LanguageSelector.messages'
import setMessages from '../../helpers/setMessages'
import settings from '../../cms/data/settings.json'

const LanguageSelector = () => {
  const classNamePrefix = 'language-selector'
  const message = setMessages(messages, 'app.languageSelector.')
  const onChange = (event) => {
    const newLanguage = event.target.value
    const currentLanguage = language.getCurrentLanguage()
    const currentPath = window.location.pathname
    const languagePrefixRegexp = new RegExp(`^/${currentLanguage}($|/)`)

    language.setCurrentLanguage(newLanguage)

    if (currentPath === '/' || currentPath === `/${currentLanguage}`) {
      window.location.pathname = `/${newLanguage}`
    } else if (languagePrefixRegexp.test(currentPath)) {
      window.location.pathname = currentPath.replace(languagePrefixRegexp, `/${newLanguage}/`)
    } else {
      window.location.pathname = newLanguage + currentPath.replace(languagePrefixRegexp, '')
    }
  }

  const showLanguageSelector = () => {
    return settings?.languages?.length > 1
  }

  return showLanguageSelector() ? (
    <div className={classNamePrefix}>
      <FormControl size={'small'} variant={'outlined'}>
        <Select
          labelId={'language-select-label'}
          value={language.getCurrentLanguage()}
          onChange={onChange}
          label={'Language'}
          sx={{ minWidth: 120 }}
          MenuProps={{
            disableScrollLock: true
          }}
        >
          {(settings?.languages || []).map((language, index) => (
            <MenuItem key={index} value={language}>
              <img
                src={`/cms/images/icons/${language}.svg`}
                alt={message('language.' + language)}
                style={{
                  width: 28,
                  height: 20,
                  objectFit: 'cover',
                  borderRadius: 3,
                  border: '1px solid #ccc'
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  ) : null
}

export default LanguageSelector