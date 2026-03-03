
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-master-deep font-heading uppercase tracking-tighter mb-6">
          A escolha é simples
        </h2>
        <p className="text-master-slate/50 text-lg mb-2 font-normal">Você pode continuar improvisando.</p>
        <p className="text-master-deep font-bold text-lg mb-14">Ou pode escolher estrutura.</p>
        <a
          href="#preco"
          className="inline-flex items-center justify-center px-16 py-6 text-sm font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.4)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95"
        >
          Quero garantir minha vaga agora
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
