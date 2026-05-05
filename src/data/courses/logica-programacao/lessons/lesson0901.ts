import { Lesson } from '../../../../types/academy';

export const lesson0901: Lesson = {
  id: 'lp-09-01',
  title: 'Planejando o Desafio (O que vamos construir?)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Antes de codar, sempre desenhe a lógica no papel ou na mente.',
    'Divida o problema grande em partes pequenas.',
    'Neste módulo, vamos criar um Sistema de Gestão de Notas e Presenças.'
  ],
  content: {
    markdown: `
# 🏆 O Grande Desafio Final

Parabéns! Você chegou ao topo da montanha. Você já conhece variáveis, decisões, loops, funções, arrays, objetos e métodos modernos. Agora, é hora de provar que você sabe **unir** tudo isso para resolver um problema real.

---

## 📋 O Projeto: Sistema Escolar Marina IA
Vamos construir um algoritmo que receba uma lista de alunos com suas notas e presenças, e retorne um relatório completo:
1. Quem foi aprovado (Média >= 7 E Presença >= 75%).
2. Quem ficou de recuperação.
3. Quem foi reprovado por falta.

---

## 🧠 A Lógica que vamos usar:
- **Array de Objetos:** Para guardar os dados dos alunos.
- **Funções:** Para calcular a média.
- **Filter:** Para separar os grupos.
- **Map:** Para formatar as mensagens finais.
- **ForEach:** Para imprimir o relatório no console.

---

## 🚀 Próximo Passo
Na próxima lição, vamos começar a colocar a mão na massa. Prepare seu **Editor de Código**, pois ele será sua ferramenta principal de agora em diante!
`,
    codeExamples: [
      {
        title: 'Visão Geral do Código',
        language: 'javascript',
        code: `// Este será o esqueleto do nosso projeto:\nlet alunos = [...];\n\nconst calcularMedia = (n1, n2) => (n1 + n2) / 2;\n\n// Lógica de filtragem e mapeamento virá a seguir...`,
        output: 'Preparando ambiente...',
        explanation: 'Planejar as variáveis e funções básicas é o primeiro passo de qualquer projeto de sucesso.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-09-01-q1',
      type: 'multiple_choice',
      question: 'Qual a melhor estratégia para resolver um problema complexo na programação?',
      options: [
        'Tentar escrever todo o código de uma vez.',
        'Dividir o problema em partes menores e resolver uma de cada vez.',
        'Copiar o código de outro lugar.',
        'Esperar o erro acontecer para tentar consertar.'
      ],
      correctAnswer: 1,
      explanation: 'Esta técnica se chama "Dividir para Conquistar" e é a base da engenharia de software.'
    }
  ]
};
