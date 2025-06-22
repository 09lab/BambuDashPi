import { Box } from '@mui/material';
import { MainStatusCard, MainControlCard } from './MainContentCard';

const MainContentPrintState = () => {
    return (
        <Box 
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
        >
            <Box flex={6} width="100%" height="100%" display="flex" flexDirection="column">
                <MainStatusCard />
            </Box>
            <Box flex={4} width="100%" height="100%" display="flex" flexDirection="column">
                <MainControlCard />
            </Box> 
        </Box>
    )
}

export default MainContentPrintState;