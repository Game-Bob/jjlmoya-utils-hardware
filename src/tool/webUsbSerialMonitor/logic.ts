export interface SerialPortInfo {
  usbVendorId?: number;
  usbProductId?: number;
}

export interface SerialLineInput {
  text: string;
  appendNewline: boolean;
}

export interface SerialPortLabelInput {
  info: SerialPortInfo;
  fallback: string;
  unknownUsbId?: string;
  vidPrefix?: string;
  pidSeparator?: string;
}

export const commonBaudRates = [9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600];

export function formatUsbId(value: number | undefined, unknownUsbId = 'N/A'): string {
  if (typeof value !== 'number') return unknownUsbId;
  return `0x${value.toString(16).toUpperCase().padStart(4, '0')}`;
}

export function buildSerialPortLabel(input: SerialPortLabelInput): string {
  const unknownUsbId = input.unknownUsbId ?? 'N/A';
  const vidPrefix = input.vidPrefix ?? 'VID ';
  const pidSeparator = input.pidSeparator ?? ' / PID ';
  const vendor = formatUsbId(input.info.usbVendorId, unknownUsbId);
  const product = formatUsbId(input.info.usbProductId, unknownUsbId);
  if (vendor === unknownUsbId && product === unknownUsbId) return input.fallback;
  return `${vidPrefix}${vendor}${pidSeparator}${product}`;
}

export function encodeSerialLine(input: SerialLineInput): string {
  const normalized = input.text.replace(/\r?\n/g, '');
  return input.appendNewline ? `${normalized}\r\n` : normalized;
}

export function decodeSerialChunk(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes);
}

