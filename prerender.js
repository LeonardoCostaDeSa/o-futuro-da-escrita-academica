import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

/**
 * Pós-build: renderiza o App para HTML estático e injeta no #root do
 * dist/index.html. O visitante passa a receber a página já desenhada (headline,
 * CTA, seções) em vez de um <div id="root"> vazio, eliminando a tela branca no
 * mobile. O bundle do cliente hidrata este markup (ver index.tsx).
 *
 * Requer que `vite build --ssr entry-server.tsx --outDir dist-ssr` tenha rodado
 * antes (ver script "build" em package.json).
 */
const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(__dirname, 'dist-ssr');

const { render } = await import('./dist-ssr/entry-server.js');
const appHtml = render();

const templatePath = resolve(distDir, 'index.html');
let html = readFileSync(templatePath, 'utf-8');

const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error(`prerender: marcador "${marker}" não encontrado em dist/index.html`);
}

html = html.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(templatePath, html);

// Remove o bundle SSR temporário — não deve ir para produção.
rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerender: HTML estático injetado no #root (${(appHtml.length / 1024).toFixed(0)} KB).`);
