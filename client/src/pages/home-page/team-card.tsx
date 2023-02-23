import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import Img from 'components/ui/img';
import { titlesStyle } from './styles';
import * as Styled from './styles'
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


type TeamCardProps = TeamModel;

const TeamCard: React.FC<TeamCardProps> = ({
  id,
  title,
  RosterMvps,
  images,
  titles,
}) => {
  const navigate= useNavigate();
  
 return (   
  <Stack sx={{boxShadow: 6,}}>
    <Img src={images[0]} sx={{ aspectRatio: '1', width: '100%', objectFit: 'cover'}} />
    <Stack sx={{ flexGrow: 1, width: 1, p: 2, pt: 1}}>
      <Box sx={{ flexGrow: 1}}>
        <Typography sx={{textAlign: 'center', fontWeight: 600, fontSize: 27 }}>{title}</Typography>
        <Box sx={titlesStyle}>
          <Typography sx={{ fontSize: '1.0rem', fontWeight: 600}}>Titles Won :</Typography>
          <Styled.titlesNumberStyle>{titles}"</Styled.titlesNumberStyle>
        </Box>
        <Typography variant='h6' color='primary' sx={{textAlign: 'center'}}>Roster MVP's:</Typography>
        <Box sx={titlesStyle}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, pb: 2 }}>{RosterMvps.starting}</Typography>
        <Typography sx={{ fontSize: 20, fontWeight: 600, pb: 2 }}>{RosterMvps.bench}</Typography>
        </Box>
      </Box>
      <Styled.ActionButtons>
        <Button
          variant="contained"
          color="warning"
          size="small"
          fullWidth
          onClick={() => navigate(routes.UpdateTeamPage.createLink(id))}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          fullWidth
        >    <DeleteIcon />
        </Button>
    </Styled.ActionButtons>
      <Button
       color='primary'
       variant="contained" 
       sx={{ mt: 1}}
       onClick={() => navigate(routes.EachTeamPage.createLink(id))}>HighLights</Button>
    </Stack>
  </Stack> 
)
} 


export default TeamCard