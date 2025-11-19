export enum LineStatus {
  NORMAL = 'Normal Operation',
  REDUCED = 'Reduced Speed',
  STOPPED = 'Paralyzed',
  CLOSED = 'Closed',
  UNKNOWN = 'Unknown'
}

export interface MetroLine {
  id: string;
  name: string;
  colorHex: string;
  textColor: 'text-white' | 'text-gray-900';
  status: LineStatus;
  operator: 'Metro' | 'CPTM' | 'ViaQuatro' | 'ViaMobilidade';
  description?: string;
}

export interface StatusResponse {
  statusMap: Record<string, LineStatus>;
  descriptions: Record<string, string>;
  sources: any[];
}
