import { Lesson } from '../../../../types/academy';

export const lesson0103: Lesson = {
  id: 'js-int-01-03',
  title: 'Modificando Conteúdo e Estilos (O Poder do JS)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Use innerText para mudar apenas o texto.',
    'Use innerHTML se precisar incluir tags HTML dentro da mudança.',
    'Estilos via JS usam "camelCase": backgroundColor em vez de background-color.'
  ],
  content: {
    markdown: `
# 🎨 Mudando Tudo: Conteúdo e Estilo

Agora que você já sabe "agarrar" o elemento, vamos aprender a transformá-lo!

---

## ✍️ Alterando o Texto
\`\`\`javascript
let titulo = document.querySelector("h1");
titulo.innerText = "Novo Título da Marina!";
\`\`\`

---

## 💅 Alterando o Estilo (CSS)
O JavaScript pode acessar qualquer propriedade CSS através da propriedade \`.style\`.

\`\`\`javascript
let caixa = document.querySelector(".caixa-aviso");

caixa.style.backgroundColor = "red";
caixa.style.color = "white";
caixa.style.borderRadius = "10px";
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma variável que selecione o \`document.body\`. Mude a cor de fundo (\`backgroundColor\`) para \`#1e1e1e\` e a cor do texto para \`#primary\`. 
(Obs: Como estamos no simulador, você verá o resultado nos exemplos!).
`,
    codeExamples: [
      {
        title: 'Manipulação Dinâmica',
        language: 'javascript',
        code: `let aviso = document.createElement("div");\naviso.innerText = "Atenção: Sistema Iniciado!";\naviso.style.padding = "20px";\naviso.style.border = "2px solid green";\n\nconsole.log(aviso.outerHTML);`,
        output: '<div style="padding: 20px; border: 2px solid green;">Atenção: Sistema Iniciado!</div>',
        explanation: 'Modificar estilos dinamicamente é o que permite criar menus que abrem e fecham, botões que brilham, etc.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-01-03-q1',
      type: 'multiple_choice',
      question: 'Como escrevemos a propriedade font-size do CSS dentro do JavaScript?',
      options: [
        'font-size',
        'FontSize',
        'fontSize',
        'font_size'
      ],
      correctAnswer: 2,
      explanation: 'O JavaScript usa o padrão camelCase para propriedades CSS que têm hífen.'
    }
  ]
};
