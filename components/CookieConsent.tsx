import React, { useEffect, useState } from 'react';

/**
 * Banner de consentimento de cookies (LGPD).
 *
 * O Meta Pixel só é carregado após o aceite explícito. Enquanto não houver
 * decisão, nenhum contato com o Facebook acontece. A função que inicializa o
 * pixel é definida em index.html como window.initFacebookPixel e chamada aqui.
 *
 * Estados persistidos em localStorage (CONSENT_KEY):
 *   'granted' → pixel disparado (agora e nas próximas visitas)
 *   'denied'  → nada é carregado; banner não reaparece
 *   (ausente) → sem decisão; banner é exibido
 */

const CONSENT_KEY = 'cookie_consent';

// URL da Política de Privacidade. Deixe vazio para ocultar o link até a página
// existir (evita link quebrado). Preencha quando a política estiver publicada.
const PRIVACY_POLICY_URL = '';

declare global {
  interface Window {
    initFacebookPixel?: () => void;
  }
}

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // visible inicia false → coincide com o HTML pré-renderizado (SSG), sem
  // mismatch de hidratação. A decisão real acontece só no cliente, no effect.
  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(CONSENT_KEY);
    } catch {
      // localStorage indisponível (modo privado/bloqueado) — trata como sem decisão.
    }

    if (consent === 'granted') {
      window.initFacebookPixel?.();
    } else if (consent !== 'denied') {
      setVisible(true);
    }
  }, []);

  const persist = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Ignora falha de escrita — a decisão vale ao menos para esta sessão.
    }
  };

  const accept = () => {
    persist('granted');
    window.initFacebookPixel?.();
    setVisible(false);
  };

  const decline = () => {
    persist('denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 pointer-events-none"
      role="region"
      aria-label="Consentimento de cookies"
    >
      <div className="pointer-events-auto max-w-2xl mx-auto bg-white border border-master-light rounded-2xl shadow-[0_20px_50px_-12px_rgba(4,24,43,0.28)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1">
          <p className="text-master-deep font-black text-sm font-heading uppercase tracking-tight mb-1.5">
            Sua privacidade
          </p>
          <p className="text-master-slate/80 text-xs sm:text-sm leading-relaxed font-normal">
            Usamos cookies para medir o desempenho das nossas campanhas e melhorar
            sua experiência. Você decide: o rastreamento de marketing só é ativado
            se você aceitar.
            {PRIVACY_POLICY_URL && (
              <>
                {' '}
                <a
                  href={PRIVACY_POLICY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-master-primary font-bold underline underline-offset-2 hover:text-master-deep transition-colors focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2 rounded"
                >
                  Política de Privacidade
                </a>
                .
              </>
            )}
          </p>
        </div>

        <div className="flex gap-3 w-full sm:w-auto flex-shrink-0">
          <button
            type="button"
            onClick={decline}
            className="flex-1 sm:flex-initial px-5 py-3 text-[11px] font-black rounded-xl text-master-slate/70 border border-master-light hover:bg-master-offwhite hover:text-master-deep transition-all uppercase tracking-[0.15em] font-heading active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="flex-1 sm:flex-initial px-6 py-3 text-[11px] font-black rounded-xl text-white bg-master-primary hover:bg-master-deep transition-all uppercase tracking-[0.15em] font-heading active:scale-95 shadow-[0_10px_30px_-8px_rgba(0,102,166,0.4)] focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
