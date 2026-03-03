
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Preciso saber programar?", a: "Absolutamente não. O curso é focado em ferramentas amigáveis e interfaces de chat (como ChatGPT, Claude, etc)." },
    { q: "O curso serve para qualquer área?", a: "Sim, os princípios de pesquisa e escrita acadêmica são universais, abrangendo desde Humanas até Exatas." },
    { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar o curso. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas." },
    { q: "Por quanto tempo tenho acesso?", a: "O acesso é vitalício, incluindo todas as atualizações futuras dos módulos." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
