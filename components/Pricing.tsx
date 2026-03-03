
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="preco" className="py-32 bg-master-deep text-white relative overflow-hidden scroll-mt-24">
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-master-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-master-accent font-black tracking-[0.5em] uppercase text-[10px] font-heading mb-4 block">Seu Próximo Passo</span>
          <h2 className="text-4xl font-black sm:text-6xl uppercase tracking-tighter font-heading leading-none">
            Investimento em sua <br/>
            <span className="text-master-primary italic font-light lowercase font-sans">Carreira</span> de Impacto
          </h2>
          <p className="mt-8 text-lg text-master-light/40 max-w-2xl mx-auto font-normal font-sans">
            Acesso exclusivo a metodologias de elite e ferramentas de Inteligência Artificial certificadas pela Revisa Master.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-12 rounded-[2.5rem] border transition-all duration-700 ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-[#0a2540] to-master-deep border-master-primary/30 shadow-[0_40px_100px_-20px_rgba(0,102,166,0.3)] scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-master-accent text-white px-8 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] font-heading shadow-xl">
                  Escolha Elite
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-2xl font-black mb-8 uppercase tracking-[0.1em] font-heading">{plan.name}</h3>
                <div className="flex flex-col">
                  <span className="text-white/20 line-through text-sm mb-2 font-heading tracking-widest">DE R$ {plan.originalPrice} POR</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-bold text-master-accent uppercase font-heading tracking-[0.2em]">12x</span>
                    <span className="text-7xl font-black tracking-tighter font-heading">R$ {(Number(plan.price) / 12).toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="text-xs text-master-light/30 mt-6 font-normal">Ou R$ {plan.price} à vista com condições especiais de lançamento.</p>
                </div>
              </div>

              <div className="h-px bg-white/5 mb-12"></div>

              <ul className="flex-grow space-y-6 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-master-light/60 font-normal">
                    <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
                    <span className="text-xs leading-relaxed uppercase tracking-widest">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => alert('Iniciando matrícula segura...')}
                className={`w-full py-6 px-8 rounded-2xl font-black text-sm transition-all uppercase tracking-[0.3em] font-heading border-2 ${
                  plan.recommended 
                    ? 'bg-master-primary border-master-primary text-white hover:bg-master-accent hover:border-master-accent shadow-2xl shadow-master-primary/20' 
                    : 'bg-transparent border-white/20 text-white hover:bg-white hover:text-master-deep'
                }`}
              >
                Garantir Matrícula
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://img.icons8.com/color/48/ffffff/visa.png" className="h-5" alt="Visa" />
                <img src="https://img.icons8.com/color/48/ffffff/mastercard.png" className="h-5" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/ffffff/pix.png" className="h-5" alt="Pix" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
