import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import Img from 'components/ui/img';
import { titlesNumberStyle, titlesStyle } from './styles';
import * as Styled from './styles'


type TeamCardProps = TeamModel;

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  RosterMvps,
  images,
  titles,
}) => (   
  <Stack sx={{boxShadow: 4, padding: 2,}}>
    <Img src={images[0]} sx={{ aspectRatio: '0.9', width: '1', objectFit: 'fill'}} />
    <Stack sx={{ flexGrow: 1, width: 1, p: 2, pt: 1}}>
      <Box sx={{ flexGrow: 1}}>
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600, mt: 2}}>{title}</Typography>
        <Box sx={titlesStyle}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 600}}>Titles Won</Typography>
          <Styled.titlesNumberStyle>{titles}"</Styled.titlesNumberStyle>
        </Box>
        <Typography variant='h6' color='primary'>Roster MVP's:</Typography>
        <Box sx={titlesStyle}>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color='success.main'>{RosterMvps.starting}</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color='error.main'>{RosterMvps.bench}</Typography>
        </Box>
      </Box>
      <Button color='primary' variant="contained" sx={{ mt: 3}}>HighLights</Button>
    </Stack>
  </Stack> 
)


export default TeamCard