import React from 'react';
import Logo from '../../public/assets/logo.svg';
import Button from '@mui/material/Button';
import { HeaderContainer } from './Header.styles';

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <Logo />
      <Button>Connect wallet</Button>
    </HeaderContainer>
  );
};