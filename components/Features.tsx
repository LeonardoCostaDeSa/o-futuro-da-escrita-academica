
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const learningOutcomes = [
  "Escrever TCC e dissertações com apoio de Inteligência Artificial",
  "Criar projetos de pesquisa com estrutura clara e IA",
  "Escrever artigos científicos com linguagem acadêmica rigorosa",
  "Analisar artigos e fontes bibliográficas com apoio de IA",
  "Organizar arquivos e fontes da pesquisa com eficiência",
  "Construir tabelas e estruturas de análise de dados",
  "Organizar referências bibliográficas com precisão",
  "Estruturar e defender argumentos acadêmicos com IA",
  "Relacionar autores, conceitos e teorias de forma coerente",
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
            O que você vai dominar aqui
          </h2>
          <p className="text-master-slate/60 mb-14 font-normal text-lg">Você vai aprender a:</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left mb-14">
          {learningOutcomes.map((item, i) => (
            <li
              key={i}
              className={`card-float flex items-start gap-4 bg-white rounded-2xl p-6 border border-master-light/50 hover:border-master-accent/30 reveal reveal-delay-${Math.min(i + 1, 7)} ${isVisible ? 'visible' : ''}`}
            >
              <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
              <span className="text-master-slate/80 font-normal leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className={`reveal reveal-delay-7 ${isVisible ? 'visible' : ''}`}>
          <p className="text-master-slate/40 text-sm mb-10 font-normal italic">
            Sem depender de sorte. Sem depender de inspiração.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#preco"
              className="btn-shine inline-flex items-center justify-center px-14 py-5 text-xs font-black rounded-2xl text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
            >
              Quero fazer do jeito certo
            </a>
            <span className="text-xs text-master-slate/40 font-normal">Aplicável já na sua próxima sessão de escrita.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
