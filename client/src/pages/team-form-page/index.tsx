import React from 'react';
import { Box, Typography, Paper, TextField, Button} from '@mui/material'
import { Stack, Rating } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RosterField from './roster-field';
import ImageField from './image-field';
import TitlesField from './titles-field';

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
        <Typography 
          color= 'primary' 
          sx={{ 
            textAlign: 'center', 
            fontSize: 23, pb: 2, 
            fontWeight: 500}}
            >
            Add new team
            </Typography>
        <TextField
          size='small' 
          label='Team Name' 
          fullWidth 
          sx={{ alignContent: 'center'}}
          >
          </TextField>
        <Box>
          <Typography  
            color='primary' 
            sx={{
              p: 2, 
              display: 'flex', 
              alignItems: 'center'}}><MilitaryTechIcon color='warning' fontSize='large' />Roster MVP's </Typography>
          <RosterField />
          <ImageField />
          <TitlesField />
          <Button 
            variant='contained' 
            color='primary' 
            size='large' 
            fullWidth sx={{mt: 2}}>Add New Team</Button>
        </Box>
      </Paper>
    </Stack>
  );


export default TeamFormPage