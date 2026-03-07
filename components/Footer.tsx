
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-master-deep border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="mb-10">
              <img
                src="/imgs/logo_RM_Transparente_footer.png"
                alt="Revisa Master"
                className="h-16 w-auto object-contain"
                width={160}
                height={64}
              />
            </div>
            <p className="text-master-light/30 text-sm leading-relaxed max-w-sm font-normal">
              A autoridade definitiva em produtividade acadêmica. Nossa missão é elevar o padrão da produção científica brasileira através da inovação ética e tecnológica.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-40">Navegação</h4>
              <ul className="space-y-4 text-xs text-master-light/50 font-bold uppercase tracking-widest">
                <li><a href="#sobre" className="hover:text-master-accent transition-colors">O Método</a></li>
                <li><a href="#modulos" className="hover:text-master-accent transition-colors">Conteúdo</a></li>
                <li><a href="#instrutor" className="hover:text-master-accent transition-colors">A Instrutora</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-40">Suporte</h4>
              <ul className="space-y-4 text-xs text-master-light/50 font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-master-accent transition-colors">Portal do Aluno</a></li>
                <li><a href="#" className="hover:text-master-accent transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-master-accent transition-colors">Privacidade</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 opacity-40">Presença Digital</h4>
              <div className="flex gap-5">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-master-primary hover:border-transparent transition-all group">
                  <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-master-light/20 font-black uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} Revisa Master • Todos os direitos reservados.
          </p>
          <div className="flex gap-10 text-[9px] font-black text-master-light/10 uppercase tracking-[0.3em]">
            <span>USP RESEARCH CENTERED</span>
            <span>ÉTIKA & IA COMPLIANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
