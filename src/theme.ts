import { createTheme } from '@mui/material/styles';
import { Secondary, Primary, Alert, Default } from '../globalStyles/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Konnect', 'arial'].join(','),
  },
  palette: {
    primary: {
      main: Primary.blue,
    },
    secondary: {
      main: Secondary.ash,
    },
    error: {
      main: Alert.red,
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          '.MuiTabs-indicator': {
            backgroundColor: Secondary.blackAsh,
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: Secondary.ash20,
          color: Secondary.ash,
          textTransform: 'inherit',
          '&.Mui-selected': {
            backgroundColor: Secondary.blackAsh,
            color: Default.light,
          },
        },
      },
    },
  }
});

export default theme;
