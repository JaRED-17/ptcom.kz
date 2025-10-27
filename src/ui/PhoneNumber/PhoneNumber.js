import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import ErrorMessage from '../../components/ErrorMessage'
import validate from '../../helpers/validate'

const PhoneMask = forwardRef(function PhoneMask (props, ref) {
  const { onChange, ...other } = props

  return (
    <IMaskInput
      {...other}
      mask={'+{7} (000) 000-00-00'}
      lazy={false}
      placeholderChar={'_'}
      definitions={{
        '#': /[0-9]/
      }}
      inputRef={ref}
      overwrite
      onAccept={(value) => {
        onChange({
          target: {
            value
          }
        })
      }}
    />
  )
})

PhoneMask.propTypes = {
  onChange: PropTypes.func
}

const PhoneNumber = ({
  label,
  name,
  type,
  fullWidth = true,
  disabled = false,
  mandatory = false,
  addRef = () => {}
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
    <TextField
      InputProps={{
        inputComponent: PhoneMask
      }}
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
      error={!!error.errorCode}
      helperText={error.errorCode ? <ErrorMessage code={error.errorCode} replacements={error.replacements} /> : ''}
    />
  )
}

PhoneNumber.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  addRef: PropTypes.func
}

export default PhoneNumber