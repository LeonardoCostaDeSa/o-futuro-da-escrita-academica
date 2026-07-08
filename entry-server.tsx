import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Entry de build para pré-renderização estática (SSG).
 * Roda apenas em build time (node), gerando o HTML que é injetado no #root
 * pelo prerender.js. No cliente, index.tsx hidrata este mesmo markup.
 */
export function render(): string {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
