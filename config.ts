/**
 * Site configuration — values injected at build time via VITE_* env vars.
 * Fallbacks = valores do site principal (nunca quebra sem env vars).
 *
 * Para desenvolvimento local, crie um arquivo .env.local (nunca commitado):
 *   VITE_HOTMART_URL=https://pay.hotmart.com/...
 *   VITE_PRICE_FULL=97
 *   VITE_PRICE_INSTALLMENTS=12
 *   VITE_PRICE_INSTALLMENT_VALUE=10,03
 */

export const HOTMART_URL =
  import.meta.env.VITE_HOTMART_URL ??
  'https://pay.hotmart.com/O104206161Q?checkoutMode=10&bid=1775682904432';

export const PRICE_FULL =
  import.meta.env.VITE_PRICE_FULL ?? '97';

export const PRICE_INSTALLMENTS =
  import.meta.env.VITE_PRICE_INSTALLMENTS ?? '12';

export const PRICE_INSTALLMENT_VALUE =
  import.meta.env.VITE_PRICE_INSTALLMENT_VALUE ?? '10,03';
