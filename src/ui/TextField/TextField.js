import React, { forwardRef, useEffect, useRef, useState } from 'react'
import './TextField.scss'
import { TextField as TextFieldUI } from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import PropTypes from 'prop-types'
import validate from '../../helpers/validate'
import { IMaskInput } from 'react-imask'

const PhoneMask = forwardRef(function PhoneMask (props, ref) {
  return (
    <IMaskInput
      {...props}
      mask={'+{7} (000) 000-00-00'}
      definitions={{
        '#': /[0-9]/
      }}
      inputRef={ref}
      overwrite
    />
  )
})

const TextField = ({
  label,
  name,
  type,
  value,
  onChange = () => {},
  fullWidth = true,
  multiline = false,
  rows,
  children,
  disabled = false,
  mandatory = false,
  addRef = () => {}
}) => {
  const inputRef = useRef(null)
  const [error, setError] = useState({
    errorCode: '',
    replacements: {}
  })

  useEffect(() => {
    inputRef.current.onBlur = onBlur
    addRef(name, inputRef)
  }, [])

  const onBlur = () => {
    const result = validate[name](inputRef.current.value)

    if (result.error) {
      setError({ ...result.errorDetails })
    } else {
      setError({
        errorCode: '',
        replacements: {}
      })
    }
  }

  return (
    <TextFieldUI
      inputRef={inputRef}
      className={'input input-default'}
      label={mandatory ? `${label}*` : label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      fullWidth={fullWidth}
      multiline={multiline}
      error={!!error.errorCode}
      helperText={error.errorCode ? <ErrorMessage code={error.errorCode} replacements={error.replacements} /> : ''}
      rows={rows}
      InputProps={name === 'phone'
        ? {
          inputComponent: PhoneMask
        }
        : null}
    >
      {children}
    </TextFieldUI>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  addRef: PropTypes.func
}

export default TextField