import { GoogleGenAI } from "@google/genai";
import { LineStatus, StatusResponse } from '../types';

const parseStatus = (text: string, lineId: string): LineStatus => {
  const lowerText = text.toLowerCase();
  const linePattern = new RegExp(`(linha|line)\\s*${lineId}`, 'i');
  
  // If the specific line isn't mentioned in a specific context, we assume normal if the overall sentiment is normal
  // However, for this specific parser, we look for lines in the generated response 
  // that explicitly conform to our requested format.
  
  // Simple heuristic parsing of the response lines
  const lines = text.split('\n');
  const targetLine = lines.find(l => l.toLowerCase().includes(`line ${lineId}`) || l.toLowerCase().includes(`linha ${lineId}`));

  if (!targetLine) return LineStatus.NORMAL; // Default to normal if not explicitly flagged in summary

  const content = targetLine.toLowerCase();
  if (content.includes('paralisa') || content.includes('stopped') || content.includes('encerrada')) return LineStatus.STOPPED;
  if (content.includes('reduzida') || content.includes('lenta') || content.includes('slow') || content.includes('partial')) return LineStatus.REDUCED;
  if (content.includes('fechada') || content.includes('closed')) return LineStatus.CLOSED;
  
  return LineStatus.NORMAL;
};

export const fetchMetroStatus = async (): Promise<StatusResponse> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set. Returning mock data.");
    return { statusMap: {}, sources: [] };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // We ask the model to search and then format the output specifically for easy parsing
    const prompt = `
      Search for the real-time operational status of São Paulo Metro and CPTM lines.
      Check specifically for: Line 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 15.
      
      Based on the search results, output a status list.
      IMPORTANT: For EACH line, output a single line of text in this EXACT format:
      "Line [Number]: [Status]"
      
      Use ONLY these status keywords: 'Normal', 'Reduced Speed', 'Paralyzed', 'Closed'.
      If a line is operating normally, say 'Normal'.
      If there is no specific news indicating a problem for a line, assume 'Normal'.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const text = response.text || '';
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const statusMap: Record<string, LineStatus> = {};
    const ids = ['1', '2', '3', '4', '5', '7', '10', '11', '12', '13', '15'];

    ids.forEach(id => {
      statusMap[id] = parseStatus(text, id);
    });

    return {
      statusMap,
      sources: groundingChunks
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
