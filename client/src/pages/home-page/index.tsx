import React from 'react';
import { Box, Button, Container } from '@mui/material';
import ApiService from 'services/api-service';
import { TeamsGrid } from './styles';
import TeamCard from './team-card';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { textAlign } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

const HomePage = () => {
  const [teams, setTeams] = React.useState<TeamModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
  (async () => {
    const fetchedTeams = await ApiService.fetchTeams();
    setTeams(fetchedTeams);
  })();
  }, []);
  
  return (
  <Container sx={{ my: 2 }}>
      <Button variant='contained'
       sx={{display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       gap: 1}}
       onClick={() => navigate(routes.TeamFormPage)}
       >
        Add new Team
        <AddCircleOutlineIcon />
      </Button>
    <Box sx={TeamsGrid}>
      {
        teams.map(( teamProps) => (<TeamCard key={teamProps.id} {...teamProps}></TeamCard>))
      }
    </Box>
  </Container>
);
  }
export default HomePage;
