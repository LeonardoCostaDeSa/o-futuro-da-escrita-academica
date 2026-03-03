
import React from 'react';

const testimonials = [
  {
    quote: "Eu estava travada há meses no mestrado. Depois que organizei objetivo e metodologia com o método, o texto finalmente começou a fluir.",
    role: "Mestrado, Psicologia",
  },
  {
    quote: "Eu usava IA, mas morria de medo de estar fazendo errado. Hoje eu sei como validar cada etapa.",
    role: "Doutorado, Engenharia",
  },
  {
    quote: "O curso não facilita o trabalho. Ele organiza o trabalho. E isso muda tudo.",
    role: "TCC, Direito",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-master-deep text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-master-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-master-accent font-black tracking-[0.5em] uppercase text-[10px] font-heading mb-4 block">Resultados</span>
          <h2 className="text-3xl font-black sm:text-5xl uppercase tracking-tighter font-heading">
            O que muda quando o método entra
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
              <p className="text-master-light/80 leading-relaxed font-normal mb-6 italic">"{t.quote}"</p>
              <p className="text-master-accent text-xs font-black uppercase tracking-[0.2em] font-heading">— {t.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#preco"
            className="inline-flex items-center justify-center px-14 py-5 text-xs font-black rounded-full text-white border-2 border-white hover:bg-white hover:text-master-deep transition-all uppercase tracking-[0.2em] font-heading"
          >
            Quero essa segurança também
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
