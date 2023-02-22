import { createTheme } from '@mui/material';
import { teal, yellow } from '@mui/material/colors';

const theme = createTheme({
  zIndex: {
    appBar: 1201,
  },
  palette: {
    primary: teal,
    secondary: yellow,
  },
},
);

export default theme;
