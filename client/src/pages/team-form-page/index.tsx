import React from 'react';
import { Box, Typography, Paper, TextField} from '@mui/material'
import { Stack } from '@mui/system';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const TeamFormPage = () =>  (
    <Stack sx={{
      py: { xs: 2, md: 4, lg: 6},
      px: 2,
      alignItems: 'center'
    }}>
      <Paper 
      component='form' 
      elevation={6} 
      sx={{p: 3,
       width: (theme) => ({  xs: 1, sm: theme.breakpoints.values.sm})}}
       >
        <Typography color= 'primary' sx={{ textAlign: 'center', fontSize: 23, pb: 2, fontWeight: 500}}>Add new team</Typography>
        <TextField label='Team Name' fullWidth sx={{ alignContent: 'center'}}></TextField>
        <Box>
          <Typography  color='primary' sx={{p: 2, alignItems: 'center', justifyContent: 'center'}}><MilitaryTechIcon color='warning' fontSize='medium' />Roster MVP's </Typography>
          <Box display='flex' flexDirection='column'>
            <TextField label='Starting' sx={{width: '40%', pb: 2}} /> 
            <TextField label='Bench' sx={{width: '40%', pb: 2}} />
          </Box>
        </Box>
      </Paper>
    </Stack>
  );


export default TeamFormPage