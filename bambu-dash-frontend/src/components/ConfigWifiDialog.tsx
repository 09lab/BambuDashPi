// /src/components/config/WifiDialog.tsx

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material';

interface WifiDialogProps {
  open: boolean;
  onClose: () => void;
  ssid: string;
  isSecured: boolean;
}

const ConfigWifiDialog: React.FC<WifiDialogProps> = ({ open, onClose, ssid, isSecured }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
          {ssid}
      </DialogTitle>

      <DialogContent>
        <Box mt={2}>
          <TextField
            label="Wi-Fi Password"
            type="password"
            fullWidth
            disabled={!isSecured}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => { /* Connect logic 나중에 추가 */ }} color="primary" variant="contained">
          Connect
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigWifiDialog;
