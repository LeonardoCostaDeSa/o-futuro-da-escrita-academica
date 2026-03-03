
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: "Metodologia Master", icon: "01", desc: "Estrutura baseada nos padrões de rigor das publicações de alto fator de impacto mundial." },
    { title: "IA como Copiloto", icon: "02", desc: "Controle intelectual absoluto enquanto delega tarefas repetitivas à inteligência de máquina." },
    { title: "Rastreabilidade", icon: "03", desc: "Protocolos rígidos para garantir citações verificáveis e dados com integridade total." },
    { title: "Ética Editorial", icon: "04", desc: "Total alinhamento com diretrizes Elsevier, Springer e Nature para uso ético de LLMs." },
  ];

  return (
    <section className="py-24 bg-master-offwhite/50 border-y border-master-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((f, i) => (
            <div key={i} className="relative group">
              <span className="absolute -top-6 -left-2 text-6xl font-black text-master-light opacity-50 font-heading select-none group-hover:text-master-accent/20 transition-colors">
                {f.icon}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="text-sm font-black text-master-deep mb-4 uppercase tracking-[0.2em] font-heading">{f.title}</h3>
                <p className="text-master-slate/70 text-sm leading-relaxed font-normal">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
