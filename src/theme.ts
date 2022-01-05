import { createTheme } from '@mui/material/styles';
import { Secondary, Primary, Alert, Default } from '../globalStyles/colors';

let theme = createTheme();

// Create a theme instance.
theme = createTheme(theme, {
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
          fontSize: '20px',
          '&.Mui-selected': {
            backgroundColor: Secondary.blackAsh,
            color: Default.light,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            borderRadius: 'unset',
          },
          'input': {
            backgroundColor: 'transparent',
            padding: '8px 16px',
            borderRadius: 'none',
            border: `1px solid ${Secondary.ash}`,
            fontSize: '20px',
            color: Secondary.darkAsh,
            '&.Mui-disabled': {
              backgroundColor: Secondary.ash20,
              color: Secondary.ash,
              '&::before': {
                borderBottomStyle: 'none',
              },
            },
            '&::before': {
              borderBottom: 'none',
              borderBottomStyle: 'none',
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '18px 32px',
          fontSize: '20px',
          color: Default.light,
          backgroundColor: Primary.blue,
          borderRadius: '0',
          textTransform: 'inherit',
          '&:hover': {
            backgroundColor: Primary.blue20,
            color: Primary.blue,
          },
          '&:disabled': {
            backgroundColor: Secondary.ash,
            color: Secondary.darkAsh,
          },
          [theme.breakpoints.down('md')]: {
            padding: '13px 10px',
            fontSize: '16px',
          },
        },
      },
    },
  },
});

export default theme;
