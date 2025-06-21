import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Fade,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import bambuP1S from '@/assets/images/bambu_lab_p1s.png';
import bambuP1P from '@/assets/images/bambu_lab_p1p.png';
import bambuX1C from '@/assets/images/bambu_lab_x1c.png';
import bambuA1 from '@/assets/images/bambu_lab_a1.png';
import bambuA1Mini from '@/assets/images/bambu_lab_a1_mini.png';

interface PrinterInfo {
  name: string;
  image: string;
}

const printers: PrinterInfo[] = [
  { name: 'A1', image: bambuA1 },
  { name: 'A1 mini', image: bambuA1Mini },
  { name: 'P1S', image: bambuP1S },
  { name: 'P1P', image: bambuP1P },
  { name: 'X1C', image:  bambuX1C },
];

const ConfigPrinterPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleSlide = (direction: 'prev' | 'next') => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveIndex((prev) =>
        direction === 'prev'
          ? (prev - 1 + printers.length) % printers.length
          : (prev + 1) % printers.length
      );
      setFadeIn(true);
    }, 200);
  };

  const activePrinter = printers[activeIndex];

  return (
    <Box display="flex" height="100vh" width="100vw">
      {/* 좌측 이미지 */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f8f8f8"
      >
        {/* 이미지 페이드 전환 */}
        <Box flex={6} width="100%" display="flex" justifyContent="center" alignItems="center">
          <Fade in={fadeIn} timeout={300}>
            <img
              src={activePrinter.image}
              alt={activePrinter.name}
              style={{
                maxHeight: '80vh',
                maxWidth: '90%',
                objectFit: 'contain',
              }}
            />
          </Fade>
        </Box>

        {/* 버튼 + 이름 */}
        <Box display="flex" alignItems="center" mt={3} gap={2}>
          <IconButton onClick={() => handleSlide('prev')}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Typography variant="h6">{activePrinter.name}</Typography>

          <IconButton onClick={() => handleSlide('next')}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* 우측 입력 폼 */}
      <Box flex={1} p={4} display="flex" flexDirection="column" justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Printer Name" fullWidth />
          <TextField label="Printer IP Address" fullWidth />
          <TextField label="Printer Serial Number" fullWidth />
          <TextField label="Printer Access Code" fullWidth type="password" />
        </Box>

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="outlined" color="secondary">
            Back
          </Button>
          <Button variant="contained" color="primary">
            Connect
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfigPrinterPage;
