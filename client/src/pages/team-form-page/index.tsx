import React from 'react';
import { Box, Typography, Paper, TextField, Button} from '@mui/material'
import { Stack } from '@mui/material';
import RosterField from './roster-field';
import ImageField from './image-field';
import TitlesField from './titles-field';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import { getTeamFormValues } from './helpers';
import ApiService from 'services/api-service';
import { useNavigate } from 'react-router-dom';



const TeamFormPage = () =>  {

  const navigate = useNavigate();

  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const values = getTeamFormValues(formRef.current);
      console.log('Adding new Team...');
      console.log(values);
  
      await ApiService.createTeam(values);
      console.log('Team created successfully!');
  
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  return (
    <Stack sx={{
      py: { xs: 2, md: 4, lg: 6},
      px: 2,
      alignItems: 'center'
    }}>
      <Paper elevation={6} >
        <Stack
        component='form'
        onSubmit={handleSubmit}
        ref={formRef}
        sx={{p: 3,
          width: (theme: { breakpoints: { values: { sm: any; }; }; }) => ({  xs: 1, sm: theme.breakpoints.values.sm})}} >
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
          name='team' 
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
            fullWidth sx={{mt: 2}}
            type='submit'
            >
              Add New Team</Button>
        </Box>
      </Stack>
      </Paper>
    </Stack>
  );
}
  
  
  export default TeamFormPage

function getHouseFormValues(current: HTMLFormElement | undefined) {
  throw new Error('Function not implemented.');
}
