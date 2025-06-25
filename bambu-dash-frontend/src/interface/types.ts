import React from 'react';


export interface PrinterConfigData {
    printerName: string
    printerIp: string
    printerSerial: string
    printerCode: string
}

export interface PrinterInfo {
  name: string;
  image: string;
}

export type IconWithTextProps = {
  iconVariant: React.ReactElement;   // 아이콘 컴포넌트
  title?: string;
  textInput?: string;                 // 아래 텍스트
  justify: string;                  // justifyContent
  action?: () => void;              // 클릭 시 실행할 함수
};