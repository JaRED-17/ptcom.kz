import React from 'react'
import './TextField.scss'
import {TextField as TextFieldUI} from '@mui/material'
import PropTypes from 'prop-types'

const TextField = ({ label, name, value, onChange = () => {}, required, fullWidth = true, rows, children }) => {
  return (
    <TextFieldUI
      className={`input input-default`}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth={fullWidth}
      rows={rows}
    >
      {children}
    </TextFieldUI>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rows: PropTypes.number,
  children: PropTypes.any
}

export default TextField