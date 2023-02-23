import { createTheme } from '@mui/material';
import { purple, teal, yellow } from '@mui/material/colors';

const theme = createTheme({
  zIndex: {
    appBar: 1201,
  },
  palette: {
    primary: teal,
    secondary: purple,
  },
},
);

export default theme;
