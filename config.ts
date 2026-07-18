/**
 * Site configuration — values injected at build time via VITE_* env vars.
 * Fallbacks = valores do site principal (nunca quebra sem env vars).
 *
 * Para desenvolvimento local, crie um arquivo .env.local (nunca commitado):
 *   VITE_HOTMART_URL=https://pay.hotmart.com/...
 *   VITE_PRICE_FULL=147
 *   VITE_PRICE_INSTALLMENTS=12
 *   VITE_PRICE_INSTALLMENT_VALUE=15,20
 */

export const HOTMART_URL =
  import.meta.env.VITE_HOTMART_URL ??
  'https://pay.hotmart.com/O104206161Q?off=ozhq6dsd';

export const PRICE_FULL =
  import.meta.env.VITE_PRICE_FULL ?? '147';

export const PRICE_INSTALLMENTS =
  import.meta.env.VITE_PRICE_INSTALLMENTS ?? '12';

export const PRICE_INSTALLMENT_VALUE =
  import.meta.env.VITE_PRICE_INSTALLMENT_VALUE ?? '15,20';
