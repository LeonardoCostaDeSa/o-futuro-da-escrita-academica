
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const benefits = [
  "Acesso completo às aulas",
  "Atualizações incluídas",
  "Aplicável em qualquer área acadêmica",
];

const Pricing: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      id="preco"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-master-deep text-white relative overflow-hidden scroll-mt-24"
    >
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-master-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-master-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

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

        <div className={`bg-gradient-to-b from-[#0a2540] to-master-deep border border-master-primary/30 rounded-[2.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,102,166,0.3)] mb-8 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
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

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); alert('Iniciando matrícula segura...'); }}
            className="block w-full py-6 px-8 rounded-2xl font-black text-sm transition-all uppercase tracking-[0.3em] font-heading bg-master-primary border-2 border-master-primary text-white hover:bg-master-accent hover:border-master-accent shadow-2xl shadow-master-primary/20 mb-4 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
          >
            Garantir minha vaga por 12x de R$34,70
          </a>
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
        </div>

        <div className="flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://img.icons8.com/color/48/ffffff/visa.png" className="h-5" alt="Visa" />
          <img src="https://img.icons8.com/color/48/ffffff/mastercard.png" className="h-5" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/ffffff/pix.png" className="h-5" alt="Pix" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
