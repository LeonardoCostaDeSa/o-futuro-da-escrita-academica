
import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface PainDividerProps {
  message: string;
  caption?: string;
}

const PainDivider: React.FC<PainDividerProps> = ({ message, caption }) => {
  const { ref, isVisible } = useReveal({ threshold: 0.45 });

  const words = message.split(' ');

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-master-deep py-20 md:py-28 relative overflow-hidden border-y border-master-primary/10"
    >
      {/* Aspa decorativa gigante — watermark de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[28rem] leading-none font-black font-heading text-white/[0.025] -translate-y-16">
          "
        </span>
      </div>

      {/* Glow radial sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(43,156,212,0.06),transparent)] pointer-events-none"
      ></div>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-light italic leading-relaxed text-white/85 font-sans" role="text">
          {words.map((word, i) => (
            <span
              key={i}
              className={`pain-word${isVisible ? ' visible' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                marginRight: '0.3em',
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {caption && (
          <p
            className={`mt-10 text-[10px] text-master-accent/50 uppercase tracking-[0.45em] font-heading font-black reveal reveal-delay-7 ${isVisible ? 'visible' : ''}`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default PainDivider;
