import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CustomTabPanel } from './ItemTabs';
import { IOptionsRepository } from '@/data/Interfaces/IOptionsRepository';
import { useEffect, useState } from 'react';
import { Options } from '@/data/Entities/Options';
interface BasicTabsProps{
    repository: IOptionsRepository;
}
export default function BasicTabs({repository}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);
  const [options, setOptions] = useState<Options[]>([]);
  useEffect(() => {
    repository.getOptions().then((results => {
        setOptions(results);
    }));
  }, [])
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {options.map(opt => (
            <Tab label={opt.name} />
          ))}
        </Tabs>
      </Box>
        {options.map((opt, index) => (
            <CustomTabPanel value={value} index={index}>
                {opt.name}
            </CustomTabPanel>
        ))}
    </Box>
  );
}