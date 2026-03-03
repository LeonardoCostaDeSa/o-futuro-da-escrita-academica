
import React, { useEffect, useRef, useState } from 'react';

const HEADLINE_LINE1 = 'A solidão acadêmica';
const HEADLINE_LINE2 = 'não é fraqueza sua.';

const socialProof = [
  { value: '300+', label: 'pesquisadores formados' },
  { value: 'TCC · Mestrado · Doutorado', label: '' },
  { value: '3 anos', label: 'aplicando IA na academia' },
];

const Hero: React.FC = () => {
  const [wordsVisible, setWordsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Word-reveal ao montar (above the fold — sem IntersectionObserver)
  useEffect(() => {
    const t = setTimeout(() => setWordsVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Esconde scroll cue após primeiro scroll
  useEffect(() => {
    const handleScroll = () => { if (window.scrollY > 60) setScrolled(true); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderWords = (text: string, startDelay: number) =>
    text.split(' ').map((word, i) => (
      <span
        key={i}
        className={`word${wordsVisible ? ' visible' : ''}`}
        style={{ transitionDelay: `${startDelay + i * 70}ms`, marginRight: '0.25em' }}
      >
        {word}
      </span>
    ));

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative pt-12 pb-24 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-master-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-master-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* H1 com word-reveal */}
          <h1 className="text-5xl tracking-tight font-black text-master-deep sm:text-7xl lg:text-8xl leading-[1.05] font-heading mb-6" aria-label={`${HEADLINE_LINE1} ${HEADLINE_LINE2}`}>
            <span className="block">{renderWords(HEADLINE_LINE1, 0)}</span>
            <span className="block text-master-primary italic font-light lowercase font-sans mt-2">
              {renderWords(HEADLINE_LINE2, HEADLINE_LINE1.split(' ').length * 70 + 80)}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-master-slate/60 leading-relaxed font-normal mb-10 max-w-3xl">
            Aprenda um método acadêmico sólido com Inteligência Artificial — preservando rigor, autoria e segurança diante de qualquer banca.
          </p>

          {/* Social Proof Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14">
            {socialProof.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-px h-4 bg-master-light/80"></span>}
                <span className="text-sm font-black text-master-deep font-heading">{item.value}</span>
                {item.label && <span className="text-xs text-master-slate/50 font-normal">{item.label}</span>}
              </div>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mx-auto mb-20 px-4">
            <div className="relative aspect-video bg-master-deep rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(4,24,43,0.3)] border border-master-light group cursor-pointer transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-master-deep via-master-slate/90 to-master-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-master-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-24 h-24 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest font-heading">Apresentação do Método</span>
                <span className="text-[10px] text-white/30 font-normal">▶ Assista antes de decidir</span>
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
                className="flex items-center justify-center px-14 py-5 text-sm font-black rounded-full text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
              >
                Quero aprender o método
              </a>
              <span className="text-xs text-master-slate/40 font-normal">Sem improviso. Sem atalhos.</span>
            </div>
          </div>

          {/* Scroll Cue */}
          <div
            className={`mt-16 flex flex-col items-center gap-2 scroll-cue-fade ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-hidden="true"
          >
            <span className="text-[9px] text-master-slate/30 uppercase tracking-[0.4em] font-heading font-black">Continue lendo</span>
            <div className="animate-bounce-slow text-master-slate/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
