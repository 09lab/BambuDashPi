import { Box, Typography } from '@mui/material';
import BambuLabP1S from '@/assets/images/bambu_lab_p1s.png';
import React, {useState} from 'react';

// Icons
import SpeedIcon from '@mui/icons-material/Speed';
import WifiIcon from '@mui/icons-material/Wifi';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import IconWithText from '../common/IconWithText';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CycloneIcon from '@mui/icons-material/Cyclone';
import HeatPumpIcon from '@mui/icons-material/HeatPump';

const MainDeviceStatusComponent: React.FC = () => {
    const [speed, setSpeed] = useState<'Slient' | 'Normal' | 'Sport' | 'Ludicrous'>('Normal');
    const [hms, setHms] = useState<'normal' | 'warning'>('normal');
    
    const renderSpeedIcon = () => {
        switch(speed) {

        }
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            height="100%"
            width="100%"
        >
            <Box
                flex={4}
                display="flex" justifyContent="center" alignItems="center"
            >
                <img src={BambuLabP1S}
                    style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                    alt="PrinterMainImage"
                />
            </Box>
            <Box flex={0.5}/>
            <Box
                flex={3}
                display ="flex"
                flexDirection="column"
                height="100%"
                width="100%"
                justifyContent="center" alignItems="center"
            >
                <Box flex={1} />
                <Box
                    flex={5}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                    width="100%"
                    justifyContent="center" alignItems="center"
                    bgcolor='#242424'
                    borderRadius={1}
                >
                    <Box display="flex" flex={1} flexDirection="column" justifyContent="center">
                        <Typography paddingBottom={1} color='#e4e4e4' align='center'>Printer : Bambu Lab P1S</Typography>
                        <Typography color='#e4e4e4' align='left'>IP : 192.168.0.7</Typography>
                    </Box>
                    <Box flex={1} flexDirection='row' display='flex' width='100%' height='100%'>
                        <IconWithText
                            iconVariant={<SpeedIcon sx={{ color: 'green'}}/>}
                            textInput='Speed'
                            justify='flex-start'
                        />
                        <IconWithText
                            iconVariant={<WifiIcon sx={{ color: 'white'}}/>}
                            textInput='Wi-Fi'
                            justify='flex-start'
                        />
                        <IconWithText
                            iconVariant={<WarningAmberIcon sx={{ color: 'green'}}/>}
                            textInput='HMS'
                            justify='flex-start'
                        />
                    </Box>
                </Box>
                <Box flex={1} />
            </Box>
        </Box>
    )
}

const MainPrintStatusComponent: React.FC = () => {
    return (
        <Box flex={1} flexDirection='row' display='flex' width='100%' height='100%' >
            <IconWithText
                iconVariant={<ThermostatIcon sx={{ color: 'red'}}/>}
                title='Hotend'
                textInput='30 / 210'
                justify='center'
            />
            <IconWithText
                iconVariant={<DragHandleIcon sx={{ color: 'orange'}}/>}
                title='Bed'
                textInput='70 / 80'
                justify='center'
            />
            <IconWithText
                iconVariant={<CycloneIcon sx={{ color: 'skyblue'}}/>}
                title='Part'
                textInput='ON'
                justify='center'
            />
            <IconWithText
                iconVariant={<HeatPumpIcon sx={{ color: 'skyblue'}}/>}
                title='Aux'
                textInput='ON'
                justify='center'
            />
        </Box>
    );
}
export {
    MainDeviceStatusComponent,
    MainPrintStatusComponent
};
