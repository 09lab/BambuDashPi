import axios, { Axios, AxiosRequestConfig, AxiosError } from 'axios';
import { ApiResponse } from '@/interface/response'

const client: Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000,
});

const apiGet = async <T>(uri: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
        const response = await client.get<ApiResponse<T>>(uri, config);
        return response.data;
    } catch(error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ApiResponse<any>>; 
            // 응답 본문이 있는 경우 에러 메시지 출력
            const message = axiosError.response?.data?.message || axiosError.message;

            // 필요하다면 에러 코드나 상태코드도 추출 가능
            const statusCode = axiosError.response?.status;
            const errorCode = axiosError.response?.data?.errorCode;

            console.error(`[${statusCode}] API Error: ${message} (code: ${errorCode})`);

            // 사용자 정의 Error 객체로 변환 가능
            throw new Error(message);
        }
        
        throw new Error('Unknown error occured');
    }
};

export {
    apiGet
}