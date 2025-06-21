import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { TabPanelProps } from "@/interface/material";

import HomeIcon from '@mui/icons-material/Home';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AndroidIcon from '@mui/icons-material/Android';
import NotesIcon from '@mui/icons-material/Notes';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainPage() {
    const [value, setValue] = React.useState(0);

    const handleTabChage = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Box display="flex" height="100vh" width="100vw">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    orientation="vertical" 
                    value={value} onChange={handleTabChage} 
                    aria-label="basic tabs example"
                    sx={{
                        height: '100vh'
                    }}
                    >
                    <Tab icon={<HomeIcon />} {...a11yProps(0)} />
                    <Tab icon={<TuneIcon />} {...a11yProps(1)} />
                    <Tab icon={<ShoppingCartIcon />} {...a11yProps(2)} />
                    <Tab icon={<SettingsIcon />} {...a11yProps(3)} />
                    <Tab icon={<AndroidIcon />} {...a11yProps(4)} />
                    <Tab icon={<NotesIcon />} {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index = {0}>First page</TabPanel>
            <TabPanel value={value} index = {1}>Second page</TabPanel>
            <TabPanel value={value} index = {2}>Third page</TabPanel>
            <TabPanel value={value} index = {3}>Third page</TabPanel>
            <TabPanel value={value} index = {4}>Third page</TabPanel>
            <TabPanel value={value} index = {5}>Third page</TabPanel>
        </Box>
    )
}