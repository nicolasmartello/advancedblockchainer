import * as React from 'react';
import { ResponsiveBlock, TransactionDetail, TransactionSwapWrapper, ButtonStyles } from './Transaction.styles';
import { Header6 } from '../../globalStyles/headers.styles';
import Input from '@mui/material/Input';

export default function TransactionSwapContainer() {
  return (
    <ResponsiveBlock>
      <TransactionSwapWrapper>
        <Header6>Select a token to start swapping</Header6>
        <Input defaultValue={0} />
        <Input defaultValue={0} disabled />
        <ButtonStyles>Swap</ButtonStyles>
      </TransactionSwapWrapper>
      <TransactionDetail>
        <Header6>Transaction details</Header6>
      </TransactionDetail>
    </ResponsiveBlock>
  );
};