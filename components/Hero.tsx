
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="sobre" className="relative pt-10 pb-24 bg-white overflow-hidden min-h-[calc(100vh-6rem)] flex items-center scroll-mt-24">
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-master-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-master-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge com animação de item valioso */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white border border-master-light text-master-primary text-[10px] font-black mb-10 uppercase tracking-[0.4em] font-heading shadow-sm animate-valuable-glow transition-all duration-700">
            <span className="flex h-2 w-2 rounded-full bg-master-accent shadow-[0_0_10px_#2b9cd4] animate-pulse"></span>
            Padrão USP de Excelência Acadêmica
          </div>
          
          <h1 className="text-6xl tracking-tight font-black text-master-deep sm:text-8xl lg:text-9xl leading-[0.95] font-heading uppercase mb-12">
            O Futuro da <br/>
            <span className="text-master-primary italic font-light lowercase font-sans block mt-4">escrita</span>
            Acadêmica
          </h1>

          {/* Video Placeholder Section */}
          <div className="w-full max-w-4xl mx-auto mb-16 px-4">
            <div className="relative aspect-video bg-master-deep rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(4,24,43,0.3)] border border-master-light group cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-master-deep via-master-slate/90 to-master-primary/20"></div>
              
              {/* Overlay Decorativo */}
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
              
              {/* Label inferior do vídeo */}
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-master-primary border-2 border-master-deep flex items-center justify-center text-[8px] font-bold text-white">USP</div>
                  <div className="w-8 h-8 rounded-full bg-master-accent border-2 border-master-deep flex items-center justify-center text-[8px] font-bold text-white">IA</div>
                </div>
                <span className="text-[10px] text-white/50 font-black uppercase tracking-widest font-heading">Apresentação Estratégica</span>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-master-slate/60 leading-relaxed font-normal italic font-sans">
              "Domine o uso da Inteligência Artificial sob a ótica do rigor científico. Um método exclusivo para pesquisadores que não abrem mão da integridade e da qualidade."
            </p>
            <div className="mt-12 h-px w-32 bg-master-accent/20 mx-auto"></div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="#preco" 
              className="w-full sm:w-auto flex items-center justify-center px-20 py-7 text-xs font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.4)] uppercase tracking-[0.3em] font-heading hover:scale-105 active:scale-95"
            >
              Garantir Vaga de Elite
            </a>
            <a 
              href="#modulos" 
              className="w-full sm:w-auto flex items-center justify-center px-16 py-7 border border-master-light text-xs font-black rounded-full text-master-slate bg-white/50 backdrop-blur hover:bg-master-offwhite transition-all uppercase tracking-[0.3em] font-heading"
            >
              Explorar Conteúdo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
