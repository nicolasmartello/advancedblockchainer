import { styled } from '@mui/material/styles';
import { Default } from './colors';

export const Header6 = styled('h6')(({ theme }) => ({
  fontSize: '24px',
  color: Default.dark,
  margin: '0',
  fontWeight: 'normal',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));