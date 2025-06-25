import { Box, Card } from '@mui/material';
import MainPrintControlComponent from './MainControlComponent';
import {MainDeviceStatusComponent, MainPrintStatusComponent} from './MainStatusComponent';

const MainStatusCard = () => {
    return (
        <MainDeviceStatusComponent />
    );
};

const MainControlCard = () => {
    return (
        <Card 
            sx={{ 
                width: "100%",
                height: "100%",
            bgcolor: "#242424",
            display: "flex",
            flexDirection: "row",
        }}>
            <Box
                flex={6}
            >
                <MainPrintControlComponent />
            </Box>
            <Box
                flex={4}
            >
                <MainPrintStatusComponent />
            </Box>
        </Card>
    );
};

export {
    MainStatusCard,
    MainControlCard
};