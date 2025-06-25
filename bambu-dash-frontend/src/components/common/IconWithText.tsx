import React from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import { IconWithTextProps } from '@/interface/types';

const IconWithText: React.FC<IconWithTextProps> = ({ iconVariant, title, textInput, justify, action }) => {
  return (
    <Stack display='flext' direction="column" alignItems="center" justifyContent={justify} flex={1}>
      {title && (
        <Typography variant="body2" color="#cccccc" gutterBottom>
          {title}
        </Typography>
      )}
      <IconButton onClick={action} >
        {iconVariant}
      </IconButton>
      <Typography variant="caption" color="#e4e4e4">
        {textInput}
      </Typography>
    </Stack>
  );
};

export default IconWithText;
