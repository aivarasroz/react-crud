import { Box, Typography, Rating, BoxProps, Color, TypographyProps, RatingProps } from '@mui/material'
import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type TitlesFieldProps = {
  colorMain: TypographyProps['color'],
  defaultValue?: RatingProps['defaultValue']
}

const TitlesField: React.FC<TitlesFieldProps> = ({colorMain, defaultValue}) =>  (
  <Box sx={{gap: 2, pt: 2, display: 'flex', alignContent: 'center', justifyItems: 'center' }}>
  <Typography color={colorMain} fontWeight= '600'>Titles Won:</Typography>
  <Rating
    name='titles'
    defaultValue={defaultValue}
    icon={ <EmojiEventsIcon fontSize='large' color='secondary'  />}
    emptyIcon={<EmojiEventsIcon fontSize='large' />}
    />
  </Box>
  )


export default TitlesField