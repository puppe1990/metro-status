import { LineStatus, StatusResponse } from '../types';

// Use relative URL in development (via Vite proxy) or absolute URL in production
const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : 'https://www.diretodostrens.com.br/api';

interface UltimoStatus {
  codigo: number;
  situacao: string;
  descricao?: string;
  id: number;
  criado: string;
  modificado?: string;
}

/**
 * Maps the API's situacao string to our LineStatus enum
 */
const parseSituacao = (situacao: string): LineStatus => {
  const lowerSituacao = situacao.toLowerCase();
  
  // Check for stopped/paralyzed status
  if (
    lowerSituacao.includes('paralisad') ||
    lowerSituacao.includes('parada') ||
    lowerSituacao.includes('interrompid') ||
    lowerSituacao.includes('suspens')
  ) {
    return LineStatus.STOPPED;
  }
  
  // Check for closed status
  if (
    lowerSituacao.includes('fechad') ||
    lowerSituacao.includes('encerrad') ||
    lowerSituacao.includes('sem opera')
  ) {
    return LineStatus.CLOSED;
  }
  
  // Check for reduced speed/service
  if (
    lowerSituacao.includes('reduzid') ||
    lowerSituacao.includes('lent') ||
    lowerSituacao.includes('atras') ||
    lowerSituacao.includes('velocidade reduzida')
  ) {
    return LineStatus.REDUCED;
  }
  
  // Check for normal operation
  if (
    lowerSituacao.includes('normal') ||
    lowerSituacao.includes('operando') ||
    lowerSituacao.includes('funcionando')
  ) {
    return LineStatus.NORMAL;
  }
  
  // Default to unknown if we can't parse
  return LineStatus.UNKNOWN;
};

/**
 * Fetches the latest status of all metro lines from Direto dos Trens API
 */
export const fetchMetroStatus = async (): Promise<StatusResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/status`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const data: UltimoStatus[] = await response.json();
    
    // Map API response to our status map and descriptions
    const statusMap: Record<string, LineStatus> = {};
    const descriptions: Record<string, string> = {};
    
    data.forEach((status) => {
      const lineId = status.codigo.toString();
      // Only include lines we care about (1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 15)
      const validLineIds = ['1', '2', '3', '4', '5', '7', '10', '11', '12', '13', '15'];
      if (validLineIds.includes(lineId)) {
        statusMap[lineId] = parseSituacao(status.situacao);
        if (status.descricao) {
          descriptions[lineId] = status.descricao;
        }
      }
    });

    // Return empty sources array since this API doesn't provide grounding sources
    return {
      statusMap,
      descriptions,
      sources: []
    };

  } catch (error) {
    console.error("Direto dos Trens API Error:", error);
    throw error;
  }
};

