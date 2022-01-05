import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabsOptions } from './Transaction.types.d';
import { TabPanelStyles, TabStyles } from './Transaction.styles';

type TransactionTabsProps = {
  swapChildren: React.ReactElement;
  poolChildren: React.ReactElement;
};

export default function TransactionTabs({
  swapChildren,
  poolChildren,
}: TransactionTabsProps) {
  const [value, setValue] = useState<TabsOptions>(TabsOptions.swap);

  const handleChange = (event: unknown, newValue: TabsOptions) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>
        <TabStyles label={TabsOptions.swap} value={TabsOptions.swap} />
        <TabStyles label={TabsOptions.pool} value={TabsOptions.pool} />
      </TabList>
      <TabPanel style={TabPanelStyles} value={TabsOptions.swap}>
        {swapChildren}
      </TabPanel>
      <TabPanel style={TabPanelStyles} value={TabsOptions.pool}>
        {poolChildren}
      </TabPanel>
    </TabContext>
  );
};