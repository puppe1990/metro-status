export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    app: {
      title: 'Status do Metrô SP',
      subtitle: 'Direto dos Trens',
      refresh: 'Atualizar',
      updating: 'Atualizando...',
      switchLanguage: 'Alternar para Inglês',
      searchPlaceholder: 'Buscar linhas...',
      noResults: 'Nenhuma linha encontrada',
      addToFavorites: 'Adicionar aos favoritos',
      removeFromFavorites: 'Remover dos favoritos',
    },
    status: {
      allNormal: 'Todos os Sistemas Normais',
      linesWithIssues: 'Linha(s) com Problemas',
      updated: 'Atualizado',
      waitingForUpdate: 'Aguardando atualização...',
    },
    lineStatus: {
      normal: 'Operação Normal',
      reduced: 'Velocidade Reduzida',
      stopped: 'Paralisada',
      closed: 'Fechada',
      unknown: 'Desconhecido',
      updating: 'Atualizando...',
    },
    errors: {
      unableToRetrieve: 'Não foi possível recuperar o status em tempo real. Exibindo informações padrão.',
    },
    sources: {
      title: 'Fontes de Notícias',
    },
    disclaimer: {
      text: 'Informações de status fornecidas por {link}. Os dados são atualizados a cada 60 segundos. Sempre verifique com os canais oficiais do Metrô/CPTM para planejamento crítico de viagem.',
      linkText: 'Direto dos Trens',
    },
  },
  en: {
    app: {
      title: 'SP Metro Status',
      subtitle: 'Direto dos Trens',
      refresh: 'Refresh',
      updating: 'Updating...',
      switchLanguage: 'Switch to Portuguese',
      searchPlaceholder: 'Search lines...',
      noResults: 'No lines found',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
    },
    status: {
      allNormal: 'All Systems Normal',
      linesWithIssues: 'Line(s) with Issues',
      updated: 'Updated',
      waitingForUpdate: 'Waiting for update...',
    },
    lineStatus: {
      normal: 'Normal Operation',
      reduced: 'Reduced Speed',
      stopped: 'Paralyzed',
      closed: 'Closed',
      unknown: 'Unknown',
      updating: 'Updating...',
    },
    errors: {
      unableToRetrieve: 'Unable to retrieve live status. Displaying default information.',
    },
    sources: {
      title: 'News Sources',
    },
    disclaimer: {
      text: 'Status information provided by {link}. Data is updated every 60 seconds. Always verify with official Metro/CPTM channels for critical travel planning.',
      linkText: 'Direto dos Trens',
    },
  },
} as const;

export const getTranslations = (lang: Language) => translations[lang];

export const getDefaultLanguage = (): Language => {
  // Check localStorage first
  const stored = localStorage.getItem('metro-status-language');
  if (stored === 'pt' || stored === 'en') {
    return stored;
  }
  // Default to Portuguese
  return 'pt';
};

export const saveLanguage = (lang: Language) => {
  localStorage.setItem('metro-status-language', lang);
};

