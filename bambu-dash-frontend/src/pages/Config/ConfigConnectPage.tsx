// /src/pages/ConfigConnect.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Slide, CircularProgress, Typography } from '@mui/material';
import { PrinterConfigData } from '@/interface/types';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { connectPrinter } from '@/api/printer';
import { ErrorCode } from '@/constants/errorCodes';

interface PrinterInfo {
  name: string;
  image: string;
}

const ConfigConnectPage: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState('연결 중...');
  const { printer, config } = location.state as { 
    printer: PrinterInfo;
    config: PrinterConfigData;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      connectToPrinter();
    }, 3000);

    return () => clearTimeout(timer);
  }, [config]);

  const connectToPrinter = async() => {
    try {
      const response = connectPrinter();

      if ((await response).statusCode === ErrorCode.SUCCESS) {
        if (((await response).data.result === "success")) {
          setStatus('success');
          setMessage('연결 성공!')
        } else {
          setStatus('error');
          setMessage('연결 실패')
          console.warn('Connection fail result : ', (await response).data.reasonStr);
        }
      }
    } catch(error) {
      setStatus('error');
      setMessage('연결 실패');
      console.error('Timout ', error);
    }
  };

  const renderIcon = () => {
    switch (status) {
      case 'pending':
        return <CircularProgress size={40} />;
      case 'success':
        return <CheckCircleOutlineIcon color="success" sx={{ fontSize: 48 }} />;
      case 'error':
        return <ErrorOutlineIcon color="error" sx={{ fontSize: 48 }} />;
      default:
        return null;
    }
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#ffffff"
    >
      <Slide in direction="right" timeout={1000}>
        <Box>
          <img
            src={printer.image}
            alt={printer.name}
            style={{
              height: '70vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Slide>

      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        {status === 'pending' && (
          <>
            <Typography variant="h6" fontWeight="bold">
              {printer.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {config.printerIp}
            </Typography>
          </>
        )}
        {renderIcon()}
        <Typography mt={2} variant="h6">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConfigConnectPage;
