
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const FinalCTA: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-master-deep text-white relative overflow-hidden"
    >
      {/* Background decorativo — Aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob w-[65%] h-[90%] top-[-20%] left-1/2 -translate-x-1/2"
          style={{ '--aurora-duration': '16s', '--aurora-delay': '0s', '--aurora-blur': '140px', backgroundColor: 'rgba(0,102,166,0.12)' } as React.CSSProperties}
        />
        <div
          className="aurora-blob w-[35%] h-[60%] bottom-[-10%] right-[-5%]"
          style={{ '--aurora-duration': '20s', '--aurora-delay': '-7s', '--aurora-blur': '100px', backgroundColor: 'rgba(43,156,212,0.06)' } as React.CSSProperties}
        />
        <div
          className="aurora-blob w-[25%] h-[50%] bottom-[-5%] left-[5%]"
          style={{ '--aurora-duration': '24s', '--aurora-delay': '-12s', '--aurora-blur': '80px', backgroundColor: 'rgba(43,156,212,0.04)' } as React.CSSProperties}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-100"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="h-px w-8 bg-master-accent/50"></span>
            <span className="text-master-accent font-black tracking-[0.4em] uppercase text-[10px] font-heading">Última chance</span>
            <span className="h-px w-8 bg-master-accent/50"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-heading uppercase tracking-tighter leading-[1.05] mb-6 text-white">
            Você pode continuar<br/>
            <span className="text-white/55 font-light italic lowercase font-sans">improvisando.</span>
          </h2>

          <p className="text-2xl sm:text-3xl font-black font-heading text-white mb-4 leading-tight">
            Ou pode defender seu trabalho<br/>
            <span className="text-master-accent">com estrutura.</span>
          </p>

          <p className="text-master-light/40 text-base font-normal mb-14 max-w-xl mx-auto leading-relaxed">
            A diferença não é talento. É método. E método pode ser aprendido — agora.
          </p>
        </div>

        <div className={`flex flex-col items-center gap-4 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://pay.hotmart.com/O104206161Q" target="_blank" rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center px-16 py-6 text-sm font-black rounded-2xl text-white bg-master-primary hover:bg-master-accent transition-all shadow-[0_20px_60px_-10px_rgba(0,102,166,0.5)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2 focus-visible:ring-offset-master-deep"
          >
            Quero garantir minha vaga agora
          </a>

          {/* Linha de garantia */}
          <p className="text-master-light/30 text-xs font-normal tracking-wide">
            7 dias de garantia · Acesso imediato · Sem mensalidade
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
