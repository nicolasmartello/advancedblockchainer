import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ResponsiveBlock, TransactionDetail, TransactionSwapWrapper, ButtonStyles } from './Transaction.styles';
import { Header6 } from '../../globalStyles/headers.styles';
import blockChains, { BlockChainsType } from '../data/blockchains';

export default function TransactionSwapContainer() {
  return (
    <ResponsiveBlock>
      <TransactionSwapWrapper>
        <Header6>Select a token to start swapping</Header6>
        <TextField
          id="swap-select"
          select
          label="From"
          defaultValue="Select"
          onChange={() => {}}
        >
          {blockChains.map((option: BlockChainsType, index: number) => (
            <MenuItem key={option.name} value={index}>
              {option.svg}
              <span>{option.name}</span>
            </MenuItem>
          ))}
        </TextField>
        <ButtonStyles disabled >Swap</ButtonStyles>
      </TransactionSwapWrapper>
      <TransactionDetail>
        <Header6>Transaction details</Header6>
      </TransactionDetail>
    </ResponsiveBlock>
  );
};