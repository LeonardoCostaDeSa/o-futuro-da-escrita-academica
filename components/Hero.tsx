
import React, { useEffect, useRef, useState } from 'react';

const HEADLINE_LINE1 = 'Pare de travar na escrita acadêmica';
const HEADLINE_LINE2 = 'Escreva como pesquisador, defenda com mérito';

const VIDEO_ID = 'uupDGYEfMsQ';
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const VIDEO_EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&autoplay=1&playsinline=1&disablekb=0&fs=1`;

const Hero: React.FC = () => {
  const [wordsVisible, setWordsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

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

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Mobile: solicita fullscreen no container após o iframe carregar
    const isMobile = window.innerWidth < 768;
    if (isMobile && videoContainerRef.current) {
      setTimeout(() => {
        const el = videoContainerRef.current;
        if (!el) return;
        if (el.requestFullscreen) {
          el.requestFullscreen().catch(() => {/* silently ignore */});
        } else if ((el as unknown as Record<string, unknown>)['webkitRequestFullscreen']) {
          (el as unknown as { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
        }
      }, 400);
    }
  };

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
      {/* Background Decorativo — Aurora animada */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob w-[55%] h-[55%] bg-master-primary/10 top-[-18%] right-[-8%]"
          style={{ '--aurora-duration': '18s', '--aurora-delay': '0s', '--aurora-blur': '130px' } as React.CSSProperties}
        />
        <div
          className="aurora-blob w-[42%] h-[42%] bottom-[-12%] left-[-8%]"
          style={{ '--aurora-duration': '22s', '--aurora-delay': '-8s', '--aurora-blur': '110px', backgroundColor: 'rgba(43,156,212,0.05)' } as React.CSSProperties}
        />
        <div
          className="aurora-blob w-[28%] h-[28%] top-[40%] left-[22%]"
          style={{ '--aurora-duration': '14s', '--aurora-delay': '-4s', '--aurora-blur': '90px', backgroundColor: 'rgba(0,102,166,0.04)' } as React.CSSProperties}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="h-px w-6 bg-master-accent/60"></span>
            <span className="text-[10px] font-black text-master-primary uppercase tracking-[0.45em] font-heading">Curso de Escrita Acadêmica com IA</span>
            <span className="h-px w-6 bg-master-accent/60"></span>
          </div>

          {/* H1 — nome do curso com word-reveal */}
          <h1
            className="text-5xl tracking-tight font-black text-master-deep sm:text-7xl lg:text-8xl leading-[1.05] font-heading mb-6"
            aria-label={`${HEADLINE_LINE1} ${HEADLINE_LINE2}`}
          >
            <span className="block">{renderWords(HEADLINE_LINE1, 0)}</span>
            <span className="block text-master-primary italic font-light lowercase font-sans mt-2 text-4xl sm:text-5xl lg:text-6xl">
              {renderWords(HEADLINE_LINE2, HEADLINE_LINE1.split(' ').length * 70 + 80)}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-master-slate/80 leading-relaxed font-normal mb-8 max-w-2xl">
            Sem tempo, sem orientação, sem saber por onde começar? O método que já ajudou 300+ pesquisadores a escrever com clareza, rigor e segurança.
          </p>

          {/* CTA primário — acima do fold no mobile */}
          <div id="hero-cta" className="flex flex-col items-center gap-3 mb-14">
            <a
              href="https://pay.hotmart.com/O104206161Q" target="_blank" rel="noopener noreferrer"
              className="btn-shine flex items-center justify-center px-14 py-5 text-sm font-black rounded-2xl text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
            >
              Quero escrever com método
            </a>
            <span className="text-xs text-master-slate/40 font-normal">12x de R$35,89 · Acesso imediato</span>
          </div>

          {/* Vídeo */}
          <div className="w-full max-w-4xl mx-auto mb-10 px-4">
            <div
              ref={videoContainerRef}
              className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(4,24,43,0.3)] border border-master-light bg-black"
            >
              {isPlaying ? (
                <>
                  <iframe
                    src={VIDEO_EMBED}
                    title="Apresentação do Método — Escrita Acadêmica com IA"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                  {/* Overlay transparente que bloqueia o logo do YouTube (canto inf. direito) */}
                  <div
                    className="absolute bottom-0 right-0 z-10 pointer-events-auto"
                    style={{ width: '130px', height: '42px' }}
                    aria-hidden="true"
                  />
                </>
              ) : (
                /* Facade — thumbnail + botão de play customizado */
                <button
                  onClick={handlePlayVideo}
                  className="group absolute inset-0 w-full h-full flex items-center justify-center focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
                  aria-label="Assistir apresentação do método"
                >
                  {/* Thumbnail YouTube */}
                  <img
                    src={VIDEO_THUMB}
                    alt="Thumbnail do vídeo — Apresentação do Método com IA"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width="1280"
                    height="720"
                  />
                  {/* Gradiente sobre a thumbnail */}
                  <div className="absolute inset-0 bg-master-deep/40 group-hover:bg-master-deep/20 transition-colors duration-300" />
                  {/* Botão play */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-master-primary shadow-[0_0_40px_rgba(0,102,166,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(0,102,166,0.7)] transition-all duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-white/70 font-black uppercase tracking-[0.35em] font-heading">
                      Assistir apresentação
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Social Proof — Bloco de Autoridade */}
          <div className="w-full max-w-2xl mx-auto mb-16">
            <p className="text-[9px] text-master-slate/30 uppercase tracking-[0.5em] font-heading font-black text-center mb-4">
              Método com resultados comprovados
            </p>
            <div className="grid grid-cols-3 divide-x divide-master-light/70 bg-master-offwhite/70 border border-master-light/70 rounded-t-none rounded-b-2xl overflow-hidden shadow-sm">
              <div className="py-6 px-3 md:px-5 text-center">
                <p className="text-3xl md:text-4xl font-black text-master-deep font-heading tracking-tight leading-none mb-2">300+</p>
                <p className="text-[10px] text-master-slate/55 font-normal leading-snug">pesquisadores<br/>formados</p>
              </div>
              <div className="py-6 px-3 md:px-5 text-center flex flex-col items-center justify-center">
                <p className="text-xs font-black text-master-primary font-heading tracking-[0.08em] uppercase leading-tight mb-2">TCC · Mestrado<br/>Doutorado</p>
                <p className="text-[10px] text-master-slate/55 font-normal leading-snug">todos os níveis acadêmicos</p>
              </div>
              <div className="py-6 px-3 md:px-5 text-center">
                <p className="text-3xl md:text-4xl font-black text-master-deep font-heading tracking-tight leading-none mb-2">3 anos</p>
                <p className="text-[10px] text-master-slate/55 font-normal leading-snug">aplicando IA<br/>na academia</p>
              </div>
            </div>
          </div>

          {/* Post-video hook */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-master-slate/40 text-xs uppercase tracking-[0.4em] font-heading font-black mb-8">
              A verdade que ninguém te conta na academia
            </p>
            <p className="text-3xl md:text-4xl font-black text-master-deep leading-tight font-heading mb-4">
              Você não precisa de mais esforço.<br/>
              <span className="text-master-primary">Você precisa de estrutura.</span>
            </p>
            <p className="text-lg text-master-slate/50 mb-12">E estrutura pode ser aprendida.</p>
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
