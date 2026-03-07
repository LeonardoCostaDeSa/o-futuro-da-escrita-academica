
import { Module, PricingPlan } from './types';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: "A virada de chave: IA como método, não muleta",
    description: "Você não precisa de inspiração para começar. Precisa de método. Este módulo muda a forma como você pensa sobre escrita acadêmica — e apresenta a IA como um sistema de apoio estruturado, não como uma solução mágica.",
    lessons: [
      "Aula 1 — Apresentação, Trajetória e o Desafio da Escrita Acadêmica",
      "Aula 2 — A Inevitabilidade da Inteligência Artificial no Ensino Superior"
    ]
  },
  {
    id: 2,
    title: "Conheça suas ferramentas: o que cada IA faz (e o que não faz)",
    description: "ChatGPT e NotebookLM não são a mesma coisa. Saber qual usar — e quando — é o que separa quem escreve com segurança de quem vive com medo de citar fonte errada ou cair no Turnitin.",
    lessons: [
      "Aula 1 — Fundamentos da Inteligência Artificial e Ferramentas para Pesquisa Acadêmica"
    ]
  },
  {
    id: 3,
    title: "A arte de perguntar: como extrair o máximo da IA",
    description: "Prompt vago, resposta vaga. Aqui você aprende a estrutura exata que transforma comandos em respostas de nível científico — com quatro pilares que mudam o que você consegue da IA de uma vez por todas.",
    lessons: [
      "Aula 1 — Fundamentos do Prompt e a Estrutura de Três Pilares",
      "Aula 2 — Tokens e a Inclusão de Critérios na Escrita Científica",
      "Aula 3 — Erros Comuns, Limites de Memória e a Ética do Pesquisador"
    ]
  },
  {
    id: 4,
    title: "Detectar, filtrar, confiar: como não ser enganado pela própria ferramenta",
    description: "A IA mente com confiança. Este módulo te ensina a ser o auditor do seu próprio trabalho — identificando prolixidade, falsa autoridade e armadilhas técnicas antes que a banca as encontre.",
    lessons: [
      "Aula 1 — Introdução às Limitações, Vieses e Barreiras Técnicas da IA",
      "Aula 2 — Objetividade, Falsa Autoridade e o Contraste das Ferramentas",
      "Aula 3 — Pilares da Clareza, Alinhamento Estrutural e Preparação"
    ]
  },
  {
    id: 5,
    title: "Seu grande norte: do caos à pesquisa com objetivo claro",
    description: "Pesquisa sem objetivo claro é pesquisa em círculos. Com a regra 'um verbo, um objetivo' e strings booleanas cirúrgicas, você sabe exatamente o que busca — e como encontrar na literatura.",
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
    title: "Do esqueleto ao texto: construindo cada seção com método",
    description: "Este é o coração do curso. Do esqueleto inicial à discussão dos resultados, você vai construir cada seção com IA como co-piloto — com rastreabilidade e método em cada parágrafo.",
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
    title: "Lapidação: de estrutura para redação fluida e acadêmica",
    description: "Estrutura pronta não é texto pronto. Aqui você converte tópicos em redação corrida, fluida e formal — removendo os vícios da IA e integrando a sua voz de pesquisador de forma natural.",
    lessons: [
      "Aula 1 — Transformação de Tópicos em Texto Corrido com Engenharia de Prompts",
      "Aula 2 — Refinamento Estrutural: Clareza, Coerência e Rastreabilidade",
      "Aula 3 — Refinando Metodologia, Resultados e Discussão"
    ]
  },
  {
    id: 8,
    title: "Formatação sem sofrimento: ABNT, Word e referências no automático",
    description: "ABNT não precisa ser sofrimento. Com os 'Estilos' do Word e gerenciadores como Mendeley, você formata em minutos o que antes levava horas — sem perder nenhuma norma e sem retrabalho.",
    lessons: [
      "Aula 1 — Fundamentos da Formatação Acadêmica e Normas Técnicas",
      "Aula 2 — Formatação Prática no Microsoft Word e Automatização Estrutural",
      "Aula 3 — Ferramentas e IA para Gestão de Referências"
    ]
  },
  {
    id: 9,
    title: "IA com responsabilidade: ética, plágio e transparência que protegem você",
    description: "Usar IA não é trapaça — desde que você saiba o que está fazendo. Ética, detecção de plágio, LGPD e como citar IA de forma transparente: tudo que garante que seu trabalho seja irrefutável.",
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
