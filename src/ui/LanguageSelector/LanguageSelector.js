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
    const currentPath = window.location.pathname
    const lang = language.getCurrentLanguage()
    const languagePrefixRegexp = new RegExp(`^/${lang}($|/)`)

    language.setCurrentLanguage(event.target.value)

    if (languagePrefixRegexp.test(currentPath)) {
      window.location.pathname = currentPath.replace(languagePrefixRegexp, '/' + event.target.value + '/')
    } else {
      window.location.pathname = event.target.value + currentPath.replace(languagePrefixRegexp, '')
    }
  }

  return (
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
              {message('language.' + language)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default LanguageSelector