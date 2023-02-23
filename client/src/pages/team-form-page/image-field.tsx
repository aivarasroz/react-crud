import { 
  Box,
  IconButton, 
  InputAdornment, 
  Stack, 
  TextField, 
  Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';



const ImageField = () => (
    <Box sx={{width: 1}}>
          <Typography component='legend' color='primary' sx={{p: 2}}> Add Highlight Images</Typography>
          <Stack sx={{ gap: 1}}>
            <TextField
              label='Logo image'
              fullWidth
              variant='filled'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position= 'end'>
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label='starting MVP image...'
              fullWidth
              variant='filled'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position= 'end'>
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label='benched MVP image'
              fullWidth
              variant='filled'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position= 'end'>
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack> 
          </Box>
  )


export default ImageField