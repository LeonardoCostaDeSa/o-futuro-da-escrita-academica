
import React from 'react';

const notFor = [
  "Quer copiar e colar texto pronto",
  'Procura "prompt mágico"',
  "Quer terminar o trabalho sem entender o que está fazendo",
  "Não está disposto a revisar criticamente o próprio texto",
];

const forYou = [
  "Autonomia",
  "Clareza",
  "Estrutura",
  "Segurança real na banca",
];

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-master-offwhite rounded-3xl p-10 border border-master-light/50">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-master-slate/40 font-heading mb-8">
              Este curso NÃO é para quem:
            </h3>
            <ul className="space-y-5">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-master-slate/60 text-sm leading-relaxed">
                  <span className="mt-0.5 text-master-slate/20 font-black flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-master-deep rounded-3xl p-10 text-white">
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
              className="inline-flex items-center justify-center w-full px-8 py-4 text-xs font-black rounded-full text-white bg-master-primary hover:bg-master-accent transition-all uppercase tracking-[0.2em] font-heading"
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
