import { 
  Box,
  IconButton, 
  InputAdornment, 
  Stack, 
  TextField, 
  Typography } from '@mui/material';
import React from 'react';
import createId from 'uniqid'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';




const initalIds = [createId()];

const ImageField = () => {

  const [imgFields, setImgFields] = React.useState<string[]>(initalIds);
  const addImgField = () => setImgFields([...imgFields, createId()]);
  const delImgField = (id: string) => {
    if(imgFields.length > 1){
      setImgFields(imgFields.filter((imgId) => imgId !== id));
    }
  }
  
  return (
    <Box sx={{width: 1}}>
          <Box display='flex' alignItems='center'>
            <IconButton onClick={addImgField}>
              <AddBoxIcon fontSize='large' color='primary' />
            </IconButton>
            <Typography component='legend' color='primary' sx={{p: 1}}> Add New Image</Typography>
          </Box>
          <Stack sx={{ gap: 1}}>
            {imgFields.map((id) => (  
              <TextField
              key={id}
              label='New image'
              fullWidth
              variant='filled'
              size='small'
              InputProps={imgFields.length > 1 ? {
                endAdornment: (
                  <InputAdornment position= 'end'>
                    <IconButton onClick={() => delImgField(id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }: undefined}
              />
              ))
            }
          </Stack> 
        </Box>
      )
      }

  
  export default ImageField