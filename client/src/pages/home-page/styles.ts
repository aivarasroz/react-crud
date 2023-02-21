import {Theme, styled, Box} from "@mui/material";


export const TeamsGrid = (theme: Theme) => ({

  display: 'grid',
  gridTemplateColumns: 'repeat(1,1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  maxWidth: theme.breakpoints.values.xl,
  margin: 'auto',
  [theme.breakpoints.up('sm')]:{
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]:{
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]:{
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

export const titlesStyle =  {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 3
}

export const titlesNumberStyle = styled(Box)(({theme}) => ({
  fontSize: '1.5rem',
  color: theme.palette.warning.main,
  fontWeight: 500,
}))