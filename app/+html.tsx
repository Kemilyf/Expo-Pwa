import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

export default function HtmlDocument({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#5145cd" />
        <meta name="description" content="Projeto inicial com Expo, React Native Web e recursos PWA." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/icons/app-icon.svg" />
        <link rel="apple-touch-icon" href="/icons/app-icon.svg" />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
