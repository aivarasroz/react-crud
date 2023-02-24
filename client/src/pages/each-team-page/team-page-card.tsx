import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import * as Styled from './styles';


type TeamPageCardProps = TeamModel;


const TeamPageCard: React.FC<TeamPageCardProps> = ({
  title,
  RosterMvps,
  titles,
}) => {
  const navigate = useNavigate();

  
  return (
    <Styled.TeamCardContent>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          <Typography sx={{ fontSize: '4rem', fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', fontSize: '2rem', fontWeight: 600 }}>
            {'Roster MVPs:'}
          </Typography>
          <Box display='flex' justifyContent= 'space-between' width= '100%'>
            <Typography display='flex' justifyContent= 'space-between' textAlign= 'center' fontSize={25}>{`${RosterMvps.starting}`}</Typography>
            <Typography display='flex' justifyContent= 'space-between' textAlign= 'center'  fontSize={25}>{`${RosterMvps.bench}`}</Typography>
          </Box>
          <Typography variant="subtitle2" paddingTop={5} fontSize={20}>
            {`Championships Won: ${titles}`}
          </Typography>
        </Box>
    </Styled.TeamCardContent>
  )
}

export default TeamPageCard