import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {useSnackbar} from 'notistack'

const Notification = ({ open, variant, autoHideDuration = 3000, onClose, children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  return open ? (
    enqueueSnackbar(children, {
      variant: variant,
      autoHideDuration: autoHideDuration,
      preventDuplicate: true,
      onClose: (event, reason, key) => {
        onClose(event, reason, key)
      },
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} color={'inherit'}>
          <CloseIcon fontSize={'small'} />
        </IconButton>
      )
    })
  ) : null
}

Notification.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.string,
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func,
  children: PropTypes.any
}

export default Notification
