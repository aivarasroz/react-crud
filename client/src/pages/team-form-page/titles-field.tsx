import { Box, Typography, Rating } from '@mui/material'
import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const TitlesField = () =>  (
  <Box sx={{gap: 2, pt: 2, display: 'flex', alignContent: 'center', justifyItems: 'center' }}>
  <Typography color='primary' fontWeight= '600'>Titles Won:</Typography>
  <Rating
    name='titles'
    icon={ <EmojiEventsIcon fontSize='large' color='secondary'  />}
    emptyIcon={<EmojiEventsIcon fontSize='large' />}
    />
  </Box>
  )


export default TitlesField