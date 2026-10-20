# Expo PWA

Base inicial de aplicação multiplataforma usando Expo, React Native Web e Expo Router, com arquivos básicos para experiência PWA.

## Tecnologias

- Expo e Expo Router
- React Native + React Native Web
- TypeScript
- Web App Manifest
- Workbox para gerar um service worker
- Configuração de build estático para Vercel

## Scripts

- `npm install`: instala as dependências
- `npm run web`: inicia a aplicação no navegador
- `npm run start`: inicia o Expo
- `npm run build:web`: exporta a aplicação web e gera o service worker
- `npm run typecheck`: verifica os tipos TypeScript

## Estrutura

```
app/
  +html.tsx       # documento HTML e metadados PWA
  _layout.tsx     # layout global do Expo Router
  index.tsx       # tela inicial
public/
  manifest.json   # metadados de instalação PWA
  icons/          # ícone da aplicação
app.json
package.json
tsconfig.json
vercel.json
workbox-config.cjs
```

## Próximas etapas

1. Confirmar os requisitos e as telas necessárias para o projeto.
2. Escolher e configurar o serviço de dados (por exemplo, Firebase ou Supabase).
3. Implementar autenticação e persistência apenas quando os requisitos estiverem definidos.
4. Validar instalação PWA, acessibilidade, responsividade e build de produção.

> Esta é uma estrutura inicial. A compilação não foi executada neste ambiente e as versões das dependências devem ser confirmadas antes de produção.
