import {Theme, styled, Box} from "@mui/material";


export const SwiperStyle = (theme: Theme) => ({
 
  [theme.breakpoints.up('sm')]: {
    width: '480px'
  },
  [theme.breakpoints.up('md')]: {
    width: '580px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '768px'
  },
});