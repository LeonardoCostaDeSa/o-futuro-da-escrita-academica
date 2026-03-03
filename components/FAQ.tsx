
import React, { useState } from 'react';

const faqs = [
  {
    q: "Nunca usei IA. Vou conseguir acompanhar?",
    a: "Sim. Você aprende desde os fundamentos até aplicação prática com método.",
  },
  {
    q: "A banca pode questionar o uso de IA?",
    a: "Você aprende a trabalhar com rastreabilidade, auditoria e responsabilidade autoral. O método existe justamente para evitar esse risco.",
  },
  {
    q: "Funciona para qualquer área?",
    a: "Sim. O método é estruturante — não depende de área específica.",
  },
  {
    q: "É só para pós-graduação?",
    a: "Não. Funciona para TCC, mestrado e doutorado.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-master-offwhite/50 border-t border-master-light/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading mb-4 block">Dúvidas</span>
          <h2 className="text-3xl font-black text-master-deep font-heading uppercase tracking-tighter">
            Perguntas importantes antes de decidir
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-master-light/50 overflow-hidden hover:border-master-accent/30 transition-colors"
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-black text-master-deep text-sm font-heading">{faq.q}</span>
                <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-master-light text-master-primary transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-8 pb-6">
                  <p className="text-master-slate/70 text-sm leading-relaxed font-normal">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
