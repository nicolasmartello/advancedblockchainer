import { Secondary, Default } from '../../globalStyles/colors';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

export const TabStyles = styled(Tab)(({ theme }) => ({
  width: '300px',
  [theme.breakpoints.down('md')]: {
    width: '50%',
  },
}));

export const ButtonStyles = styled(Button)(({ theme }) => ({
  width: '100%',
}));

export const TabPanelStyles = {
  padding: '0',
  backgroundColor: Secondary.ash,
};

export const PaperStyles = {
  boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.1)',
};

export const ResponsiveBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const TransactionSwapWrapper = styled('div')(({ theme }) => ({
  width: '600px',
  padding: '48px 32px',
  backgroundColor: Default.light,
  [theme.breakpoints.down('md')]: {
    width: 'auto',
    padding: '24px 16px',
  },
}));

export const TransactionDetail = styled('div')(({ theme }) => ({
  width: '432px',
  backgroundColor: Secondary.ash10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
}));
