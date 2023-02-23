import { Box, TextField } from '@mui/material'
import React from 'react'

const RosterField = () => (
  <Box display='flex' flexDirection='column'>
    <TextField 
      size='small'
      label='Starting' 
      sx={{width: '40%', pb: 1}} 
      /> 
      <TextField 
        size='small'
        label='Bench' 
        sx={{width: '40%', pb: 1}} 
        />
    </Box>
  )


export default RosterField