import React, {useState} from 'react'
import './TextField.scss'
import {TextField as TextFieldUI} from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import PropTypes from 'prop-types'

const TextField = ({
  label,
  name,
  type,
  value,
  onChange = () => {},
  required,
  fullWidth = true,
  multiline = false,
  minWidth = 1,
  maxWidth,
  rows,
  children
}) => {
  const [error, setError] = useState({
    errorCode: '',
    replacements: {}
  })

  const onBlur = (e) => {
    const val = e.target.value;

    if (val.length === 0 && required) {
      setError({
        ...error,
        errorCode: 'mandatory'
      })
    } else if (val.length < minWidth) {
      setError({
        errorCode: 'minWidth',
        replacements: {
          'amount': minWidth
        }
      })
    } else if (maxWidth && val.length > maxWidth) {
      setError({
        errorCode: 'maxWidth',
        replacements: {
          'amount': maxWidth
        }
      })
    } else {
      setError({
        errorCode: '',
        replacements: {}
      })
    }
  }

  return (
    <TextFieldUI
      className={`input input-default`}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      fullWidth={fullWidth}
      multiline={multiline}
      error={!!error.errorCode}
      helperText={!!error.errorCode ? <ErrorMessage code={error.errorCode} replacements={error.replacements} /> : ''}
      rows={rows}
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
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  rows: PropTypes.number,
  children: PropTypes.any
}

export default TextField