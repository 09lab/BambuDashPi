import { PrinterConfigData } from '@/interface/types';
import { ApiResponse, ConnectitonResult } from '@/interface/response';
import { apiPost } from '@/api';

export const setPrinterConfig = async (payload: PrinterConfigData): Promise<void> => {
    await apiPost("/api/v1/config/printer", payload);
};

export const connectPrinter = async(): Promise<ApiResponse<ConnectitonResult>> => {
    const res = await apiPost<ConnectitonResult>("/api/v1/printer/connect", {});
    return res;
}