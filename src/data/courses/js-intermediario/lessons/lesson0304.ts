import { Lesson } from '../../../../types/academy';

export const lesson0304: Lesson = {
  id: 'js-int-03-04',
  title: 'Fetch API: Buscando Dados Reais',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2 style="color: #3178C6;">🏦 Marina Currency</h2>
      <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: inline-block; min-width: 250px;">
        <p style="color: #888; font-size: 14px; margin-bottom: 5px;">Cotação Atual (USD/BRL)</p>
        <h1 id="preco" style="margin: 0; color: #27c93f;">R$ 0,00</h1>
        <p id="atualizacao" style="font-size: 10px; color: #aaa; margin-top: 10px;">Aguardando busca...</p>
      </div>
      <br>
      <button id="btn-fetch" style="margin-top: 20px; padding: 12px 24px; background: #3178C6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
        Atualizar Cotação
      </button>
    </div>
  `,
  tips: [
    'O fetch() faz uma requisição HTTP (GET por padrão).',
    'O resultado do fetch precisa ser convertido para JSON: .json().',
    'Usamos APIs externas para obter dados de clima, moedas, notícias, etc.'
  ],
  content: {
    markdown: `
# 🌐 Fetch API: Conectando com o Mundo

Agora o bicho vai pegar! Vamos usar o **fetch** para buscar dados de um servidor real na internet.

---

## 🛠️ Como funciona o Fetch
O \`fetch\` retorna uma promessa. Precisamos esperar a resposta e depois converter essa resposta em um formato que o JS entenda (JSON).

\`\`\`javascript
async function buscarDolar() {
  // 1. Faz a chamada
  const resposta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
  
  // 2. Converte para JSON
  const dados = await resposta.json();
  
  // 3. Usa os dados
  console.log(dados.USDBRL.bid);
}
\`\`\`

---

## 🏗️ O que é JSON?
É o formato padrão de troca de dados na web. Parece um objeto JavaScript, mas é uma string organizada.

---

## 🚀 Desafio no Editor
Use a API da AwesomeAPI (\`https://economia.awesomeapi.com.br/last/USD-BRL\`) para buscar o valor do dólar. Ao receber os dados, atualize o texto da \`h1#preco\` com o valor (\`bid\`) formatado.
`,
    codeExamples: [
      {
        title: 'Buscando Moeda Real',
        language: 'javascript',
        code: `async function getPrice() {\n  document.querySelector("#atualizacao").innerText = "Buscando...";\n  \n  const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");\n  const data = await response.json();\n  \n  const valor = parseFloat(data.USDBRL.bid).toFixed(2);\n  \n  document.querySelector("#preco").innerText = "R$ " + valor;\n  document.querySelector("#atualizacao").innerText = "Atualizado em: " + new Date().toLocaleTimeString();\n}\n\ndocument.querySelector("#btn-fetch").addEventListener("click", getPrice);`,
        output: '(Cotação aparece no Preview)',
        explanation: 'O fetch abre as portas para que seu aplicativo tenha dados dinâmicos e atualizados.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-03-04-q1',
      type: 'multiple_choice',
      question: 'O que o método .json() faz após um fetch?',
      options: [
        'Transforma o JavaScript em um arquivo de texto.',
        'Converte o corpo da resposta HTTP em um objeto JavaScript utilizável.',
        'Salva os dados no computador do usuário.',
        'Envia um e-mail com os dados.'
      ],
      correctAnswer: 1,
      explanation: 'O .json() é essencial para lermos as informações que o servidor enviou.'
    }
  ]
};
