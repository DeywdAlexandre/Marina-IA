import { Lesson } from '../../../../types/academy';

export const lesson0103: Lesson = {
  id: 'lp-01-03',
  title: 'A Gramática do Código (Símbolos e Pontuação)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O código é como uma receita: a pontuação correta garante que o prato saia certo.',
    'Se o console der erro, verifique primeiro se não esqueceu de fechar um parêntese ou aspas.'
  ],
  content: {
    markdown: `
# 🔣 A Gramática do Código

Programar é como escrever uma carta para um estrangeiro: você precisa usar a pontuação correta para ser entendido. No JavaScript, usamos símbolos específicos que funcionam como a "gramática" da linguagem.

Vamos entender os 4 símbolos mais importantes que você verá o tempo todo:

---

## 1. O Ponto e Vírgula ( ; ) - O Ponto Final
O \`;\` serve para dizer ao computador: **"Acabei esta instrução, pode ir para a próxima"**. 
Embora o JavaScript moderno às vezes aceite código sem ele, usá-lo evita confusões e erros em códigos maiores.

\`\`\`javascript
let nome = "Marina"; // Instrução finalizada.
console.log(nome);   // Outra instrução finalizada.
\`\`\`

---

## 2. As Aspas ( "" ) - O Cesto de Texto
As aspas servem para diferenciar o que é **comando** do que é **texto (dado)**. 
- Sem aspas: O computador procura uma variável ou comando.
- Com aspas: O computador entende como um texto puro (String).

\`\`\`javascript
let nome = "Marina"; // "Marina" é o texto dentro da caixa.
console.log(nome);   // Aqui mostramos o CONTEÚDO da caixa.
console.log("nome"); // Aqui mostramos a PALAVRA "nome" literalmente.
\`\`\`

---

## 3. Os Parênteses ( () ) - A Caixa de Entrada
Os parênteses são usados sempre que chamamos uma **função** (uma ação). Eles guardam o que a função precisa para trabalhar.
No \`console.log("Oi")\`, o \`"Oi"\` está dentro dos parênteses porque é o que o \`log\` deve mostrar.

---

## 4. O Ponto ( . ) - O Caminho das Ferramentas
O ponto serve para acessar uma funcionalidade dentro de um "objeto". 
Pense no \`console\` como uma caixa de ferramentas. O \`.log\` é a ferramenta específica (o martelo) que pegamos dentro dessa caixa.

\`\`\`javascript
console.log("Acessando a ferramenta log dentro de console");
\`\`\`

---

## 🚀 Desafio de Observação
No Editor, tente rodar um \`console.log\` sem fechar as aspas ou os parênteses. Veja como o computador "reclama" (mostra um erro em vermelho). Depois, corrija e veja a mágica voltar!
`,
    codeExamples: [
      {
        title: 'Entendendo a Pontuação',
        language: 'javascript',
        code: `// Sem aspas: procura a variável\nlet fruta = "Maçã";\nconsole.log(fruta);\n\n// Com aspas: texto literal\nconsole.log("fruta");`,
        output: 'Maçã\nfruta',
        explanation: 'Note como a pontuação muda completamente o sentido do que o computador faz.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-01-03-q1',
      type: 'multiple_choice',
      question: 'Para que servem as aspas ("") no código?',
      options: [
        'Para destacar palavras bonitas.',
        'Para indicar ao computador que aquele trecho é um texto (dado) e não um comando.',
        'Para encerrar uma linha de código.',
        'Para realizar cálculos matemáticos.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! As aspas criam as "Strings" (correntes de caracteres).'
    }
  ]
};
