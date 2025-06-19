import { apiGet, apiPost } from "@/api";
import { ScanWifiData, SetWifiPayload } from "@/interface/response";

export const fetchWifiList = async (): Promise<ScanWifiData[]> => {
  const res = await apiGet<ScanWifiData[]>("/api/v1/wifi/scan");
  return res.data;
};

export const setWifiConfig = async (payload: SetWifiPayload): Promise<void> => {
  await apiPost("/api/v1/config/wifi", payload);
};
