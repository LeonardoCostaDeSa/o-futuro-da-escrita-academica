
import React, { useEffect, useRef } from 'react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Fechar com ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Travar scroll do body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay-in fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-master-deep/85 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Confirmar matrícula"
    >
      <div className="modal-spring-in relative bg-white rounded-[2rem] w-full max-w-md shadow-[0_50px_120px_-20px_rgba(4,24,43,0.5)] overflow-hidden">

        {/* Header */}
        <div className="bg-master-deep px-8 pt-10 pb-8 relative overflow-hidden">
          {/* Aurora decorativa no header */}
          <div
            className="absolute top-[-30%] right-[-10%] w-[60%] h-[180%] rounded-full opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(43,156,212,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }}
            aria-hidden="true"
          />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all focus-visible:ring-2 focus-visible:ring-master-accent"
            aria-label="Fechar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative z-10">
            <span className="text-master-accent text-[9px] font-black uppercase tracking-[0.4em] font-heading block mb-3">Matrícula Segura</span>
            <h3 className="text-2xl font-black text-white font-heading uppercase tracking-tighter leading-tight">
              Escrita Acadêmica<br/>
              <span className="text-master-accent italic font-light lowercase font-sans text-xl">com Inteligência Artificial</span>
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {/* Preço */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-[10px] font-black text-master-accent uppercase tracking-[0.2em] font-heading">12x</span>
            <span className="text-5xl font-black text-master-deep tracking-tighter font-heading">R$35,89</span>
          </div>
          <p className="text-master-slate/50 text-sm mb-8">ou R$347 à vista no Pix</p>

          {/* Formas de pagamento */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="rounded-2xl p-4 bg-master-offwhite border border-master-light/60 text-center">
              <p className="text-[10px] font-black text-master-deep uppercase tracking-widest font-heading mb-1">Cartão</p>
              <p className="text-xs text-master-slate/50 font-normal">Até 12x sem juros</p>
            </div>
            <div className="rounded-2xl p-4 bg-master-offwhite border border-master-light/60 text-center">
              <p className="text-[10px] font-black text-master-deep uppercase tracking-widest font-heading mb-1">Pix</p>
              <p className="text-xs text-master-slate/50 font-normal">Acesso na hora</p>
            </div>
          </div>

          {/* Garantia */}
          <div className="flex items-center gap-4 bg-master-accent/5 border border-master-accent/20 rounded-2xl p-4 mb-8">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-master-accent/10 rounded-xl">
              <svg className="w-4 h-4 text-master-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12 1.716 0 3.348-.361 4.83-1.012a11.951 11.951 0 003.172-2.134c.328-.328.629-.678.9-1.05A11.96 11.96 0 0021 12c0-6.627-5.373-12-12-12a11.94 11.94 0 00-5.402 1.286z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-master-deep font-heading">Garantia de 7 dias</p>
              <p className="text-[11px] text-master-slate/50 font-normal mt-0.5">Não sentiu que vale? Devolvemos tudo.</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="btn-shine block w-full py-5 px-6 rounded-2xl text-center font-black text-sm uppercase tracking-[0.25em] font-heading text-white bg-master-primary hover:bg-master-accent transition-all shadow-xl shadow-master-primary/20 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2 mb-3"
          >
            Garantir minha vaga agora
          </a>
          <p className="text-center text-[10px] text-master-slate/35 font-normal">
            Acesso imediato · Pagamento seguro · Sem mensalidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
