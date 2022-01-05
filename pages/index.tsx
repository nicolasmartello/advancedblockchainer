import * as React from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import TransactionContainer from '../src/transaction';
import Header from '../src/header';

const HomeStyles = {
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box
        style={HomeStyles}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      > 
        <TransactionContainer />
      </Box>
    </>
  );
};

export default Home;
