import { 
  Box,
  IconButton, 
  IconButtonProps, 
  InputAdornment, 
  PropTypes, 
  Stack, 
  TextField, Typography, 
  TypographyProps} from '@mui/material';
import React from 'react';
import createId from 'uniqid'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';

type ImageFieldProps = {
  color: TypographyProps['color'],
  colorMain: string,
  defaultImages?: string[],
}


const initalIds = [createId()];

const ImageField: React.FC<ImageFieldProps> = ({color, colorMain, defaultImages}) => {
  const imgMap = React.useMemo(() => defaultImages && defaultImages.reduce<{[key: string]: string}>((prevMap, img) => ({
    ...prevMap,
    [createId()]: img,
  }), {}), [defaultImages])

  const [imgFields, setImgFields] = React.useState<string[]>(imgMap && Object.keys(imgMap) || initalIds);
  const addImgField = () => setImgFields([...imgFields, createId()]);
  const delImgField = (id: string) => {
    if(imgFields.length > 1){
      setImgFields(imgFields.filter((imgId) => imgId !== id));
    }
  };
  
  return (
    <Box sx={{width: 1}}>
          <Box display='flex' alignItems='center'>
            <IconButton onClick={addImgField}>
              <AddBoxIcon sx={{ fontSize: 40, color: colorMain}}
               />
            </IconButton>
            <Typography color={colorMain} component='legend' sx={{p: 1}}> Add New Image</Typography>
          </Box>
          <Stack sx={{ gap: 1}}>
            {imgFields.map((id) => (  
              <TextField
              key={id}
              label='New image'
              name='images'
              fullWidth
              variant='filled'
              size='small'
              defaultValue={imgMap && imgMap[id]}
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