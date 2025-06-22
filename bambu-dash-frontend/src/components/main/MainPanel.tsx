import {Card, Box} from '@mui/material';
import { MainStatusCard, MainControlCard } from './MainContentCard';
const MainPanel = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            px={3}
            py={3}
            boxSizing="border-box"
        >
            <Box
                flex={7}
            >
                <MainStatusCard />
            </Box>
            <Box
                flex={3}
            >
            <MainControlCard />
            </Box>
        </Box>
    )
}

export default MainPanel