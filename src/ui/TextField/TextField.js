import React, { forwardRef, useEffect, useRef, useState } from 'react'
import './TextField.scss'
import { TextField as TextFieldUI } from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import PropTypes from 'prop-types'
import validate from '../../helpers/validate'
import { IMaskInput } from 'react-imask'
import Autocomplete from '@mui/material/Autocomplete'
import UTSNG from '../../cms/data/catalogs/UTSNG.json'
import typeWagons from '../../cms/data/catalogs/typeWagons.json'

const PhoneMask = forwardRef(function PhoneMask (props, ref) {
  return (
    <IMaskInput
      {...props}
      mask={'+{7} (000) 000-00-00'}
      lazy={false}
      placeholderChar={'_'}
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
    inputRef.current.validateField = validateField
    addRef(name, inputRef)
  }, [])

  const validateField = () => {
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

  const textField = (params) => {
    return (
      <TextFieldUI
        {...params}
        inputRef={inputRef}
        className={'input input-default'}
        label={mandatory ? `${label}*` : label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
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

  if (name === 'cargoCodes') {
    return (
      <Autocomplete
        options={UTSNG}
        getOptionLabel={(option) => `${option.code} ${option.name}`}
        value={value}
        renderInput={(params) => textField(params)}
      />
    )
  }

  if (name === 'weightName') {
    const result = []

    UTSNG.forEach((item) => {
      if (!result.includes(item.name)) {
        result.push(item.name)
      }
    })

    return (
      <Autocomplete
        options={result.sort((a, b) => a - b)}
        getOptionLabel={(option) => option}
        value={value}
        renderInput={(params) => textField(params)}
      />
    )
  }

  if (name === 'typeWagons') {
    return (
      <Autocomplete
        options={typeWagons}
        getOptionLabel={option => option.type}
        value={value}
        renderInput={(params) => textField(params)}
      />
    )
  }

  return textField({ InputProps: name === 'phone' ? { inputComponent: PhoneMask } : null })
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
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  addRef: PropTypes.func
}

export default TextField