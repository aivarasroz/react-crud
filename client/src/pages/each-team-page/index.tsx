import React, { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const EachTeamPage = () => {
  const { id } = useParams();
  const [team, setTeam] = React.useState<undefined | TeamModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedTeam = await ApiService.fetchTeam(id);
        setTeam(fetchedTeam);
      })();
   
    }

  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage}/>;


  return (
    <Box component="pre">
      {JSON.stringify(team, null, 4)}
    </Box>
  )
}

export default EachTeamPage