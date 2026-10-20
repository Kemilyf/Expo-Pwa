# Expo PWA

Projeto inicial de uma aplicação multiplataforma com Expo, React Native Web e Expo Router. O scaffold inclui uma tela demonstrativa responsiva e arquivos para preparar a distribuição como Progressive Web App (PWA).

> Este repositório é uma base educacional para evolução. Não há integração com Firebase, autenticação ou persistência de dados implementadas.

## Tecnologias

- [Expo](https://expo.dev/) com [Expo Router](https://docs.expo.dev/router/introduction/) e Metro
- React 19, React Native e React Native Web
- TypeScript com verificação estrita
- Web App Manifest em `public/manifest.json`
- [Workbox CLI](https://developer.chrome.com/docs/workbox/) para gerar o service worker
- Exportação web estática para hospedagem, com configuração de exemplo para Vercel

## O que já existe

- Tela inicial adaptável com informações sobre o scaffold.
- Estrutura de navegação do Expo Router e documento HTML com idioma `pt-BR), metadados e referência ao manifesto.
- Manifesto com nome, cores, orientação e modo de exibição standalone.
- Ícone SVG em `public/icons/app-icon.svg`.
- Comando de exportação web que executa o Workbox após o Expo.
- Cache de runtime para imagens configurado com a estratégia `StaleWhileRevalidate`.

A configuração PWA é inicial: a geração do service worker está prevista no comando de build, mas a instalação e o comportamento offline precisam ser verificados em uma build publicada por HTTPS.

## Pré-requisitos

- Node.js e npm instalados.
- Git para clonar o repositório.

O projeto não fixa uma versão mínima de Node.js nem inclui um arquivo de lock de dependências. Para builds reproduzíveis, recomenda-se escolher e registrar uma versão de Node.js e versionar o lockfile usado pela equipe.

## Instalação

```bash
git clone https://github.com/Kemilyf/Expo-Pwa.git
cd Expo-Pwa
npm install
```

## Desenvolvimento

Inicie o Expo:

```bash
npm run start
```

Ou abra diretamente no navegador:

```bash
npm run web
```

Os scripts para abrir o Expo em dispositivos estão disponíveis também:

```bash
npm run android
npm run ios
```

## Build web e PWA

Gere a exportação estática e o service worker:

```bash
npm run build:web
```

O comando executa `expo export --platform web` e depois `workbox generateSW workbox-config.cjs`. A saída é gravada em `dist/`, conforme a configuração atual.

Para verificar os tipos TypeScript:

```bash
npm run typecheck
```

Os comandos estão definidos no projeto, mas a compilação ainda não foi validada neste README. As versões declaradas das dependências devem ser verificadas no ambiente de destino antes de uma publicação.

## Publicação na Vercel

O arquivo `vercel.json` configura:

- Build: `npm run build:web`
- Diretório de saída: `dist`
- Framework automático: desativado

Importe o repositório na Vercel e use essas configurações ou mantenha os valores detectados no arquivo. A aplicação é exportada como conteúdo estático. Após a publicação, valide as rotas, o carregamento do manifesto e do service worker, a instalação e o funcionamento offline. O comportamento de PWA requer HTTPS em produção.

## Estrutura do projeto

```text
app/
  +html.tsx           # Documento HTML, metadados e link do manifesto
  _layout.tsx         # Layout raiz e configuração do Expo Router
  index.tsx           # Tela inicial demonstrativa
public/
  manifest.json       # Metadados de instalação da PWA
  icons/
    app-icon.svg      # Ícone SVG
app.json              # Configuração do Expo e exportação web estática
package.json          # Dependências e scripts
tsconfig.json         # Configuração TypeScript
vercel.json           # Build e diretório de saída para Vercel
workbox-config.cjs    # Geração do service worker e cache de imagens
```

## Limitações atuais

- Não há backend, banco de dados, autenticação ou integração com Firebase/Supabase.
- A tela é demonstrativa; não representa funcionalidades de produto definidas.
- O suporte de instalação e o uso offline ainda precisam de validação em navegadores e dispositivos reais.
- Não há testes automatizados nem build de produção confirmada neste momento.
- As dependências ainda não estão fixadas por lockfile; confirme a compatibilidade das versões antes de implantar.

## Próximos passos

Definir o objetivo e os requisitos da aplicação, implementar as telas e fluxos necessários e, então, escolher os serviços de dados e autenticação. Depois, validar a exportação, o service worker e a instalação da PWA antes da publicação.