import { Lesson } from '../../../../types/academy';

export const lesson1003: Lesson = {
  id: 'lp-10-03',
  title: 'Marina IA: Sua Professora 24h',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'A IA é excelente para explicar conceitos complexos com analogias simples.',
    'Peça para a IA "revisar meu código e sugerir melhorias".',
    'Não use a IA apenas para copiar a resposta, use para entender o PORQUÊ da resposta.'
  ],
  content: {
    markdown: `
# 🤖 IA: O Superpoder do Programador Moderno

Você não está mais sozinho. Com a Marina IA integrada na Academy, você tem um tutor de elite ao seu lado. Mas para aprender de verdade, você precisa saber **como perguntar**.

---

## 🛠️ Como usar a Marina para aprender:

1. **Peça explicações:** "Marina, me explique como funciona o loop for usando uma analogia com uma caixa de chocolates."
2. **Peça revisão:** "Marina, este código que escrevi está seguindo o Clean Code?"
3. **Peça desafios:** "Marina, me dê um exercício de lógica sobre Arrays para eu praticar agora."

---

## ⚠️ O Perigo do "Copiar e Colar"
Se você apenas pedir o código pronto e colar, seu cérebro não aprenderá a criar a lógica. Use a IA para te dar **pistas** ou para **explicar erros**, mas tente sempre escrever o código final com suas próprias mãos.

---

## 🚀 Desafio Final
Abra o **Tutor (Marina)** aqui no lado direito e faça a seguinte pergunta:
*"Marina, estou terminando o curso de Lógica. Me dê uma ideia de um pequeno projeto em JavaScript para eu fazer sozinho agora."*

Veja o que ela sugere!
`,
    codeExamples: [
      {
        title: 'Prompts de Ouro',
        language: 'markdown',
        code: `Exemplos de perguntas para a Marina:\n- "O que significa 'Uncaught TypeError'?"\n- "Como posso simplificar este if/else?"\n- "Crie um pequeno quiz sobre funções para mim."`,
        output: 'Dica: A IA é uma ferramenta de aumento de produtividade, use-a com sabedoria!',
        explanation: 'Saber "promptar" (pedir) é a nova habilidade essencial de todo desenvolvedor.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-10-03-q1',
      type: 'multiple_choice',
      question: 'Qual a melhor forma de usar a IA para evoluir na programação?',
      options: [
        'Pedir para ela escrever todo o projeto e apenas entregar.',
        'Usar a IA como um tutor para explicar conceitos e ajudar a encontrar erros na sua própria lógica.',
        'Ignorar a IA e aprender apenas com livros de 1990.',
        'Usar a IA apenas para traduzir o código.'
      ],
      correctAnswer: 1,
      explanation: 'A IA deve ser sua mentora, não sua substituta. O aprendizado real acontece quando você entende o processo.'
    }
  ]
};
