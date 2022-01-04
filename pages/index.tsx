import * as React from 'react';
import type { NextPage } from 'next';
import Paper from '@mui/material/Paper';
import Image from '../assets/background.jpg';

const HomeStyles = {
  backgroundImage: `url(/assets/images/background.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};

const Home: NextPage = () => {
  return (
    <div style={HomeStyles}>
      <span>hello world</span>
    </div>
  );
};

export default Home;
