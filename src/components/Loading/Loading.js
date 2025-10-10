import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        width: '100%',
        flexDirection: 'column'
      }}
    >
      <CircularProgress sx={{ color: '#fe5e00' }} size={40} thickness={4} />
    </Box>
  )
}

export default Loading