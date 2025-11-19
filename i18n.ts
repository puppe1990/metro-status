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
    footer: {
      aboutUs: 'Sobre nós',
      termsOfUse: 'Termos de uso',
      privacyPolicy: 'Política de privacidade',
      contact: 'Contato',
      rights: 'Todos os direitos reservados.',
    },
    pages: {
      back: 'Voltar',
    },
    about: {
      title: 'Sobre Nós',
      description: 'Bem-vindo ao Status do Metrô SP! Somos uma plataforma dedicada a fornecer informações em tempo real sobre o status das linhas do metrô e CPTM de São Paulo, ajudando milhares de passageiros a planejarem suas viagens com mais eficiência.',
      mission: {
        title: 'Nossa Missão',
        text: 'Nossa missão é democratizar o acesso a informações sobre o transporte público de São Paulo, oferecendo dados atualizados e confiáveis sobre o status das linhas do metrô e CPTM. Acreditamos que informação em tempo real é essencial para melhorar a experiência dos usuários do transporte público.',
      },
      features: {
        title: 'Principais Funcionalidades',
        items: [
          'Status em tempo real de todas as linhas do metrô e CPTM',
          'Atualizações automáticas a cada 60 segundos',
          'Interface intuitiva e responsiva para todos os dispositivos',
          'Suporte para favoritos para acompanhar suas linhas preferidas',
          'Busca rápida para encontrar informações específicas',
          'Suporte a múltiplos idiomas (Português e Inglês)',
        ],
      },
      source: {
        title: 'Fonte de Dados',
        text: 'Nossos dados são fornecidos em parceria com {link}, uma plataforma confiável de monitoramento do transporte público. Trabalhamos continuamente para garantir a precisão e confiabilidade das informações apresentadas.',
      },
      updates: {
        title: 'Atualizações e Melhorias',
        text: 'Estamos constantemente trabalhando para melhorar nossa plataforma. Se você tiver sugestões, feedback ou encontrar algum problema, não hesite em entrar em contato conosco através da página de Contato.',
      },
    },
    terms: {
      title: 'Termos de Uso',
      lastUpdated: 'Última atualização: 2024',
      acceptance: {
        title: '1. Aceitação dos Termos',
        text: 'Ao acessar e usar o Status do Metrô SP, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.',
      },
      use: {
        title: '2. Uso do Serviço',
        text: 'O Status do Metrô SP é fornecido apenas para fins informativos. Você concorda em usar o serviço apenas para fins legais e de acordo com estes termos.',
        items: [
          'Não use o serviço de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores',
          'Não tente acessar áreas restritas do serviço sem autorização',
          'Não reproduza, copie ou venda qualquer parte do serviço sem permissão prévia',
          'Respeite os direitos de propriedade intelectual de terceiros',
        ],
      },
      data: {
        title: '3. Dados e Precisão',
        text: 'Embora nos esforcemos para fornecer informações precisas e atualizadas, não garantimos a precisão, completude ou atualidade das informações. Os dados são fornecidos "como estão" e devem ser verificados com os canais oficiais do Metrô/CPTM para planejamento crítico de viagem.',
      },
      accuracy: {
        title: '4. Precisão das Informações',
        text: 'As informações sobre o status das linhas são coletadas de fontes terceiras e podem sofrer atrasos. Sempre consulte os canais oficiais do Metrô de São Paulo e CPTM para informações críticas sobre interrupções ou alterações no serviço.',
      },
      limitation: {
        title: '5. Limitação de Responsabilidade',
        text: 'O Status do Metrô SP não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar nosso serviço.',
        items: [
          'Não nos responsabilizamos por decisões de viagem baseadas nas informações fornecidas',
          'Não garantimos disponibilidade contínua ou ininterrupta do serviço',
          'Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento',
        ],
      },
      changes: {
        title: '6. Modificações dos Termos',
        text: 'Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação. O uso continuado do serviço após tais modificações constitui sua aceitação dos novos termos.',
      },
      contact: {
        title: '7. Contato',
        text: 'Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da página de Contato.',
      },
    },
    privacy: {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 2024',
      intro: {
        title: 'Introdução',
        text: 'No Status do Metrô SP, levamos sua privacidade a sério. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você usa nosso serviço.',
      },
      dataCollected: {
        title: '1. Informações que Coletamos',
        text: 'Coletamos apenas as informações necessárias para fornecer e melhorar nosso serviço:',
        items: [
          'Preferências de idioma armazenadas localmente no seu navegador',
          'Linhas favoritas armazenadas localmente no seu navegador',
          'Informações de uso anônimas para melhorar o desempenho do serviço',
        ],
      },
      howUsed: {
        title: '2. Como Usamos suas Informações',
        text: 'Usamos as informações coletadas para:',
        items: [
          'Personalizar sua experiência (idioma preferido, linhas favoritas)',
          'Melhorar a funcionalidade e desempenho do serviço',
          'Analisar padrões de uso para otimizar nossa plataforma',
          'Garantir a segurança e prevenir atividades fraudulentas',
        ],
      },
      storage: {
        title: '3. Armazenamento de Dados',
        text: 'Todos os dados pessoais são armazenados localmente no seu navegador usando localStorage. Não enviamos suas informações pessoais para servidores externos. Dados de preferências são mantidos apenas no seu dispositivo.',
      },
      sharing: {
        title: '4. Compartilhamento de Informações',
        text: 'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros. Os dados armazenados localmente permanecem exclusivamente no seu dispositivo e não são transmitidos para nossos servidores.',
      },
      cookies: {
        title: '5. Cookies e Tecnologias Similares',
        text: 'Utilizamos apenas tecnologias de armazenamento local (localStorage) para manter suas preferências. Não utilizamos cookies de rastreamento ou tecnologias de publicidade invasivas.',
      },
      rights: {
        title: '6. Seus Direitos',
        text: 'Você tem o direito de:',
        items: [
          'Acessar suas informações armazenadas localmente através das configurações do navegador',
          'Limpar todos os dados locais a qualquer momento através das configurações do navegador',
          'Recusar o armazenamento de dados locais (pode afetar a funcionalidade do serviço)',
          'Solicitar informações sobre como seus dados são usados',
        ],
      },
      security: {
        title: '7. Segurança',
        text: 'Implementamos medidas de segurança para proteger suas informações. Como os dados são armazenados localmente no seu navegador, a segurança também depende das configurações e práticas de segurança do seu dispositivo.',
      },
      changes: {
        title: '8. Alterações nesta Política',
        text: 'Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações. A data da última atualização é indicada no topo desta política.',
      },
    },
    contact: {
      title: 'Contato',
      description: 'Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisar de suporte, por favor, entre em contato conosco através do formulário abaixo.',
      form: {
        name: 'Nome',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      },
      other: {
        title: 'Outras Formas de Contato',
        text: 'Você também pode nos encontrar em nossas redes sociais ou através do e-mail de suporte. Agradecemos seu interesse e feedback sobre o Status do Metrô SP!',
      },
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
    footer: {
      aboutUs: 'About Us',
      termsOfUse: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    pages: {
      back: 'Back',
    },
    about: {
      title: 'About Us',
      description: 'Welcome to SP Metro Status! We are a platform dedicated to providing real-time information about the status of São Paulo metro and CPTM lines, helping thousands of passengers plan their trips more efficiently.',
      mission: {
        title: 'Our Mission',
        text: 'Our mission is to democratize access to information about São Paulo public transportation, offering updated and reliable data on the status of metro and CPTM lines. We believe that real-time information is essential to improve the public transportation user experience.',
      },
      features: {
        title: 'Main Features',
        items: [
          'Real-time status of all metro and CPTM lines',
          'Automatic updates every 60 seconds',
          'Intuitive and responsive interface for all devices',
          'Favorites support to track your preferred lines',
          'Quick search to find specific information',
          'Multi-language support (Portuguese and English)',
        ],
      },
      source: {
        title: 'Data Source',
        text: 'Our data is provided in partnership with {link}, a reliable public transportation monitoring platform. We continuously work to ensure the accuracy and reliability of the information presented.',
      },
      updates: {
        title: 'Updates and Improvements',
        text: 'We are constantly working to improve our platform. If you have suggestions, feedback, or encounter any issues, please do not hesitate to contact us through the Contact page.',
      },
    },
    terms: {
      title: 'Terms of Use',
      lastUpdated: 'Last updated: 2024',
      acceptance: {
        title: '1. Acceptance of Terms',
        text: 'By accessing and using SP Metro Status, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our service.',
      },
      use: {
        title: '2. Use of Service',
        text: 'SP Metro Status is provided for informational purposes only. You agree to use the service only for lawful purposes and in accordance with these terms.',
        items: [
          'Do not use the service in any way that may damage, disable, or overload our servers',
          'Do not attempt to access restricted areas of the service without authorization',
          'Do not reproduce, copy, or sell any part of the service without prior permission',
          'Respect the intellectual property rights of third parties',
        ],
      },
      data: {
        title: '3. Data and Accuracy',
        text: 'Although we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or timeliness of the information. Data is provided "as is" and should be verified with official Metro/CPTM channels for critical travel planning.',
      },
      accuracy: {
        title: '4. Information Accuracy',
        text: 'Information about line status is collected from third-party sources and may be subject to delays. Always consult official São Paulo Metro and CPTM channels for critical information about service interruptions or changes.',
      },
      limitation: {
        title: '5. Limitation of Liability',
        text: 'SP Metro Status is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our service.',
        items: [
          'We are not responsible for travel decisions based on the information provided',
          'We do not guarantee continuous or uninterrupted availability of the service',
          'We reserve the right to modify or discontinue the service at any time',
        ],
      },
      changes: {
        title: '6. Terms Modifications',
        text: 'We reserve the right to modify these Terms of Use at any time. Changes will take effect immediately after their publication. Continued use of the service after such modifications constitutes your acceptance of the new terms.',
      },
      contact: {
        title: '7. Contact',
        text: 'If you have questions about these Terms of Use, please contact us through the Contact page.',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: 2024',
      intro: {
        title: 'Introduction',
        text: 'At SP Metro Status, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our service.',
      },
      dataCollected: {
        title: '1. Information We Collect',
        text: 'We collect only the information necessary to provide and improve our service:',
        items: [
          'Language preferences stored locally in your browser',
          'Favorite lines stored locally in your browser',
          'Anonymous usage information to improve service performance',
        ],
      },
      howUsed: {
        title: '2. How We Use Your Information',
        text: 'We use the collected information to:',
        items: [
          'Personalize your experience (preferred language, favorite lines)',
          'Improve service functionality and performance',
          'Analyze usage patterns to optimize our platform',
          'Ensure security and prevent fraudulent activities',
        ],
      },
      storage: {
        title: '3. Data Storage',
        text: 'All personal data is stored locally in your browser using localStorage. We do not send your personal information to external servers. Preference data is kept only on your device.',
      },
      sharing: {
        title: '4. Information Sharing',
        text: 'We do not sell, rent, or share your personal information with third parties. Data stored locally remains exclusively on your device and is not transmitted to our servers.',
      },
      cookies: {
        title: '5. Cookies and Similar Technologies',
        text: 'We use only local storage technologies (localStorage) to maintain your preferences. We do not use tracking cookies or invasive advertising technologies.',
      },
      rights: {
        title: '6. Your Rights',
        text: 'You have the right to:',
        items: [
          'Access your locally stored information through browser settings',
          'Clear all local data at any time through browser settings',
          'Refuse local data storage (may affect service functionality)',
          'Request information about how your data is used',
        ],
      },
      security: {
        title: '7. Security',
        text: 'We implement security measures to protect your information. As data is stored locally in your browser, security also depends on your device settings and security practices.',
      },
      changes: {
        title: '8. Changes to this Policy',
        text: 'We may update this Privacy Policy periodically. We recommend that you review this page regularly to be aware of any changes. The date of the last update is indicated at the top of this policy.',
      },
    },
    contact: {
      title: 'Contact',
      description: 'We are here to help! If you have questions, suggestions, or need support, please contact us through the form below.',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully! We will contact you soon.',
      },
      other: {
        title: 'Other Ways to Contact',
        text: 'You can also find us on our social media or through the support email. We appreciate your interest and feedback about SP Metro Status!',
      },
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

