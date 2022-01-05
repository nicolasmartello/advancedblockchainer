import React from 'react';
import Logo from '../../public/assets/logo.svg';
import Button from '@mui/material/Button';
import { HeaderContainer } from './Header.styles';
import { useMainContex } from '../helper/Main.context';

export default function HeaderComponent() {
  const { setWalletIsConnected } = useMainContex();
  return (
    <HeaderContainer>
      <Logo />
      <Button onClick={() => setWalletIsConnected(true)}>Connect wallet</Button>
    </HeaderContainer>
  );
};