import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { TabPanelProps } from "@/interface/material";

import HomeIcon from '@mui/icons-material/Home';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AndroidIcon from '@mui/icons-material/Android';
import NotesIcon from '@mui/icons-material/Notes';
import MainPanel from "@/components/main/MainPanel";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}` }
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ flex: 1, height: '100%', width: '100%' }}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%', padding: '0px'}}>
          {children}
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
        <Box display="flex" height="100vh" width="100vw" bgcolor="#141414">
            <Box display="flex" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    orientation="vertical" 
                    value={value} onChange={handleTabChage} 
                    aria-label="basic tabs example"
                    sx={{
                        bgcolor: '#242424',
                        width: '100px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                    <Tab sx={{height:'80px'}} icon={<HomeIcon color="primary"/>} {...a11yProps(0)} />
                    <Tab sx={{height:'80px'}} icon={<TuneIcon color="primary"/>} {...a11yProps(1)} />
                    <Tab sx={{height:'80px'}} icon={<ShoppingCartIcon color="primary"/>} {...a11yProps(2)} />
                    <Tab sx={{height:'80px'}} icon={<SettingsIcon color="primary"/>} {...a11yProps(3)} />
                    <Tab sx={{height:'80px'}} icon={<AndroidIcon color="primary"/>} {...a11yProps(4)} />
                    <Tab sx={{height:'80px'}} icon={<NotesIcon color="primary"/>} {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index = {0}>
              <MainPanel />
            </TabPanel>
            <TabPanel value={value} index = {1}>Second page</TabPanel>
            <TabPanel value={value} index = {2}>Third page</TabPanel>
            <TabPanel value={value} index = {3}>Third page</TabPanel>
            <TabPanel value={value} index = {4}>Third page</TabPanel>
            <TabPanel value={value} index = {5}>Third page</TabPanel>
        </Box>
    )
}