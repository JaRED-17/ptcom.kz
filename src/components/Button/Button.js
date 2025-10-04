import React from 'react'
import './Button.scss'
import {Button as ButtonUI} from '@mui/material'
import PropTypes from 'prop-types'

const Button = ({ onClick = () => {}, children, className }) => {
  return (
    <ButtonUI
      variant={'contained'}
      className={`button button-default ${className}`}
      onClick={onClick}
    >
      {children}
    </ButtonUI>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string
}

export default Button