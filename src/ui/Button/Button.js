import React from 'react'
import './Button.scss'
import { Button as ButtonUI } from '@mui/material'
import PropTypes from 'prop-types'

const Button = ({ type, onClick = () => {}, children, className, disabled = false, loading = false }) => {
  return (
    <ButtonUI
      type={type}
      variant={'contained'}
      className={`button button-default ${className}`}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ButtonUI>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

export default Button