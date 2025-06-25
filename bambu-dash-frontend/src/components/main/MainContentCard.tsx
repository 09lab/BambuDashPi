import { Box, Card, Typography } from '@mui/material';
import BambuLabP1S from '@/assets/images/bambu_lab_p1s.png';
import MainControlComponent from './MainControlComponent';

const MainStatusCard = () => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            height="100%"
            width="100%"
        >
            <Box
                flex={5}
                display="flex" justifyContent="center" alignItems="center"
            >
                <img src={BambuLabP1S}
                    style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                />
            </Box>
            <Box
                flex={5}
            >
                what
            </Box>
        </Box>
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
                <MainControlComponent />
            </Box>
            <Box
                flex={4}
            >
                asdf
            </Box>
        </Card>
    );
};

export {
    MainStatusCard,
    MainControlCard
};