import React from 'react';
import { Box, Typography, Paper, TextField, Button} from '@mui/material'
import { Stack } from '@mui/material';
import RosterField from './roster-field';
import ImageField from './image-field';
import TitlesField from './titles-field';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import { getTeamFormValues } from './helpers';
import ApiService from 'services/api-service';
import { useNavigate, useParams } from 'react-router-dom';
import useTeam from 'hooks/use-team';
import routes from 'navigation/routes';
import { getData } from './data';



const TeamFormPage = () =>  {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const [team, loadingTeamData] = useTeam(id);
  const {
    title,
    btnText,
    color,
    colorMain
  } = getData(id !== undefined ? 'edit' : 'create');
  
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const values = getTeamFormValues(formRef.current);
  
      await ApiService.createTeam(values);
      console.log('Team created successfully!');
  
      navigate(routes.HomePage);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  if (loadingTeamData) return null;

  console.log('Adding new Team...');
  console.log(team);


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
        color={colorMain}
          sx={{ 
            textAlign: 'center', 
            fontSize: 23, pb: 2, 
            fontWeight: 500}}
            >
            {title}
            </Typography>
        <TextField
          size='small'
          name='team' 
          label='Team Name' 
          fullWidth
          defaultValue={team?.title} 
          sx={{ alignContent: 'center'}}
          >
          </TextField>
        <Box>
          <Typography  
            color={color}
            sx={{
              p: 2, 
              display: 'flex', 
              alignItems: 'center'}}><MilitaryTechIcon color={color} fontSize='large' />Roster MVP's </Typography>
          <RosterField defaultBench={team?.RosterMvps.bench} defaultStarting={team?.RosterMvps.starting} />
          <ImageField 
          colorMain={colorMain}
          color={color}
          defaultImages={team?.images} />
          <TitlesField
             colorMain={colorMain}
             defaultValue={team?.titles} />
          <Button 
            color={color}
            variant='contained'  
            size='large' 
            fullWidth sx={{
              mt: 2}}
            type='submit'
            >
              {btnText}</Button>
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
