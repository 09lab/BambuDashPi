import React, {useState} from 'react';
import { Box, Button, ButtonGroup, LinearProgress, Typography } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import FireplaceIcon from '@mui/icons-material/Fireplace';
import HvacIcon from '@mui/icons-material/Hvac';


const buttons = [
  <Button key="one" startIcon={<PlayArrowIcon />}>Start</Button>,
  <Button key="two" startIcon={<PauseIcon />}>Pause</Button>,
  <Button key="three" startIcon={<StopIcon />}>Stop</Button>,
];

const MainPrintControlComponent: React.FC = () => {

    return (
        <Box
            display="flex" justifyContent="center" alignItems="center"
            height="100%"
            width="100%"
            flexDirection='column'
        >
            <Box
                flex={6}
                width='100%'
                height='100%'
                display="flex" justifyContent="center" alignItems="center"
                flexDirection='column'
            >
                <Box
                    display="flex" justifyContent="center" alignItems="end"
                    height="100%"
                    width="100%"
                    flexDirection='row'
                >
                    <Box flex={1}><Typography color='#e4e4e4' align='center'>32%</Typography></Box>
                    <Box flex={1}><Typography color='#e4e4e4' align='center'>Test_print.3mf</Typography></Box>
                    <Box flex={1}><Typography color='#e4e4e4' align='center'>55/142</Typography></Box>
                </Box>       
                <Box 
                    display="flex" justifyContent="center" alignItems="center"
                    height="100%"
                    width="100%"
                >
                    <LinearProgress value={23} sx={{ width: '75%', height: 5, margin: 1}}/>
                </Box>
            </Box>
            <Box flex={4} >
                <ButtonGroup
                    variant="contained"
                >
                    {buttons}
                </ButtonGroup>
            </Box>
        </Box>
    );
};

export default MainPrintControlComponent;