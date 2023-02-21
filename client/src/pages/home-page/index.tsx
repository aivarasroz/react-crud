import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'services/api-service';
import { TeamsGrid } from './styles';
import TeamCard from './team-card';

const HomePage = () => {
  const [teams, setTeams] = React.useState<TeamModel[]>([]);

  React.useEffect(() => {
  (async () => {
    const fetchedTeams = await ApiService.fetchTeams();
    setTeams(fetchedTeams);
  })();
  }, []);
  
  return (
  <Container sx={{ my: 6 }}>
    <Box sx={TeamsGrid}>
      {
        teams.map(( teamProps) => (<TeamCard key={teamProps.id} {...teamProps}></TeamCard>))
      }
    </Box>
  </Container>
);
  }
export default HomePage;
