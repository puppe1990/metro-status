# 🚇 SP Metro Status

Aplicação web moderna para consultar o status operacional em tempo real das linhas do Metrô e CPTM de São Paulo.

## 📋 Sobre o Projeto

O **SP Metro Status** é uma interface web responsiva que fornece informações atualizadas sobre o status operacional de todas as linhas do sistema metroviário de São Paulo. A aplicação busca dados em tempo real da API do [Direto dos Trens](https://www.diretodostrens.com.br) e apresenta as informações de forma clara e intuitiva.

### ✨ Funcionalidades

- **Status em Tempo Real**: Consulta automática do status de todas as linhas do Metrô e CPTM
- **Interface Moderna**: Design responsivo e intuitivo com Tailwind CSS
- **Busca e Filtros**: Pesquise linhas por nome, número ou operadora
- **Favoritos**: Marque suas linhas favoritas para acesso rápido
- **Atualização Manual**: Botão para atualizar o status a qualquer momento
- **Multilíngue**: Suporte a múltiplos idiomas (i18n)
- **PWA Ready**: Preparado para funcionar como Progressive Web App

### 🚊 Linhas Monitoradas

- **Metrô**: Linhas 1 (Azul), 2 (Verde), 3 (Vermelha), 4 (Amarela), 5 (Lilás), 15 (Prata)
- **CPTM**: Linhas 7 (Rubi), 10 (Turquesa), 11 (Coral), 12 (Safira), 13 (Jade)

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/metro-status.git
cd metro-status
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
# Crie um arquivo .env.local na raiz do projeto
# GEMINI_API_KEY=sua_chave_aqui (se necessário)
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
metro-status/
├── components/          # Componentes React
│   ├── pages/          # Páginas da aplicação
│   ├── Footer.tsx      # Rodapé
│   ├── Layout.tsx      # Layout principal
│   ├── LineCard.tsx    # Card de linha do metrô
│   └── GroundingSources.tsx
├── contexts/           # Contextos React
│   └── LanguageContext.tsx
├── services/           # Serviços de API
│   ├── diretoDosTrensService.ts
│   └── geminiService.ts
├── constants.ts        # Constantes da aplicação
├── types.ts           # Definições TypeScript
├── i18n.ts            # Configuração de internacionalização
└── App.tsx            # Componente raiz
```

## 🌐 Páginas

- **/** - Página inicial com status das linhas
- **/sobre** - Sobre o projeto
- **/termos** - Termos de uso
- **/privacidade** - Política de privacidade
- **/contato** - Página de contato

## 🔧 Configuração

### Variáveis de Ambiente

A aplicação pode ser configurada através de variáveis de ambiente:

- `GEMINI_API_KEY` - Chave da API do Google Gemini (opcional, para funcionalidades futuras)

### API

A aplicação consome a API pública do [Direto dos Trens](https://www.diretodostrens.com.br/api/status) para obter os status das linhas.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [Direto dos Trens](https://www.diretodostrens.com.br) pela API pública
- Comunidade React e todas as bibliotecas open source utilizadas

## 📞 Contato

Para dúvidas, sugestões ou problemas, abra uma [issue](https://github.com/seu-usuario/metro-status/issues) no GitHub.

---

Desenvolvido com ❤️ para os usuários do transporte público de São Paulo
