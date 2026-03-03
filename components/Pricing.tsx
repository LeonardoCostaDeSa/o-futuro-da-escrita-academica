
import React from 'react';

const benefits = [
  "7 dias de garantia",
  "Acesso completo às aulas",
  "Atualizações incluídas",
  "Aplicável em qualquer área acadêmica",
];

const Pricing: React.FC = () => {
  return (
    <section id="preco" className="py-32 bg-master-deep text-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-master-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-master-accent font-black tracking-[0.5em] uppercase text-[10px] font-heading mb-4 block">Investimento</span>
        <h2 className="text-4xl font-black sm:text-5xl uppercase tracking-tighter font-heading leading-none mb-4">
          Seu investimento para
        </h2>
        <h2 className="text-4xl font-black sm:text-5xl tracking-tighter font-heading leading-none mb-6">
          <span className="text-master-primary italic font-light lowercase font-sans">dominar o método</span>
        </h2>
        <p className="text-master-light/40 mb-16 font-normal">Acesso completo ao curso por:</p>

        <div className="bg-gradient-to-b from-[#0a2540] to-master-deep border border-master-primary/30 rounded-[2.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,102,166,0.3)] mb-8">
          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-[10px] font-bold text-master-accent uppercase font-heading tracking-[0.2em]">12x</span>
              <span className="text-7xl font-black tracking-tighter font-heading">R$34,70</span>
            </div>
            <p className="text-master-light/40 text-sm">ou R$347 à vista</p>
          </div>

          <p className="text-master-light/50 text-sm leading-relaxed mb-10 max-w-sm mx-auto font-normal">
            Um investimento único para aprender um sistema que você pode usar do TCC ao doutorado.
          </p>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); alert('Iniciando matrícula segura...'); }}
            className="block w-full py-6 px-8 rounded-2xl font-black text-sm transition-all uppercase tracking-[0.3em] font-heading bg-master-primary border-2 border-master-primary text-white hover:bg-master-accent hover:border-master-accent shadow-2xl shadow-master-primary/20 mb-4"
          >
            Garantir minha vaga por 12x de R$34,70
          </a>
          <p className="text-master-light/25 text-xs mb-10">Acesso imediato. Pagamento único. Sem mensalidade.</p>

          <div className="h-px bg-white/5 mb-10"></div>

          <ul className="space-y-4 text-left">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-4 text-master-light/60 text-xs uppercase tracking-widest font-normal">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-accent shadow-[0_0_10px_rgba(43,156,212,0.8)]"></div>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://img.icons8.com/color/48/ffffff/visa.png" className="h-5" alt="Visa" />
          <img src="https://img.icons8.com/color/48/ffffff/mastercard.png" className="h-5" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/ffffff/pix.png" className="h-5" alt="Pix" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
