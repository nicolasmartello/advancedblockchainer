import * as React from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import TransactionContainer from '../src/transaction';
import Header from '../src/header';
import useMainContextWallet from '../src/helper/Main.context';
import { styled } from '@mui/material/styles';

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    padding: '0 8px',
  },
}));

const HomeStyles = {
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home: NextPage = () => {
  const { Provider, ...values } = useMainContextWallet();
  return (
    <Provider value={values}>
      <BoxStyled> 
        <Header />
        <TransactionContainer />
      </BoxStyled>
    </Provider>
  );
};

export default Home;
