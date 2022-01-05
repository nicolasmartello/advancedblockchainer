import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
  ResponsiveBlock,
  TransactionDetail,
  TransactionSwapWrapper,
  ButtonContainer,
  ButtonStyles,
  FieldsRowContainer,
  CenteredContainer,
  Circle,
  DetailFooter,
  DetailRow,
} from './Transaction.styles';
import { Secondary } from '../../globalStyles/colors';
import { Header6 } from '../../globalStyles/headers.styles';
import blockChains, { BlockChainsType } from '../data/blockchains';
import { useMainContex } from '../helper/Main.context';

export default function TransactionSwapContainer() {
  const { walletIsConnected } = useMainContex();
  const MenuItems = blockChains.map((option: BlockChainsType, index: number) => (
    <MenuItem key={option.name} value={index}>
      {option.svg}
      <span>{option.name}</span>
    </MenuItem>
  ));

  return (
    <ResponsiveBlock>
      <TransactionSwapWrapper>
        <Header6>Select a token to start swapping</Header6>
        <FieldsRowContainer>
          <TextField
            id="swap-select"
            select
            label="From"
            defaultValue="Select"
            onChange={() => {}}
            style={{
              flexGrow: '1'
            }}
          >
            {MenuItems}
          </TextField>
          <TextField
            label="Amount"
            defaultValue="0.0"
            helperText="Max to use all your funds"
            style={{
              flexGrow: '2'
            }}
            disabled={!walletIsConnected}
          />
        </FieldsRowContainer>
        <CenteredContainer>
          <Button className="secondary">
            <SwapVertIcon />
          </Button>
        </CenteredContainer>
        <FieldsRowContainer>
          <TextField
            id="swap-select"
            select
            label="To"
            defaultValue="Select"
            onChange={() => {}}
            style={{
              flexGrow: '1'
            }}
          >
            {MenuItems}
          </TextField>
          <TextField
            label="Amount"
            defaultValue="0.0"
            helperText="Max to use all your funds"
            style={{
              flexGrow: '2'
            }}
            disabled={!walletIsConnected}
          />
        </FieldsRowContainer>
        <ButtonContainer><ButtonStyles disabled={!walletIsConnected} >Swap</ButtonStyles></ButtonContainer>
      </TransactionSwapWrapper>
      <TransactionDetail>
        <Circle />
        <Header6>Transaction details</Header6>
        <DetailRow>
          <span className="first-column">Liquidity Provider Fee</span>
          <span className="second-column">0.0000005 ETH</span>
        </DetailRow>
        <DetailRow>
          <span className="first-column">Price Impact</span>
          <span className="second-column">0.00%</span>
        </DetailRow>
        <DetailRow>
          <span className="first-column">Allowed Slippage</span>
          <span className="second-column">0.50%</span>
        </DetailRow>
        <DetailRow>
          <span className="first-column">Minimum Received</span>
          <span className="second-column">99.98 AVAX</span>
        </DetailRow>
        <DetailFooter>
          <p>Outpout is estimated. You will receive at least <strong>99.95 AVAX</strong> or the transaction will revert</p>
        </DetailFooter>
      </TransactionDetail>
    </ResponsiveBlock>
  );
};