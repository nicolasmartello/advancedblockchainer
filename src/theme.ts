import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Black } from '../globalStyles/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        // TODO: check why is not overriding the color
        selected: {
          backgroundColor: Black.ash,
        },
      },
    },
  }
});

export default theme;
