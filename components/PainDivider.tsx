
import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface PainDividerProps {
  message: string;
  caption?: string;
}

const PainDivider: React.FC<PainDividerProps> = ({ message, caption }) => {
  const { ref, isVisible } = useReveal({ threshold: 0.4 });

  const words = message.split(' ');

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-master-deep py-24 md:py-32 relative overflow-hidden border-y border-master-primary/10"
    >
      {/* Scan beam — varre horizontalmente */}
      <div className="pain-scan" aria-hidden="true" />

      {/* Aurora central pulsante */}
      <div
        aria-hidden="true"
        className="pain-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[160%] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(43,156,212,0.12) 0%, transparent 70%)' }}
      />

      {/* Blobs aurora laterais */}
      <div
        className="aurora-blob w-[35%] h-[200%] top-[-50%] left-[-10%]"
        style={{ '--aurora-duration': '16s', '--aurora-delay': '-3s', '--aurora-blur': '80px', backgroundColor: 'rgba(0,102,166,0.07)' } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        className="aurora-blob w-[30%] h-[200%] top-[-50%] right-[-8%]"
        style={{ '--aurora-duration': '20s', '--aurora-delay': '-9s', '--aurora-blur': '80px', backgroundColor: 'rgba(43,156,212,0.05)' } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* Aspa decorativa — watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[22rem] md:text-[30rem] leading-none font-black font-heading text-white/[0.02] -translate-y-16">
          "
        </span>
      </div>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">

        {/* Linha horizontal que se desenha */}
        <div
          className={`pain-line mx-auto mb-10 h-px w-full max-w-xs bg-master-accent ${isVisible ? 'visible' : ''}`}
        />

        <p
          className="text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.2] text-white/90 font-sans"
          role="text"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`pain-word${isVisible ? ' visible' : ''}`}
              style={{
                transitionDelay: `${150 + i * 90}ms`,
                marginRight: '0.28em',
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {caption && (
          <p
            className={`mt-12 text-[10px] text-master-accent/50 uppercase tracking-[0.45em] font-heading font-black reveal reveal-delay-7 ${isVisible ? 'visible' : ''}`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default PainDivider;
