import React, { useEffect, useRef, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'
import ErrorMessage from '../../components/ErrorMessage'
import validate from '../../helpers/validate'
import PropTypes from 'prop-types'
import Markdown from '../../components/Markdown'

const CustomCheckbox = ({
  label,
  name,
  disabled = false,
  mandatory = false,
  addRef = () => {}
}) => {
  const inputRef = useRef(null)
  const [error, setError] = useState({
    errorCode: '',
    replacements: {}
  })
  const [value, setValue] = useState(false)

  useEffect(() => {
    inputRef.current.validateField = validateField
    inputRef.current.clear = () => {
      setError({
        errorCode: '',
        replacements: {}
      })
      setValue(false)
    }
    addRef(name, inputRef)
  }, [])

  const validateField = () => {
    const validation = validate[name](inputRef.current.checked)

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
    <FormGroup className={'input input-default'}>
      <FormControlLabel
        control={<Checkbox inputRef={inputRef} disabled={disabled} checked={value} onChange={(e) => {
          setValue(e.target.checked)
          validateField(e.target.checked)
        }} />}
        label={<Markdown childrenClassName={{ target: 'link', className: 'orange-link' }} text={mandatory ? `${label}*` : label} params={{ target: '_blank' }} />}
      />
      {error.errorCode ? (
        <FormHelperText error>
          <ErrorMessage code={error.errorCode} replacements={error.replacements} />
        </FormHelperText>
      ) : null}
    </FormGroup>
  )
}

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  mandatory: PropTypes.bool,
  addRef: PropTypes.func
}

export default CustomCheckbox