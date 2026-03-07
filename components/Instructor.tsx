
import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { prefix: 'Mais de ', value: 3, suffix: ' anos', rest: ' aplicando IA exclusivamente para fins acadêmicos', isNum: true },
  { prefix: 'Mais de ', value: 300, suffix: ' alunos', rest: ' acompanhados no Brasil e no exterior', isNum: true },
  { prefix: '', value: 0, suffix: '', rest: 'Atuação direta em TCCs, mestrados e doutorados', isNum: false },
  { prefix: '', value: 0, suffix: '', rest: 'Experiência real com insegurança metodológica, troca de orientador e prazos apertados', isNum: false },
];

const method = [
  "Clareza metodológica",
  "Engenharia de prompts com critério",
  "Rastreabilidade de fontes",
  "Auditoria humana",
  "Segurança ética diante de qualquer banca",
];

const StatItem: React.FC<{ stat: typeof stats[0]; start: boolean }> = ({ stat, start }) => {
  const count = useCounter(stat.value, 1400, start && stat.isNum);
  return (
    <li className="flex items-start gap-3 text-master-slate/70 text-sm">
      <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-accent shadow-[0_0_8px_rgba(43,156,212,0.8)]"></div>
      <span>
        {stat.isNum
          ? <>{stat.prefix}<span className="counter-num font-black text-master-deep">{count}</span>{stat.suffix}{stat.rest}</>
          : stat.rest
        }
      </span>
    </li>
  );
};

const Instructor: React.FC = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      id="instrutor"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          <div className={`lg:col-span-5 mb-16 lg:mb-0 reveal ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-6 border border-master-light rounded-[2.5rem] -rotate-2 pointer-events-none"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                <img
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  src="/imgs/image_Gabriela.png"
                  alt="Dra. Gabriela Verruck — Doutora em Ciências pela USP, especialista em escrita acadêmica com IA"
                  loading="lazy"
                  width={600}
                  height={600}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-master-deep via-master-deep/70 to-transparent p-10">
                  <p className="text-white font-black text-xl font-heading tracking-tighter uppercase leading-none">Dra. Gabriela Verruck</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mt-2">Doutora em Ciências · USP</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-7 reveal-right reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-master-accent"></span>
              <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">Quem conduz você nesse processo</span>
            </div>

            <p className="text-lg text-master-slate/80 leading-relaxed font-normal mb-6">
              Eu sou Gabriela Verruck, Doutora em Ciências pela <strong>Universidade de São Paulo (USP)</strong>, e trabalho com escrita acadêmica na prática — com alunos reais, em prazos reais, diante de bancas reais.
            </p>

            <p className="text-sm text-master-slate/60 leading-relaxed font-normal mb-10">
              Minha trajetória não foi construída apenas em teoria. Foi construída enfrentando os mesmos desafios que você enfrenta hoje — falta de método claro, insegurança na escrita e dúvidas sobre como usar Inteligência Artificial sem comprometer rigor e autoria.
            </p>

            <ul className="space-y-3 mb-10">
              {stats.map((s, i) => (
                <StatItem key={i} stat={s} start={isVisible} />
              ))}
            </ul>

            <div className="bg-master-offwhite rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md p-8 mb-8 border border-master-light/50">
              <p className="text-master-slate/50 text-xs mb-3 uppercase tracking-widest font-heading font-black">Eu identifiquei um padrão claro:</p>
              <p className="font-black text-master-deep text-2xl font-heading leading-tight">
                O problema raramente é falta de capacidade.<br/>
                <span className="text-master-primary">É falta de estrutura.</span>
              </p>
            </div>

            <p className="text-sm text-master-slate/50 mb-4">Foi por isso que desenvolvi um método que combina:</p>
            <ul className="space-y-2 mb-10">
              {method.map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-master-slate/80 text-sm font-medium">
                  <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-master-primary"></div>
                  {m}
                </li>
              ))}
            </ul>

            <p className="text-master-slate/60 font-normal italic mb-10 text-sm">
              Meu compromisso é simples: te ajudar a construir um trabalho que você consiga sustentar.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#preco"
                className="btn-shine inline-flex items-center justify-center px-12 py-5 text-xs font-black rounded-2xl text-white bg-master-primary hover:bg-master-deep transition-all shadow-[0_20px_50px_-10px_rgba(0,102,166,0.3)] uppercase tracking-[0.2em] font-heading hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-master-accent focus-visible:ring-offset-2"
              >
                Quero aprender com a Dra. Gabriela Verruck
              </a>
              <span className="text-xs text-master-slate/40 font-normal self-center">Método aplicado e validado na prática.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
