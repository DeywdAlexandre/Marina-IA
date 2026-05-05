import { Lesson } from '../../../../types/academy';

export const lesson0305: Lesson = {
  id: 'js-int-03-05',
  title: 'Tratamento de Erros: Try e Catch',
  type: 'mixed',
  estimatedMinutes: 12,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 style="color: #ff5f56;">🛡️ Modo Seguro</h2>
      <div id="container-erro" style="padding: 20px; border: 2px solid #ddd; border-radius: 8px;">
        <p id="msg-sistema">Sistema Operacional Estável</p>
      </div>
      <button id="btn-quebrar" style="margin-top: 15px; padding: 10px; background: #ff5f56; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Tentar Ação Perigosa
      </button>
    </div>
  `,
  tips: [
    'Try: "Tente executar este código".',
    'Catch: "Se der erro, faça isso em vez de quebrar o app".',
    'Indispensável para lidar com APIs que podem estar fora do ar.'
  ],
  content: {
    markdown: `
# 🛡️ Try / Catch: O Escudo do Programador

Sempre que usamos internet ou coisas incertas, o código pode falhar. Um bom programador prevê o erro e o trata graciosamente.

---

## 🛠️ Como funciona
\`\`\`javascript
try {
  // Código que pode dar erro (ex: fetch em URL errada)
  const resp = await fetch("https://api-que-nao-existe.com");
} catch (erro) {
  // O que fazer se der erro
  console.error("Ops! Algo deu errado: " + erro.message);
  alert("Não foi possível buscar os dados.");
}
\`\`\`

---

## 🏗️ Por que usar?
Sem o \`try/catch\`, se o servidor estiver fora do ar, seu aplicativo inteiro "congela" ou para de funcionar. Com ele, você pode mostrar uma mensagem amigável para o usuário.

---

## 🚀 Desafio no Editor
Crie uma função \`async\` que tente fazer um \`fetch\` em uma URL qualquer. Envolva tudo em um \`try/catch\`. Se cair no \`catch\`, mude o texto da div \`#msg-sistema\` para "Erro detectado e controlado! 🛡️".
`,
    codeExamples: [
      {
        title: 'Capturando Falhas',
        language: 'javascript',
        code: `async function segura() {\n  try {\n    document.querySelector("#msg-sistema").innerText = "Buscando...";\n    // URL inválida propositalmente\n    await fetch("https://api.invalida.xyz");\n  } catch (err) {\n    document.querySelector("#msg-sistema").innerText = "Servidor Offline! Exibindo dados locais.";\n    document.querySelector("#container-erro").style.borderColor = "red";\n  }\n}\n\ndocument.querySelector("#btn-quebrar").addEventListener("click", segura);`,
        output: '(Mensagem de erro controlada no Preview)',
        explanation: 'Tratar erros é o que diferencia um sistema amador de um profissional e estável.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-03-05-q1',
      type: 'multiple_choice',
      question: 'O que acontece se um erro ocorrer dentro do bloco "try" e não houver um "catch"?',
      options: [
        'O JavaScript ignora o erro e continua.',
        'O erro sobe para o navegador e pode parar a execução do seu script.',
        'O navegador corrige o erro automaticamente.',
        'O código roda mais rápido.'
      ],
      correctAnswer: 1,
      explanation: 'Erros não tratados são "fatais" para a execução do script atual, por isso o catch é vital.'
    }
  ]
};
