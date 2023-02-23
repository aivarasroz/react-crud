import { Box, TextField } from '@mui/material'
import React from 'react'

const RosterField = () => (
  <Box display='flex' flexDirection='column'>
    <TextField 
      size='small'
      name='starting'
      label='Starting' 
      sx={{width: '40%', pb: 1}} 
      /> 
      <TextField 
        size='small'
        name='bench'
        label='Bench' 
        sx={{width: '40%', pb: 1}} 
        />
    </Box>
  )


export default RosterField