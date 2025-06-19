// WifiSelectPage.tsx
import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography, Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';
import ConfigWifiDialog from '@/components/ConfigWifiDialog';
import { ScanWifiData } from '@/interface/response';

const WifiSelectPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSsid, setSelectedSsid] = useState('');
  const [selectedSecure, setSelectedSecured] = useState(false);

  const wifiInfo: ScanWifiData[] = [
    { ssid: 'HomeNetwork', signalStrength: -40, secure: true },
    { ssid: 'RoomNetwork', signalStrength: -60, secure: true },
    { ssid: '09LabsNetwork', signalStrength: -50, secure: false },
    { ssid: 'OpenNetwork', signalStrength: -90, secure: false }
  ];

  const handleOnClickListItem = (ssid: string, secure: boolean) => {
    setSelectedSsid(ssid);
    setSelectedSecured(secure);
    setDialogOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      height="100vh"
      width="100vw"
    >
      {/* 좌측 영역 */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#242424"
      >
        <Typography variant="h5" textAlign="center" color='#e4e4e4'>
          Please select Wi-Fi SSID
        </Typography>
      </Box>

      {/* 우측 영역 */}
      <Box bgcolor="#242424" flex={1} display="flex" flexDirection="column">
        {/* SSID 리스트 (상단 80%) */}
        <Typography
          variant='h5' textAlign="center" color='#e4e4e4'
          sx={{ padding: "20px" }}
        >Network List</Typography>
        <Box bgcolor="#242424" flex={8} overflow="auto" p={2}>
          <Paper elevation={3}>
            <List>
              {wifiInfo.map((wifi, index) => (
                <ListItem key={index} secondaryAction={
                  <Box display="flex" alignItems="center" gap={1}>
                    {wifi.secure && <LockIcon />}
                    <WifiIcon />
                  </Box>
                }>
                  <ListItemButton onClick={() => handleOnClickListItem(wifi.ssid, wifi.secure)}>
                    <ListItemText primary={wifi.ssid} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* 버튼 영역 (하단 20%) */}
        <Box flex={2} display="flex" justifyContent="space-evenly" alignItems="center" p={2}>
          <Button variant="contained" color="primary">
            Refresh
          </Button>
          <Button variant="outlined" color="secondary">
            Back
          </Button>
        </Box>
      </Box>
      <ConfigWifiDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        ssid={selectedSsid}
        isSecured={selectedSecure}
      />
    </Box>
  );
};

export default WifiSelectPage;
