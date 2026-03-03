
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="sobre" className="relative pt-10 pb-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-master-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-master-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <h1 className="text-5xl tracking-tight font-black text-master-deep sm:text-7xl lg:text-8xl leading-[1.05] font-heading mb-6">
            A solidão acadêmica<br/>
            <span className="text-master-primary italic font-light lowercase font-sans">não é fraqueza sua.</span>
          </h1>

          <p className="text-xl md:text-2xl text-master-slate/60 leading-relaxed font-normal mb-10 max-w-3xl">
            Aprenda um método acadêmico sólido com Inteligência Artificial — preservando rigor, autoria e segurança diante de qualquer banca.
          </p>

          <div className="mb-16 flex flex-col items-center gap-3">
            <a
              href="#preco"
              className="flex items-center justify-center px-16 py-6 text-sm font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.4)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95"
            >
              Quero estruturar minha pesquisa
            </a>
            <span className="text-xs text-master-slate/40 font-normal">Acesso imediato após a inscrição.</span>
          </div>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mx-auto mb-20 px-4">
            <div className="relative aspect-video bg-master-deep rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(4,24,43,0.3)] border border-master-light group cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-master-deep via-master-slate/90 to-master-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-master-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-24 h-24 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post-video hook */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-master-slate/40 text-xs uppercase tracking-[0.4em] font-heading font-black mb-8">
              Se o vídeo fez sentido para você…
            </p>
            <p className="text-3xl md:text-4xl font-black text-master-deep leading-tight font-heading mb-4">
              Você não precisa de mais esforço.<br/>
              <span className="text-master-primary">Você precisa de estrutura.</span>
            </p>
            <p className="text-lg text-master-slate/50 mb-12">E estrutura pode ser aprendida.</p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="#preco"
                className="flex items-center justify-center px-14 py-5 text-sm font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95"
              >
                Quero aprender o método
              </a>
              <span className="text-xs text-master-slate/40 font-normal">Sem improviso. Sem atalhos.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
