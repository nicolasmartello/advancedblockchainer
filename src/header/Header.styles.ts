import { styled } from '@mui/material/styles';


export const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '25px 35px',
  position: 'fixed',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '13px',
  },
}));