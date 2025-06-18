import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Box,
  IconButton,
} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import LockIcon from "@mui/icons-material/Lock";

interface WifiNetwork {
  ssid: string;
  signalStrength: number; // dBm (예: -30 ~ -90)
  secure: boolean;
}

interface WifiListProps {
  networks: WifiNetwork[];
  selectedSsid: string | null;
  onSelect: (ssid: string) => void;
}

const getSignalOpacity = (strength: number) => {
  // 신호 세기 (-30 ~ -90 dBm 기준)
  if (strength >= -50) return 1;
  if (strength >= -70) return 0.7;
  return 0.4;
};

const WifiList = ({ networks, selectedSsid, onSelect }: WifiListProps) => {
  return (
    <List>
      {networks.map((network) => (
        <ListItem
          key={network.ssid}
          secondaryAction={
            <IconButton edge="end">
                <WifiIcon sx={{ opacity: getSignalOpacity(network.signalStrength) }} />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedSsid === network.ssid}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>

          <ListItemText primary={network.ssid} />
        </ListItem>
      ))}
    </List>
  );
};

export default WifiList;
