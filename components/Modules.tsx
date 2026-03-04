
import React, { useState, useEffect, useCallback } from 'react';
import { COURSE_MODULES } from '../constants';
import { Module } from '../types';

const Modules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [modalOriginStyle, setModalOriginStyle] = useState<React.CSSProperties>({});
  const [flippingId, setFlippingId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedModule) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedModule]);

  const openModule = useCallback((mod: Module, e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Modal max-w-3xl = 768px, minus container padding (16px each side on mobile)
    const modalW = Math.min(window.innerWidth - 32, 768);
    const fromX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const fromY = rect.top + rect.height / 2 - window.innerHeight / 2;
    const fromScale = Math.min(rect.width / modalW, 0.94);

    setModalOriginStyle({
      '--from-x': `${fromX}px`,
      '--from-y': `${fromY}px`,
      '--from-scale': String(fromScale),
    } as React.CSSProperties);

    // Card gira para a borda enquanto o modal abre
    setFlippingId(mod.id);
    setTimeout(() => setFlippingId(null), 320);

    setSelectedModule(mod);
  }, []);

  return (
    <section id="modulos" className="py-32 bg-[#fafbfc] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-6 py-1.5 bg-master-light border border-master-accent/10 rounded-full text-master-primary text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            Ementa Estratégica
          </div>
          <h2 className="text-4xl font-black text-master-deep sm:text-6xl uppercase tracking-tighter font-heading leading-tight">Arquitetura do <br/><span className="text-master-primary">Conhecimento</span></h2>
          <p className="mt-10 text-lg text-master-slate/60 font-normal max-w-2xl mx-auto leading-relaxed italic">
            "Um programa desenhado para quem busca o máximo desempenho na escrita científica, sem comprometer o rigor ético exigido pelas grandes instituições."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {COURSE_MODULES.map((module) => (
            <div
              key={module.id}
              className={`card-float group bg-white rounded-3xl overflow-hidden shadow-sm border border-master-light hover:border-master-accent/40 cursor-pointer h-full ${flippingId === module.id ? 'card-flip-out' : ''}`}
              onClick={(e) => openModule(module, e)}
            >
              <div className="p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-6">
                    <span className="text-[10px] font-black tracking-widest font-heading text-master-slate/20 group-hover:text-master-accent transition-colors">
                      {String(module.id).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-black leading-snug font-heading text-master-deep group-hover:text-master-primary transition-colors mb-3 uppercase tracking-tight">
                        {module.title}
                      </h3>
                      <p className="text-xs text-master-slate/60 leading-relaxed font-normal pr-4 line-clamp-3">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-1 p-2 rounded-full border border-master-light text-master-accent group-hover:bg-master-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-master-light/50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-master-slate/40 uppercase tracking-widest group-hover:text-master-primary transition-colors">
                    {module.lessons.length} Aulas
                  </span>
                  <span className="text-[10px] font-bold text-master-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    Ver Detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bônus ─────────────────────────────────────────────────────── */}
        <div className="mt-28">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-amber-700 font-black tracking-[0.3em] uppercase text-[10px] font-heading">Bônus Incluídos</span>
            </div>
            <h3 className="text-3xl font-black text-master-deep font-heading uppercase tracking-tighter leading-tight">
              Além do conteúdo principal,<br/>você também recebe:
            </h3>
            <p className="mt-4 text-master-slate/50 font-normal text-base">
              Materiais exclusivos para acelerar sua escrita acadêmica.
            </p>
          </div>

          {/* Cards de bônus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Bônus 01 */}
            <div className="card-float relative bg-white rounded-3xl p-8 border border-master-light hover:border-amber-300/60">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -translate-y-px rounded-full"></div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] font-heading mb-5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Bônus 01
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-master-primary/10 rounded-xl mb-4">
                <svg className="w-5 h-5 text-master-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="font-black text-master-deep font-heading text-sm uppercase tracking-tight mb-3 leading-tight">
                Checklist de Criação de Objetivo Acadêmico
              </h4>
              <p className="text-master-slate/60 text-sm leading-relaxed font-normal">
                Material passo a passo para definir objetivo geral, construir objetivos específicos e alinhar objetivo, problema e hipótese.
              </p>
            </div>

            {/* Bônus 02 */}
            <div className="card-float relative bg-white rounded-3xl p-8 border border-master-light hover:border-amber-300/60">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -translate-y-px rounded-full"></div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] font-heading mb-5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Bônus 02
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-master-primary/10 rounded-xl mb-4">
                <svg className="w-5 h-5 text-master-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-black text-master-deep font-heading text-sm uppercase tracking-tight mb-3 leading-tight">
                E-book: Hipóteses na Pesquisa Científica
              </h4>
              <p className="text-master-slate/60 text-sm leading-relaxed font-normal">
                Material completo de <strong className="text-master-deep font-semibold">60 páginas</strong> cobrindo tipos de hipóteses, como formulá-las e conectá-las com seus objetivos de pesquisa — com exemplos práticos.
              </p>
            </div>

            {/* Bônus 03 */}
            <div className="card-float relative bg-white rounded-3xl p-8 border border-master-light hover:border-amber-300/60">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -translate-y-px rounded-full"></div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] font-heading mb-5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Bônus 03
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-master-primary/10 rounded-xl mb-4">
                <svg className="w-5 h-5 text-master-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="font-black text-master-deep font-heading text-sm uppercase tracking-tight mb-3 leading-tight">
                Materiais Complementares
              </h4>
              <p className="text-master-slate/60 text-sm leading-relaxed font-normal">
                Artigos de referência, modelos de estrutura acadêmica, exemplos de escrita científica e materiais de apoio para organização da pesquisa.
              </p>
            </div>
          </div>
        </div>
        {/* ────────────────────────────────────────────────────────────── */}

        <div className="mt-32 bg-master-deep rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center text-white shadow-[0_50px_100px_-20px_rgba(4,24,43,0.4)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter font-heading leading-[1.1]">
              Domine a tecnologia <br/><span className="text-master-accent">com maestria acadêmica</span>
            </h3>
            <p className="text-master-light/50 mb-12 text-lg font-normal leading-relaxed italic">
              "Para quem entende que a Inteligência Artificial não substitui o pesquisador, mas amplifica sua capacidade de mudar o mundo."
            </p>
            <a
              href="#preco"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine inline-flex items-center justify-center w-full sm:w-auto px-10 sm:px-16 py-5 rounded-2xl font-black text-xs bg-master-primary text-white hover:bg-master-accent hover:scale-105 transition-all shadow-2xl shadow-black/40 uppercase tracking-[0.4em] font-heading"
            >
              Iniciar Trajetória
            </a>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedModule && (
        <div className="modal-perspective fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-master-deep/80 backdrop-blur-sm"
            onClick={() => setSelectedModule(null)}
          ></div>

          <div
            className="modal-flip-expand relative bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            style={modalOriginStyle}
          >
            {/* Modal Header */}
            <div className="p-8 sm:p-10 border-b border-master-light bg-master-offwhite/30 flex items-start justify-between gap-6 shrink-0">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-master-primary/10 text-master-primary text-[9px] font-black uppercase tracking-widest rounded-full border border-master-primary/20">
                    Módulo {String(selectedModule.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-master-deep uppercase tracking-tight font-heading leading-tight">
                  {selectedModule.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="p-2 rounded-full bg-white border border-master-light text-master-slate/40 hover:text-master-deep hover:border-master-deep transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
              <p className="text-master-slate/80 text-lg leading-relaxed mb-10 font-normal">
                {selectedModule.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-black text-master-deep uppercase tracking-widest mb-6 border-b border-master-light pb-2">
                  Conteúdo Programático
                </h4>
                {selectedModule.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-4 rounded-xl bg-master-offwhite/50 border border-master-light hover:border-master-accent/30 hover:bg-white transition-all group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-master-accent/40 group-hover:bg-master-accent mr-4 shrink-0 transition-colors"></div>
                    <span className="text-sm font-medium text-master-deep/80 group-hover:text-master-deep transition-colors">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 sm:p-8 border-t border-master-light bg-master-offwhite/30 shrink-0 flex justify-end">
              <button
                onClick={() => setSelectedModule(null)}
                className="px-8 py-3 bg-master-deep text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-master-primary transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Modules;
