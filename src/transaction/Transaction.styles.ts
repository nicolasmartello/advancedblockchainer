import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Secondary, Default } from '../../globalStyles/colors';

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
    marginBottom: '90px',
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

export const ButtonContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: Default.light,
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: '16px',
    boxShadow: `0px 0px 24px ${Secondary.ash}`,
  },
}));

export const TransactionDetail = styled('div')(({ theme }) => ({
  width: '432px',
  backgroundColor: Secondary.ash10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '24px 32px',
  height: 'auto',
  color: Secondary.darkAsh,
  'h6': {
    marginBottom: '16px',
  },
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
}));

export const DetailRow = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontSize: '16px',
  marginBottom: '16px',
  '.first-column': {
    textAlign: 'left',
  },
  '.second-column': {
    textAlign: 'right',
  },
}));

export const DetailFooter = styled('div')(() => ({
  paddingTop: '16px',
  borderTop: `1px solid ${Secondary.ash}`,
  'p': {
    margin: '0',
    padding: '0',
    fontSize: '12px',
  }
}));

export const Circle = styled('div')(() => ({
  borderRadius: '50%',
  width: '96px',
  height: '96px',
  backgroundColor: Secondary.ash40,
  marginBottom: '32px',
}));

export const FieldsRowContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  margin: '32px 0',
}));

export const CenteredContainer = styled('div')(() => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 0',
}));

export const PoolContainer = styled('div')(({ theme }) => ({
  minWidth: '70vw',
  minHeight: '50vh',
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    minHeight: '20vh',
  },
}));
