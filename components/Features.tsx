
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const learningOutcomes = [
  "Nunca mais ficar em círculos — seu objetivo de pesquisa em uma frase",
  "Justificativa e metodologia que resistem a qualquer pergunta de banca",
  "Usar IA sem medo — cada fonte verificável, cada argumento sustentável",
  "Nunca citar fonte que não existe — e saber provar cada linha",
  "Seu texto, sua autoria — a IA como ferramenta, não como autor",
  "Formatar em minutos, não em horas — sem perder o controle",
  "Defender na banca com clareza, sem pânico, sem surpresa",
];

const Features: React.FC = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-master-offwhite/50 border-y border-master-light/50 reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-8 bg-master-accent"></span>
          <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">O método</span>
          <span className="h-px w-8 bg-master-accent"></span>
        </div>

        <h2 className="text-4xl font-black text-master-deep mb-4 font-heading uppercase tracking-tighter">
          O que você vai dominar aqui
        </h2>
        <p className="text-master-slate/60 mb-14 font-normal text-lg">Você vai aprender a:</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-14">
          {learningOutcomes.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-4 bg-white rounded-2xl p-6 border border-master-light/50 hover:border-master-accent/30 hover:shadow-sm transition-all reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
            >
              <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
              <span className="text-master-slate/80 font-normal leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-master-slate/40 text-sm mb-10 font-normal italic">
          Sem depender de sorte. Sem depender de inspiração.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href="#preco"
            className="inline-flex items-center justify-center px-14 py-5 text-xs font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
          >
            Quero fazer do jeito certo
          </a>
          <span className="text-xs text-master-slate/40 font-normal">Aplicável já na sua próxima sessão de escrita.</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
