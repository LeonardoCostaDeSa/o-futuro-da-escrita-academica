
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const notFor = [
  "Quer copiar e colar texto pronto",
  'Procura "prompt mágico"',
  "Quer terminar o trabalho sem entender o que está fazendo",
  "Não está disposto a revisar criticamente o próprio texto",
];

const forYou = [
  "Autonomia sobre cada linha que você escreve",
  "Clareza sobre objetivo, método e argumento",
  "Estrutura que resiste a qualquer pergunta de banca",
  "Segurança real — antes, durante e depois da defesa",
];

const Audience: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-master-accent"></span>
            <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">Para quem é</span>
            <span className="h-px w-8 bg-master-accent"></span>
          </div>
          <h2 className="text-4xl font-black text-master-deep font-heading uppercase tracking-tighter">
            Antes de continuar, seja honesto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Não é para quem */}
          <div className={`bg-master-offwhite rounded-3xl p-10 border border-master-light/50 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-master-slate/40 font-heading mb-8">
              Este curso NÃO é para quem:
            </h3>
            <ul className="space-y-5">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-master-slate/60 text-sm leading-relaxed">
                  <span className="mt-0.5 text-master-slate/25 font-black flex-shrink-0 text-base">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* É para quem */}
          <div className={`bg-master-deep rounded-3xl p-10 text-white reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-master-accent font-heading mb-8">
              Este curso é para quem quer:
            </h3>
            <ul className="space-y-5 mb-10">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-master-light/80 text-sm leading-relaxed">
                  <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-accent shadow-[0_0_8px_rgba(43,156,212,0.8)]"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#preco"
              className="btn-shine inline-flex items-center justify-center w-full px-8 py-4 text-xs font-black rounded-2xl text-white bg-master-primary hover:bg-master-accent transition-all uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
            >
              Quero fazer parte desse grupo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
