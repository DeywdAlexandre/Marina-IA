import { Lesson } from '../../../../types/academy';

export const lesson0903: Lesson = {
  id: 'lp-09-03',
  title: 'Desafio Final: O Ranking da Academy',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Use o ".sort()" se quiser desafiar sua curiosidade e ordenar a lista (opcional).',
    'O objetivo aqui é criar um pódio dos melhores alunos.',
    'Este é o teste final antes do Quiz de Certificação!'
  ],
  content: {
    markdown: `
# 🎖️ O Desafio Supremo

Você já provou que sabe criar sistemas. Agora, o desafio é de **Otimização e Ranking**.

---

## 📋 Sua Missão:
Dada a mesma lista de alunos da aula anterior, crie um código que:
1. Gere um novo array contendo apenas os alunos **Aprovados** (use o \`filter\`).
2. Desse novo array, gere uma lista contendo apenas os **nomes e as médias** (use o \`map\`).
3. Imprima no console o "Pódio de Ouro" com os nomes desses alunos.

---

## 🛠️ Dica de Ouro: Encadeamento
Lembre-se do que aprendeu no Módulo 8. Você pode fazer tudo isso de forma muito elegante:

\`\`\`javascript
let elite = alunos
  .filter(a => (a.nota1 + a.nota2)/2 >= 9) // Filtra os gênios
  .map(a => a.nome); // Pega só o nome

console.log("Ranking de Elite: " + elite);
\`\`\`

---

## 🏆 Conclusão
Ao terminar esse desafio, você terá completado a **Trilha de Lógica de Programação**. Você não é mais um leigo em tecnologia; você agora entende a linguagem que governa o mundo digital.

**Siga para o Quiz Final do Módulo para garantir seu certificado!**
`,
    codeExamples: [
      {
        title: 'Exemplo de Ranking',
        language: 'javascript',
        code: `let alunos = [\n  { nome: "Marina", media: 9 },\n  { nome: "Alex", media: 10 }\n];\n\nlet podium = alunos.map(a => "⭐ " + a.nome);\nconsole.log(podium.join("\\n"));`,
        output: '⭐ Marina\n⭐ Alex',
        explanation: 'O método join("\\n") junta os itens da lista pulando uma linha.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-09-03-q1',
      type: 'multiple_choice',
      question: 'Após completar este curso, o que você se sente capaz de fazer?',
      options: [
        'Apenas ler códigos de outras pessoas.',
        'Entender o fluxo lógico de um programa, criar estruturas de dados e automatizar tarefas repetitivas.',
        'Hackear o sistema da NASA.',
        'Consertar computadores fisicamente.'
      ],
      correctAnswer: 1,
      explanation: 'A lógica de programação é a base para QUALQUER carreira em tecnologia, seja Front-end, Back-end, Dados ou IA.'
    }
  ]
};
