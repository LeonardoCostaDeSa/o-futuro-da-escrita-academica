
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const outcomeGroups = [
  {
    label: 'Escrita',
    accentColor: 'border-l-master-primary',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    items: [
      "Nunca mais travar na primeira linha — do tema ao argumento em uma sessão",
      "Escrever com linguagem acadêmica rigorosa sem soar mecânico ou artificial",
      "Formatar e citar referências com precisão — em minutos, não em horas",
    ],
  },
  {
    label: 'Pesquisa',
    accentColor: 'border-l-master-accent',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    items: [
      "Ler e sintetizar referências com velocidade — sem se perder no excesso de fontes",
      "Organizar seus arquivos e materiais de pesquisa sem depender da memória",
      "Construir tabelas, análises e estruturas de dados com clareza e método",
    ],
  },
  {
    label: 'Defesa',
    accentColor: 'border-l-master-green',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.17-.576-4.207-1.598-5.964A11.959 11.959 0 0012 2.714z" />
      </svg>
    ),
    items: [
      "Justificativa e metodologia que resistem a qualquer questionamento de banca",
      "Defender na banca com segurança e clareza — sem surpresas, sem improvisos",
      "Usar IA como co-piloto de método — não como atalho que te expõe",
    ],
  },
];

const Features: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-master-offwhite/50 border-y border-master-light/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-master-accent"></span>
            <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">O método</span>
            <span className="h-px w-8 bg-master-accent"></span>
          </div>

          <h2 className="text-4xl font-black text-master-deep mb-4 font-heading uppercase tracking-tighter">
            O que muda quando você tem estrutura
          </h2>
          <p className="text-master-slate/60 mb-14 font-normal text-lg"></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left mb-14">
          {outcomeGroups.map((group, gi) => (
            <div
              key={gi}
              className={`reveal-left reveal-delay-${gi + 1} ${isVisible ? 'visible' : ''}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-master-primary/10 flex items-center justify-center text-master-primary flex-shrink-0">
                  {group.icon}
                </div>
                <h3 className="text-xs font-black text-master-deep uppercase tracking-[0.3em] font-heading">{group.label}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className={`card-float flex items-start gap-4 bg-white rounded-r-2xl rounded-bl-2xl rounded-tl-sm p-5 border border-master-light/30 border-l-[3px] ${group.accentColor} hover:shadow-md`}
                  >
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
                    <span className="text-master-slate/80 font-normal leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="text-master-slate/40 text-sm mb-10 font-normal italic">
            Sem depender de sorte. Sem depender de inspiração.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#preco"
              className="btn-shine inline-flex items-center justify-center px-14 py-5 text-xs font-black rounded-2xl text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
            >
              Quero parar de travar e escrever com método
            </a>
            <span className="text-xs text-master-slate/40 font-normal">Aplicável já na sua próxima sessão de escrita.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
