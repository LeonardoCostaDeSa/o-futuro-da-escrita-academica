
import { Module, PricingPlan } from './types';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: "Intro: A Nova Era da Escrita Acadêmica",
    description: "Introduz a Inteligência Artificial como uma solução inevitável e um 'porto seguro' para o sentimento de abandono e falta de orientação no ambiente acadêmico, preparando o aluno para a metodologia 'mão na massa' do curso.",
    lessons: [
      "Aula 1 — Apresentação, Trajetória e o Desafio da Escrita Acadêmica",
      "Aula 2 — A Inevitabilidade da Inteligência Artificial no Ensino Superior"
    ]
  },
  {
    id: 2,
    title: "Fundamentos da IA e Ferramentas",
    description: "Foca na desmistificação do funcionamento da IA, explicando sua natureza probabilística e diferenciando a fluidez do ChatGPT da precisão e rastreabilidade do NotebookLM para combater os riscos de plágio e 'alucinações'.",
    lessons: [
      "Aula 1 — Fundamentos da Inteligência Artificial e Ferramentas para Pesquisa Acadêmica"
    ]
  },
  {
    id: 3,
    title: "Engenharia de Prompts Científicos",
    description: "Aprofunda a Engenharia de Prompts para pesquisa acadêmica. O aluno aprende a abandonar comandos vagos e a usar uma estrutura baseada em quatro pilares (Instrução, Contexto, Output e Critérios) para obter respostas de alto nível e rigor científico.",
    lessons: [
      "Aula 1 — Fundamentos do Prompt e a Estrutura de Três Pilares",
      "Aula 2 — Tokens e a Inclusão de Critérios na Escrita Científica",
      "Aula 3 — Erros Comuns, Limites de Memória e a Ética do Pesquisador"
    ]
  },
  {
    id: 4,
    title: "Limitações Técnicas e Análise Crítica",
    description: "Trata das limitações, vieses e armadilhas tecnológicas da IA. Ensina o aluno a atuar como um auditor, combatendo a prolixidade (a 'encheção de linguiça') e a falsa autoridade gerada pelas máquinas, mantendo o controle estrutural do trabalho.",
    lessons: [
      "Aula 1 — Introdução às Limitações, Vieses e Barreiras Técnicas da IA",
      "Aula 2 — Objetividade, Falsa Autoridade e o Contraste das Ferramentas",
      "Aula 3 — Pilares da Clareza, Alinhamento Estrutural e Preparação"
    ]
  },
  {
    id: 5,
    title: "Fundamentos Práticos da Escrita com IA",
    description: "Transição para a execução prática. Foca em criar o 'norte' da pesquisa por meio da regra 'um verbo, um objetivo' e ensina a converter esse objetivo em strings de busca matemáticas (operadores booleanos) para varrer bases de literatura de forma cirúrgica.",
    lessons: [
      "Aula 1 — Os 5 Pilares Fundamentais do Trabalho Acadêmico e o 'Grande Norte'",
      "Aula 2 — Construindo e Refinando o Objetivo de Pesquisa com IA",
      "Aula 3 — Transformando Objetivos em Strings de Busca Booleanas",
      "Aula 4 — Validação da Literatura e o Checklist CARS",
      "Aula 5 — Classificação e Organização de Arquivos para IA"
    ]
  },
  {
    id: 6,
    title: "Construção e Estruturação do Trabalho",
    description: "O coração prático do curso. Demonstra o fluxo não-linear da escrita (da justificativa ao resumo final), orquestrando ferramentas de IA (como Elicit, Consensus e Litmaps, junto ao NotebookLM) para extrair dados, elaborar referenciais e discutir achados com máxima rastreabilidade.",
    lessons: [
      "Aula 1 — O Esqueleto Inicial e a Justificativa de Pesquisa",
      "Aula 2 — Relevância e Impacto da Pesquisa",
      "Aula 3 — Desmistificando a Metodologia Científica",
      "Aula 4 — Estruturando o Referencial Teórico",
      "Aula 5 — Apresentação dos Resultados (Fatos vs. Opiniões)",
      "Aula 6 — A Discussão dos Resultados (O Clímax do Trabalho)",
      "Aula 7 — Conclusão e Introdução",
      "Aula 8 — Resumo (Abstract), Título e Palavras-chave"
    ]
  },
  {
    id: 7,
    title: "Refinamento e Redação Avançada",
    description: "Ensina a lapidar o texto estruturado, convertendo os esqueletos em tópicos para uma redação corrida, fluida e formal. Remove vícios típicos da IA, integra storytelling acadêmico e ancora a formatação visual e a chamada de tabelas corretamente no texto.",
    lessons: [
      "Aula 1 — Transformação de Tópicos em Texto Corrido com Engenharia de Prompts",
      "Aula 2 — Refinamento Estrutural: Clareza, Coerência e Rastreabilidade",
      "Aula 3 — Refinando Metodologia, Resultados e Discussão"
    ]
  },
  {
    id: 8,
    title: "Formatação Acadêmica e Automatização",
    description: "Desmistifica normas como a ABNT e revoluciona a formatação substituindo o trabalho manual pela automação. Utiliza os 'Estilos' do Word para gerar sumários rápidos e aplica IAs, extensões e gerenciadores (como Mendeley) para lidar com referências complexas.",
    lessons: [
      "Aula 1 — Fundamentos da Formatação Acadêmica e Normas Técnicas",
      "Aula 2 — Formatação Prática no Microsoft Word e Automatização Estrutural",
      "Aula 3 — Ferramentas e IA para Gestão de Referências"
    ]
  },
  {
    id: 9,
    title: "Ética, Segurança e Diretrizes",
    description: "Foca na postura ética e madura do pesquisador. Desmonta o medo de detectores falhos de IA (como o Turnitin), diferencia autoplágio do uso generativo, alerta para os riscos da LGPD exigindo a anonimização de dados e detalha as normas emergentes para a citação transparente do uso de IAs nas publicações.",
    lessons: [
      "Aula 1 — Detecção de IA, Responsabilidade Autoral e Plágio",
      "Aula 2 — Segurança de Dados, Privacidade e LGPD",
      "Aula 3 — Como Citar a IA e o Desafio da Reprodutibilidade"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Acesso Completo",
    price: "497",
    originalPrice: "997",
    features: [
      "Acesso às 9 Módulos Completos",
      "Protocolo de Revisão Humana",
      "Templates de Prompts Acadêmicos",
      "Certificado de Conclusão",
      "Acesso Vitalício"
    ]
  },
  {
    name: "Combo Mentoria",
    price: "897",
    originalPrice: "1.497",
    recommended: true,
    features: [
      "Tudo do Acesso Completo",
      "Suporte prioritário na plataforma",
      "Masterclass de NotebookLM Avançado",
      "Bônus: Guia de Zotero e Mendeley",
      "Comunidade de Pesquisadores IA"
    ]
  }
];
