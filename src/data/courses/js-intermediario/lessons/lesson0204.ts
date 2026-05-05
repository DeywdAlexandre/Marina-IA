import { Lesson } from '../../../../types/academy';

export const lesson0204: Lesson = {
  id: 'js-int-02-04',
  title: 'Formulários: Capturando e Travando Envios',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O evento "submit" é disparado no FORMULÁRIO, não no botão.',
    'Use event.preventDefault() para impedir que a página recarregue.',
    'Isso permite que o JavaScript processe os dados antes de qualquer envio.'
  ],
  content: {
    markdown: `
# 📝 Formulários: O Coração dos Dados

Esta é a lição mais importante para o nosso projeto **Marina Finance**. Quase todo dado que entra em um app vem de um formulário.

---

## 🛠️ O evento "submit"
Quando o usuário aperta Enter ou clica no botão de enviar, o navegador tenta enviar os dados para um servidor e **recarrega a página**. Para evitar isso, usamos:

\`\`\`javascript
let formulario = document.querySelector("#finance-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // 🛑 PARA TUDO! Não recarregue a página.
  
  console.log("Formulário capturado com sucesso!");
  // Aqui pegamos os valores...
});
\`\`\`

---

## 🏗️ Pegando Valores dos Inputs
\`\`\`javascript
let valorInput = document.querySelector("#valor").value;
let descricaoInput = document.querySelector("#desc").value;

console.log("Gasto: " + descricaoInput + " | R$" + valorInput);
\`\`\`

---

## 🚀 Desafio no Editor
Crie a lógica para um formulário de login. Ao enviar, use \`preventDefault()\` e imprima no console: "Tentativa de login para: " + o valor do input de e-mail.
`,
    codeExamples: [
      {
        title: 'Validação Básica',
        language: 'javascript',
        code: `let form = document.querySelector("form");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  let nome = document.querySelector("#nome").value;\n  \n  if (nome.length < 3) {\n    alert("Nome muito curto!");\n  } else {\n    console.log("Enviado: " + nome);\n  }\n});`,
        output: '(Aguardando submissão)',
        explanation: 'Interceptar o submit permite validar os dados e dar feedback ao usuário sem recarregar a página.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-02-04-q1',
      type: 'multiple_choice',
      question: 'Para que serve o método event.preventDefault()?',
      options: [
        'Para apagar os dados do formulário.',
        'Para impedir o comportamento padrão do navegador (como recarregar a página no submit).',
        'Para enviar os dados mais rápido.',
        'Para fechar a aba do navegador.'
      ],
      correctAnswer: 1,
      explanation: 'Sem o preventDefault, o JavaScript morre assim que o formulário é enviado porque a página "nasce de novo" (recarrega).'
    }
  ]
};
