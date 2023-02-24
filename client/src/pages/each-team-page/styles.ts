import {Theme, styled, Box, Stack} from "@mui/material";


export const TeamCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 3,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Courier New, monospace',
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '100%',
  },
}));

export const SwiperStyle = (theme: Theme) => ({
  [theme.breakpoints.up('sm')]: {
    width: '480px'
  },
  [theme.breakpoints.up('md')]: {
    width: '580px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '850px'
  },
});