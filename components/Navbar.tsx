
import React, { useState } from 'react';

const navLinks = [
  { label: 'O Método', id: 'sobre' },
  { label: 'Conteúdo', id: 'modulos' },
  { label: 'A Instrutora', id: 'instrutor' },
  { label: 'Investimento', id: 'preco' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-master-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-master-deep rounded-xl group-hover:bg-master-primary transition-colors duration-500">
              <span className="text-white font-black text-xl font-heading tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-master-deep font-black text-lg tracking-tighter font-heading uppercase">Revisa</span>
              <span className="text-master-primary font-light text-lg tracking-[0.1em] font-heading uppercase -mt-1">Master</span>
            </div>
          </div>

          {/* Links — desktop */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-[10px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.25em] font-heading"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#preco"
              onClick={(e) => handleScroll(e, 'preco')}
              className="btn-shine px-10 py-4 bg-master-deep text-white text-[10px] font-black rounded-2xl hover:bg-master-primary transition-all shadow-xl shadow-master-deep/10 uppercase tracking-[0.25em] font-heading hover:scale-105 active:scale-95"
            >
              Matricule-se
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-master-deep transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-master-deep transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-master-deep transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav-drawer md:hidden border-t border-master-light/50 bg-white ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-[11px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.3em] font-heading py-3 px-2 border-b border-master-light/40 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#preco"
            onClick={(e) => handleScroll(e, 'preco')}
            className="btn-shine mt-4 flex items-center justify-center px-8 py-4 bg-master-primary text-white text-[10px] font-black rounded-2xl hover:bg-master-deep transition-all uppercase tracking-[0.25em] font-heading"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
