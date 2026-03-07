
import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCursorGlow } from '../hooks/useCursorGlow';

const testimonials = [
  {
    quote: "Eu estava travada com a apresentação da banca do mestrado. O método da Dra. Gabriela me deu estrutura para organizar os argumentos e confiança para defender. Super didática, domina o assunto e entende a pressão que a gente sente. Gratidão!",
    name: "Luciene Luiza",
    role: "Mestrado",
    initials: "L.L.",
    color: "bg-purple-500",
    stars: 5,
  },
  {
    quote: "O método foi essencial no meu TCC. As orientações e a estrutura de escrita fizeram toda a diferença em cada etapa — da justificativa à conclusão. Me senti acompanhada durante todo o processo. Super atenciosa e dedicada. Recomendo muito!",
    name: "Karen Oliveira Barbosa",
    role: "TCC",
    initials: "K.O.",
    color: "bg-blue-500",
    stars: 5,
  },
  {
    quote: "Aprender o método da Dra. Gabriela foi a melhor decisão que tomei para o meu TCC. Me ajudou a passar por essa fase com muito mais tranquilidade e segurança. Eu ganhei nota 10 e o método foi parte integral disso. Recomendo de olhos fechados!",
    name: "Tarsila Ceruci",
    role: "TCC · Nota 10",
    initials: "T.C.",
    color: "bg-amber-500",
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  const gridRef = useCursorGlow<HTMLDivElement>('.card-glow');

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-master-deep text-white relative overflow-hidden"
    >
      {/* Aurora animada */}
      <div
        className="aurora-blob w-[55%] h-[120%] top-[-10%] left-[-15%]"
        style={{ '--aurora-duration': '18s', '--aurora-delay': '-5s', '--aurora-blur': '120px', backgroundColor: 'rgba(0,102,166,0.07)' } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        className="aurora-blob w-[40%] h-[100%] top-[-5%] right-[-10%]"
        style={{ '--aurora-duration': '22s', '--aurora-delay': '-11s', '--aurora-blur': '100px', backgroundColor: 'rgba(43,156,212,0.05)' } as React.CSSProperties}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="text-master-accent font-black tracking-[0.5em] uppercase text-[10px] font-heading mb-4 block">Resultados</span>
          <h2 className="text-3xl font-black sm:text-5xl uppercase tracking-tighter font-heading">
            O que muda quando o método entra
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card-float-dark card-glow relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/25 overflow-hidden reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
            >
              {/* Aspa decorativa */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/5 leading-none select-none font-heading">"</span>

              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-black font-heading">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white text-xs font-black font-heading">{t.name}</p>
                  <p className="text-master-accent text-[10px] font-black uppercase tracking-[0.2em] font-heading mt-0.5">{t.role}</p>
                </div>
              </div>

              {/* Estrelas */}
              <div className="flex gap-0.5 mb-4 relative z-10" aria-label={`${t.stars} de 5 estrelas`}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-master-light/80 leading-relaxed font-normal italic relative z-10">"{t.quote}"</p>
            </div>
          ))}
        </div>

        <div className={`text-center reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <a
            href="#preco"
            className="btn-shine inline-flex items-center justify-center px-14 py-5 text-xs font-black rounded-2xl text-white border-2 border-white hover:bg-white hover:text-master-deep transition-all uppercase tracking-[0.2em] font-heading focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2 focus-visible:ring-offset-master-deep"
          >
            Quero essa segurança também
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
