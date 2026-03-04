
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import EnrollModal from './EnrollModal';

const benefits = [
  "Acesso completo às aulas",
  "Atualizações incluídas",
  "Aplicável em qualquer área acadêmica",
];

const Pricing: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <section
        id="preco"
        ref={ref as React.RefObject<HTMLElement>}
        className="py-32 bg-master-deep text-white relative overflow-hidden scroll-mt-24"
      >
        {/* Background decorativo — Aurora */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="aurora-blob w-[50%] h-[120%] top-[-10%] right-[-10%]"
            style={{ '--aurora-duration': '18s', '--aurora-delay': '0s', '--aurora-blur': '130px', backgroundColor: 'rgba(0,102,166,0.10)' } as React.CSSProperties}
          />
          <div
            className="aurora-blob w-[35%] h-[80%] bottom-[-10%] left-[-5%]"
            style={{ '--aurora-duration': '22s', '--aurora-delay': '-9s', '--aurora-blur': '100px', backgroundColor: 'rgba(43,156,212,0.06)' } as React.CSSProperties}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <span className="text-master-accent font-black tracking-[0.5em] uppercase text-[10px] font-heading mb-4 block">Investimento</span>
            <h2 className="text-4xl font-black sm:text-5xl uppercase tracking-tighter font-heading leading-none mb-4">
              Seu investimento para
            </h2>
            <h2 className="text-4xl font-black sm:text-5xl tracking-tighter font-heading leading-none mb-6">
              <span className="text-master-primary italic font-light lowercase font-sans">dominar o método</span>
            </h2>
            <p className="text-master-light/40 mb-16 font-normal">Acesso completo ao curso por:</p>
          </div>

          <div className={`relative bg-gradient-to-b from-[#0a2540] to-master-deep border border-master-primary/30 rounded-[2.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,102,166,0.3)] mb-8 reveal reveal-delay-1 overflow-hidden ${isVisible ? 'visible' : ''}`}>
            {/* Aurora interna ao card */}
            <div
              className="aurora-blob w-[70%] h-[70%] top-[-20%] right-[-15%]"
              style={{ '--aurora-duration': '14s', '--aurora-delay': '-3s', '--aurora-blur': '80px', backgroundColor: 'rgba(43,156,212,0.07)' } as React.CSSProperties}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-master-accent uppercase font-heading tracking-[0.2em]">12x</span>
                  <span className="text-7xl font-black tracking-tighter font-heading">R$34,70</span>
                </div>
                <p className="text-master-light/40 text-sm">ou R$347 à vista</p>
              </div>

              <p className="text-master-light/50 text-sm leading-relaxed mb-10 max-w-sm mx-auto font-normal">
                Um investimento único para aprender um sistema que você pode usar do TCC ao doutorado.
              </p>

              {/* Bloco de garantia standalone */}
              <div className="border border-master-accent/30 bg-master-accent/5 rounded-2xl p-6 mb-6 flex items-center gap-5 text-left">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-master-accent/10 rounded-xl">
                  <svg className="w-6 h-6 text-master-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12 1.716 0 3.348-.361 4.83-1.012a11.951 11.951 0 003.172-2.134c.328-.328.629-.678.9-1.05A11.96 11.96 0 0021 12c0-6.627-5.373-12-12-12a11.94 11.94 0 00-5.402 1.286z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-white text-sm font-heading">Garantia incondicional de 7 dias</p>
                  <p className="text-master-light/50 text-xs mt-1 leading-relaxed font-normal">
                    Se você não sentir que o método faz sentido para o seu trabalho, devolvemos cada centavo. Sem burocracia, sem justificativa.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEnrollOpen(true)}
                className="btn-shine block w-full py-6 px-8 rounded-2xl font-black text-sm transition-all uppercase tracking-[0.3em] font-heading bg-master-primary border-2 border-master-primary text-white hover:bg-master-accent hover:border-master-accent shadow-2xl shadow-master-primary/20 mb-4 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
              >
                Garantir minha vaga por 12x de R$34,70
              </button>
              <p className="text-master-light/25 text-xs mb-10">Acesso imediato. Pagamento único. Sem mensalidade.</p>

              <div className="h-px bg-white/5 mb-10"></div>

              <ul className="space-y-4 text-left">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-4 text-master-light/60 text-xs uppercase tracking-widest font-normal">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Formas de pagamento */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[9px] font-black text-master-slate/30 uppercase tracking-[0.4em] font-heading mb-4 text-center">Formas de Pagamento</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-xl p-4 bg-white/5 border border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-3.5 h-3.5 text-master-accent/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                      </svg>
                      <span className="text-[10px] font-black text-master-light/70 font-heading uppercase tracking-widest">Cartão de Crédito</span>
                    </div>
                    <p className="text-[11px] text-master-light/35 font-normal leading-relaxed">Parcele em até 12x. Todas as principais bandeiras aceitas.</p>
                  </div>
                  <div className="rounded-xl p-4 bg-white/5 border border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-3.5 h-3.5 text-master-accent/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <span className="text-[10px] font-black text-master-light/70 font-heading uppercase tracking-widest">Pix</span>
                    </div>
                    <p className="text-[11px] text-master-light/35 font-normal leading-relaxed">Pagamento à vista. Acesso liberado na hora.</p>
                  </div>
                </div>
                <p className="text-center text-[10px] text-master-light/25 font-normal">
                  Acesso liberado imediatamente após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-2 opacity-50 hover:opacity-80 transition-opacity duration-500">
            <img src="https://img.icons8.com/color/48/ffffff/visa.png" className="h-5" alt="Visa" />
            <img src="https://img.icons8.com/color/48/ffffff/mastercard.png" className="h-5" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/ffffff/pix.png" className="h-5" alt="Pix" />
          </div>
        </div>
      </section>

      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </>
  );
};

export default Pricing;
