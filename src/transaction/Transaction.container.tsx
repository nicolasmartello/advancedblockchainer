import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { TabsOptions } from './Transactions.types.d';
import { TabPanelStyles, PaperStyles } from './Transactions.styles';

export default function TransactionContainer() {
  const [value, setValue] = React.useState<TabsOptions>(TabsOptions.swap);

  const handleChange = (event: unknown, newValue: TabsOptions) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '1032px', typography: 'body1' }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label={TabsOptions.swap} value={TabsOptions.swap} />
          <Tab label={TabsOptions.pool} value={TabsOptions.pool} />
        </TabList>
        <TabPanel style={TabPanelStyles} value={TabsOptions.swap}>
          <Paper style={PaperStyles} elevation={3} square>Swap container</Paper>
        </TabPanel>
        <TabPanel style={TabPanelStyles} value={TabsOptions.pool}>
          <Paper style={PaperStyles} elevation={3} square>Pool container</Paper>
        </TabPanel>
      </TabContext>
    </Box>
  );
};