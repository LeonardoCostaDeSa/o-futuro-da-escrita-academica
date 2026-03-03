
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: "Nunca usei IA. Vou conseguir acompanhar?",
    a: "Sim, sem nenhum problema. O método foi desenhado para quem parte do zero — você não precisa saber nada sobre IA antes de começar. As primeiras aulas constroem os fundamentos: o que são modelos de linguagem, como funcionam e por que comportam de determinada forma. A partir daí, cada passo é aplicado diretamente ao seu trabalho acadêmico, com exemplos reais e progressão clara.",
  },
  {
    q: "A banca pode questionar o uso de IA?",
    a: "Essa é a dúvida mais comum — e faz todo sentido tê-la. A resposta direta: depende de como você usa. O método existe justamente para que você use IA com rastreabilidade total, auditoria humana e responsabilidade autoral. Você vai saber explicar cada escolha metodológica, cada fonte utilizada e cada argumento construído. Quando a banca questionar, você responde — não com improviso, mas com estrutura.",
  },
  {
    q: "Funciona para qualquer área?",
    a: "Sim. O método é estruturante — ele trabalha com a lógica da construção acadêmica, não com o conteúdo específico de cada área. Temos alunos de Psicologia, Engenharia, Direito, Administração, Ciências Biológicas, Educação e outros campos. O que muda é o estilo das fontes e o vocabulário técnico. O raciocínio de como construir um argumento sustentável é universal.",
  },
  {
    q: "É só para pós-graduação?",
    a: "Não. O método cobre TCC de graduação, dissertações de mestrado e teses de doutorado. A diferença está no nível de profundidade que cada etapa exige — mas a estrutura base é a mesma. Muitos alunos que aplicam o método no TCC voltam durante o mestrado porque o sistema continua funcionando. É um investimento que cresce com você.",
  },
  {
    q: "Não tenho tempo — minha defesa é em poucos meses.",
    a: "Esse é exatamente o cenário para o qual o método foi criado. Você não vai acrescentar mais tarefas à sua rotina — vai organizar o que já está em andamento com mais clareza. As primeiras aulas focam em diagnóstico: onde você está, o que falta e o que pode ser acelerado com IA sem perder qualidade. Alunos com prazo curto costumam sentir o impacto nas primeiras semanas de aplicação.",
  },
  {
    q: "O Turnitin ou meu orientador vai me reprovar por usar IA?",
    a: "A confusão aqui é entre uso generativo e uso metodológico. Copiar texto de IA é um risco real. Usar IA para organizar raciocínio, revisar estrutura e mapear fontes — com auditoria sua sobre cada etapa — é uma prática diferente, rastreável e defensável. O método te ensina a fazer essa distinção com clareza e a documentar seu processo de forma que qualquer orientador possa acompanhar.",
  },
  {
    q: "R$347 é muito para o meu momento atual.",
    a: "Entendo a preocupação — e ela merece uma resposta honesta. Uma hora com um orientador particular custa, em média, mais do que o valor total do curso. Aqui você tem um sistema aplicável agora, nas próximas sessões de escrita, e que continua válido do TCC ao doutorado. Além disso, existe a garantia de 7 dias: se você entrar, acessar o conteúdo e sentir que não vale, devolvemos tudo. O risco financeiro é zero.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, isVisible } = useReveal({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-master-offwhite/50 border-t border-master-light/50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-master-accent"></span>
            <span className="text-master-primary font-black tracking-[0.4em] uppercase text-[10px] font-heading">Dúvidas</span>
            <span className="h-px w-8 bg-master-accent"></span>
          </div>
          <h2 className="text-3xl font-black text-master-deep font-heading uppercase tracking-tighter">
            Perguntas importantes antes de decidir
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-master-light/50 overflow-hidden hover:border-master-accent/30 transition-colors reveal reveal-delay-${Math.min(i + 1, 7)} ${isVisible ? 'visible' : ''}`}
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-black text-master-deep text-sm font-heading">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-master-light text-master-primary transition-transform duration-300 ${open === i ? 'rotate-45 border-master-accent' : ''}`}
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-6">
                  <p className="text-master-slate/70 text-sm leading-relaxed font-normal">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
