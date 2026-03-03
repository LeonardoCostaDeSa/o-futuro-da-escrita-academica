
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-master-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Estilizado */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-master-deep rounded-xl group-hover:bg-master-primary transition-colors duration-500">
              <span className="text-white font-black text-xl font-heading tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-master-deep font-black text-lg tracking-tighter font-heading uppercase">Revisa</span>
              <span className="text-master-primary font-light text-lg tracking-[0.1em] font-heading uppercase -mt-1">Master</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#sobre" 
              onClick={(e) => handleScroll(e, 'sobre')}
              className="text-[10px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.25em] font-heading"
            >
              O Método
            </a>
            <a 
              href="#modulos" 
              onClick={(e) => handleScroll(e, 'modulos')}
              className="text-[10px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.25em] font-heading"
            >
              Conteúdo
            </a>
            <a 
              href="#instrutor" 
              onClick={(e) => handleScroll(e, 'instrutor')}
              className="text-[10px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.25em] font-heading"
            >
              A Instrutora
            </a>
            <a 
              href="#preco" 
              onClick={(e) => handleScroll(e, 'preco')}
              className="text-[10px] font-black text-master-slate/70 hover:text-master-primary transition uppercase tracking-[0.25em] font-heading"
            >
              Investimento
            </a>
            <a 
              href="#preco" 
              onClick={(e) => handleScroll(e, 'preco')}
              className="px-10 py-4 bg-master-deep text-white text-[10px] font-black rounded-full hover:bg-master-primary transition-all shadow-xl shadow-master-deep/10 uppercase tracking-[0.25em] font-heading"
            >
              Matricule-se
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
