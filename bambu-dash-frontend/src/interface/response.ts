export interface ApiResponse<T> {
    statusCode: number;
    errorCode: number;
    message: string;
    data: T;
    timestamp: string | Date;
}

export interface InitStatusData {
    initStatus: boolean;
}

export interface ScanWifiData {
    ssid: string;
    secure: boolean;
    signalStrength: number;
}

export interface SetWifiPayload {
  ssid: string;
  password: string;
}