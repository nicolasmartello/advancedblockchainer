import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { PaperStyles, PoolContainer } from './Transaction.styles';
import TransactionTabs from './Transaction.tabs.component';
import TransactionSwapContainer from './Transaction.swap.container';

export default function TransactionContainer() {

  return (
    <Box sx={{ maxWidth: '1032px' }}>
      <TransactionTabs
        swapChildren={<Paper style={PaperStyles} elevation={3} square><TransactionSwapContainer /></Paper>}
        poolChildren={<Paper style={PaperStyles} elevation={3} square><PoolContainer /></Paper>}
      />
    </Box>
  );
};