
import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section id="instrutor" className="py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <div className="relative">
              {/* Moldura elegante com estética de galeria */}
              <div className="absolute -inset-6 border border-master-light rounded-[2.5rem] -rotate-2 pointer-events-none"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                <img 
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dra. Gabriela Verruck de Moraes"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-master-deep/80 to-transparent p-10">
                  <p className="text-white font-black text-xl font-heading tracking-tighter uppercase leading-none">Dra. Gabriela Verruck</p>
                  <p className="text-master-accent text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Fundadora & PhD USP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-master-accent"></span>
              <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">Nossa Liderança</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-master-deep mb-8 font-heading uppercase leading-tight tracking-tighter">
              Excelência Forjada na <br/>
              <span className="text-master-primary italic font-light lowercase font-sans">Universidade</span> de São Paulo
            </h2>
            
            <div className="space-y-6 text-lg text-master-slate/80 leading-relaxed font-normal border-l-3 border-master-light pl-8">
              <p>
                Doutora em Ciências pela <strong>USP</strong>, Gabriela Verruck de Moraes iniciou sua jornada em 2016 com uma visão clara: elevar o rigor da produção científica brasileira através de suporte especializado.
              </p>
              <p>
                O que nasceu como um projeto pessoal na maior universidade da América Latina tornou-se a <strong>Revisa Master</strong>, a primeira EdTech do país a escalar mentorias acadêmicas de alto nível com tecnologia de ponta.
              </p>
              <p className="font-bold text-master-deep italic">
                "Nossa missão é redefinir a relação entre o pesquisador e sua obra, transformando desafios complexos em conquistas de impacto global."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
