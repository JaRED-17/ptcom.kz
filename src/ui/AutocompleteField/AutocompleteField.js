import React, { useEffect, useRef, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import validate from '../../helpers/validate'

const AutocompleteField = ({
  options = [],
  label,
  name,
  type,
  fullWidth = true,
  multiline = false,
  rows,
  disabled = false,
  mandatory = false,
  readOnly = false,
  addRef = () => {},
  onValidate = () => {}
}) => {
  const inputRef = useRef(null)
  const [error, setError] = useState({
    errorCode: '',
    replacements: {}
  })
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    inputRef.current.validateField = validateField
    inputRef.current.clear = () => {
      setError({
        errorCode: '',
        replacements: {}
      })
      setValue('')
      setInputValue('')
    }
    addRef(name, inputRef)
  }, [])

  const validateField = () => {
    const result = validate[name]?.(inputRef.current.value)

    if (result.error) {
      setError({ ...result.errorDetails })
    } else {
      setError({
        errorCode: '',
        replacements: {}
      })
    }

    return result
  }

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option}
      value={value}
      inputValue={inputValue}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      onInputChange={(event, newValue) => {
        setInputValue(newValue)
      }}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          className={'input input-default'}
          label={mandatory ? `${label}*` : label}
          name={name}
          type={type}
          onBlur={() => {
            validateField()
            onValidate(name)
          }}
          fullWidth={fullWidth}
          multiline={multiline}
          error={!!error.errorCode}
          helperText={error.errorCode ? <ErrorMessage code={error.errorCode} replacements={error.replacements} /> : ''}
          rows={rows}
          inputProps={{
            ...params.inputProps,
            readOnly
          }}
        />
      )}
    />
  )
}

AutocompleteField.propTypes = {
  options: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  readOnly: PropTypes.bool,
  addRef: PropTypes.func,
  onValidate: PropTypes.func
}

export default AutocompleteField