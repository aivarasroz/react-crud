import { Box, TextField } from '@mui/material'
import React from 'react'

type RosterFieldProps = {
  defaultBench?: string,
  defaultStarting?: string,
}

const RosterField: React.FC<RosterFieldProps> = ({defaultBench, defaultStarting}) => (
  <Box display='flex' flexDirection='column'>
    <TextField 
      size='small'
      name='starting'
      label='Starting' 
      defaultValue={defaultStarting}
      sx={{width: '40%', pb: 1}} 
      /> 
      <TextField 
        size='small'
        name='bench'
        label='Bench'
        defaultValue={defaultBench} 
        sx={{width: '40%', pb: 1}} 
        />
    </Box>
  )


export default RosterField