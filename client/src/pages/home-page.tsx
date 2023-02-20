import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'services/api-service';

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
    <Box component="pre">{JSON.stringify(teams, null, 4)}</Box>
  </Container>
);
  }
export default HomePage;
