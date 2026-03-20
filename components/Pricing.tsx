
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import EnrollModal from './EnrollModal';

const benefits = [
  "Acesso vitalício a todos os 9 módulos + atualizações futuras",
  "3 bônus exclusivos incluídos sem custo adicional",
  "Aplicável agora: TCC, mestrado ou doutorado em qualquer área",
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
              Um método que você usa
            </h2>
            <h2 className="text-4xl font-black sm:text-5xl tracking-tighter font-heading leading-none mb-6">
              <span className="text-master-primary italic font-light lowercase font-sans">do TCC ao doutorado</span>
            </h2>
            <p className="text-master-light/40 mb-10 font-normal">Acesso completo ao curso por:</p>

            {/* Value anchor block */}
            <div className="border border-white/10 bg-white/5 rounded-t-none rounded-b-2xl p-6 mb-8 text-left">
              <p className="text-[9px] font-black text-master-accent uppercase tracking-[0.4em] font-heading mb-4">O que você leva</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center justify-between text-xs">
                  <span className="text-master-light/85 font-normal">Curso completo — 9 módulos</span>
                  <span className="text-master-light/40 line-through font-normal">R$347</span>
                </li>
                <li className="flex items-center justify-between text-xs">
                  <span className="text-master-light/85 font-normal">Bônus 01 — Checklist de Objetivo</span>
                  <span className="text-master-light/40 line-through font-normal">R$97</span>
                </li>
                <li className="flex items-center justify-between text-xs">
                  <span className="text-master-light/85 font-normal">Bônus 02 — E-book Hipóteses</span>
                  <span className="text-master-light/40 line-through font-normal">R$97</span>
                </li>
                <li className="flex items-center justify-between text-xs">
                  <span className="text-master-light/85 font-normal">Bônus 03 — Materiais Complementares</span>
                  <span className="text-master-light/40 line-through font-normal">R$97</span>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-master-light/50 font-heading uppercase tracking-wider">Total em conteúdo</span>
                  <span className="inline-flex items-center bg-master-green/15 border border-master-green/30 rounded-full px-2.5 py-0.5 text-[9px] font-black text-master-green uppercase tracking-wider font-heading">-46%</span>
                </div>
                <div className="text-right">
                  <span className="text-master-light/40 line-through text-sm mr-2">R$638</span>
                  <span className="text-master-accent font-black text-sm font-heading">R$347</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative bg-gradient-to-b from-[#0a2540] to-master-deep border border-master-primary/30 rounded-[2.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,102,166,0.3)] mb-8 reveal-scale reveal-delay-1 overflow-hidden ${isVisible ? 'visible' : ''}`}>
            {/* Aurora interna ao card */}
            <div
              className="aurora-blob w-[70%] h-[70%] top-[-20%] right-[-15%]"
              style={{ '--aurora-duration': '14s', '--aurora-delay': '-3s', '--aurora-blur': '80px', backgroundColor: 'rgba(43,156,212,0.07)' } as React.CSSProperties}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-6">
                {/* Badge de lançamento */}
                <div className="inline-flex items-center gap-1.5 bg-master-gold/15 border border-master-gold/30 rounded-full px-4 py-1.5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-master-gold animate-pulse"></div>
                  <span className="text-[10px] font-black text-master-gold uppercase tracking-[0.2em] font-heading">Preço de lançamento</span>
                </div>

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

              <a
                href="https://pay.hotmart.com/O104206161Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine block w-full py-6 px-8 rounded-2xl font-black text-sm transition-all uppercase tracking-[0.3em] font-heading bg-master-primary border-2 border-master-primary text-white hover:bg-master-accent hover:border-master-accent shadow-2xl shadow-master-primary/20 mb-4 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2 text-center"
              >
                Quero começar agora — 12x de R$34,70
              </a>
              <div className="flex items-center justify-center gap-1.5 text-master-light/60 mb-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span className="text-xs">Compra segura · Acesso imediato · Sem mensalidade</span>
              </div>
              <p className="text-master-light/50 text-xs mb-10 font-normal">Mais de 300 pesquisadores já aplicaram este método. Sua vez.</p>

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

          <div className="flex items-center justify-center gap-3 mt-2 opacity-40 hover:opacity-70 transition-opacity duration-500" aria-hidden="true">
            <span className="text-[10px] font-black text-master-light/60 font-heading tracking-wider">VISA</span>
            <span className="text-master-light/20">·</span>
            <span className="text-[10px] font-black text-master-light/60 font-heading tracking-wider">MASTERCARD</span>
            <span className="text-master-light/20">·</span>
            <span className="text-[10px] font-black text-master-light/60 font-heading tracking-wider">PIX</span>
          </div>
        </div>
      </section>

      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </>
  );
};

export default Pricing;
