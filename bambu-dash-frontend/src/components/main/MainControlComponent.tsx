import { Box, Button, ButtonGroup, LinearProgress, Typography } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const buttons = [
  <Button key="one" startIcon={<PlayArrowIcon />}>Start</Button>,
  <Button key="two" startIcon={<PauseIcon />}>Pause</Button>,
  <Button key="three" startIcon={<StopIcon />}>Stop</Button>,
];

const MainControlComponent = () => {
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
                    display="flex" justifyContent="center" alignItems="center"
                    height="100%"
                    width="100%"
                    flexDirection='row'
                >
                    <Typography color='#e4e4e4'>32%</Typography>
                </Box>       
                <LinearProgress value={23} sx={{ width: '100%', height: 5, margin: 1}}/>
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

export default MainControlComponent;