import React, { useEffect, useRef, useState } from 'react'
import './TextField.scss'
import { TextField as TextFieldUI } from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import validate from '../../helpers/validate'
import PropTypes from 'prop-types'

const TextField = ({
  label,
  name,
  type,
  fullWidth = true,
  multiline = false,
  rows,
  disabled = false,
  mandatory = false,
  addRef = () => {},
  params
}) => {
  const inputRef = useRef(null)
  const [error, setError] = useState({
    errorCode: '',
    replacements: {}
  })
  const [value, setValue] = useState('')

  useEffect(() => {
    inputRef.current.validateField = validateField
    inputRef.current.clearError = () => {
      setError({
        errorCode: '',
        replacements: {}
      })
    }
    inputRef.current.clear = () => {
      setValue('')
    }
    addRef(name, inputRef)
  }, [])

  const validateField = () => {
    const validation = validate[name](inputRef.current.value)

    if (validation.error) {
      setError({ ...validation.errorDetails })
    } else {
      setError({
        errorCode: '',
        replacements: {}
      })
    }

    return validation
  }

  return (
    <TextFieldUI
      {...params}
      inputRef={inputRef}
      className={'input input-default'}
      label={mandatory ? `${label}*` : label}
      name={name}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={validateField}
      disabled={disabled}
      fullWidth={fullWidth}
      multiline={multiline}
      error={!!error.errorCode}
      helperText={error.errorCode ? <ErrorMessage code={error.errorCode} replacements={error.replacements} /> : ''}
      rows={rows}
    />
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  addRef: PropTypes.func,
  params: PropTypes.object
}

export default TextField