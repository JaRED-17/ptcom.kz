import React, { useState } from 'react'
import { FormControl, Select, MenuItem, InputLabel, Box } from '@mui/material'
import { Language as LanguageIcon } from '@mui/icons-material'
import language from '../../helpers/language'

const LanguageSelector = () => {
  const handleChange = (event) => {
    language.setCurrentLanguage(event.target.value)
    window.location.reload()
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LanguageIcon />
      <FormControl size={'small'} variant={'outlined'}>
        <InputLabel id={'language-select-label'}>Language</InputLabel>
        <Select
          labelId={'language-select-label'}
          value={language.setCurrentLanguage()}
          onChange={handleChange}
          label={'Language'}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSelector