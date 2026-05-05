import { Lesson } from '../../../../types/academy';

export const lesson0603: Lesson = {
  id: 'js-int-06-03',
  title: 'Bug 3: "Network Error" (CORS e APIs)',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 style="color: #666;">🌐 Teste de Rede</h2>
      <p id="api-status">API: Desconhecida</p>
      <div id="loader" style="display: none; margin: 10px auto; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #3178C6; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <button id="btn-test" style="padding: 10px; background: #3178C6; color: white; border: none; border-radius: 4px; cursor: pointer;">Testar Conexão</button>
      <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
    </div>
  `,
  tips: [
    'CORS é uma medida de segurança que impede um site de ler dados de outro sem permissão.',
    'Se a API der erro de rede, verifique se a URL está correta e se a API é pública.',
    'Sempre use try/catch em volta do fetch.'
  ],
  content: {
    markdown: `
# 🌐 Por que o Fetch falhou?

Você tenta buscar dados de um site e recebe um erro vermelho gigante de **CORS**. O que é isso?

---

## 🛠️ O que é CORS?
Significa *Cross-Origin Resource Sharing*. Basicamente, o servidor da API precisa dizer: "Eu permito que o site da Marina acesse meus dados".

---

## 🏗️ Como sobreviver?
1. **Use APIs Públicas:** APIs profissionais já vêm configuradas para permitir acesso de qualquer lugar.
2. **Confira o Protocolo:** Use sempre \`https://\` em vez de \`http://\`. Muitos navegadores bloqueiam chamadas inseguras.

---

## 🚀 Desafio no Editor
Simule uma falha de rede. Tente fazer um fetch em uma URL que não existe e use o \`catch\` para mostrar a mensagem "Erro de Conexão: Verifique sua Internet" na tela.
`,
    codeExamples: [
      {
        title: 'Diagnóstico de Rede',
        language: 'javascript',
        code: `const status = document.querySelector("#api-status");\n\nasync function checkAPI() {\n  try {\n    const r = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");\n    if (r.ok) status.innerText = "API Online! ✅";\n    else throw new Error();\n  } catch (err) {\n    status.innerText = "API Offline ou Bloqueada! ❌";\n    status.style.color = "red";\n  }\n}\n\ndocument.querySelector("#btn-test").addEventListener("click", checkAPI);`,
        output: '(Status da rede aparece no Preview)',
        explanation: 'Saber diagnosticar se o erro é no seu código ou no servidor externo é uma habilidade sênior.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-06-03-q1',
      type: 'multiple_choice',
      question: 'O que o erro de CORS geralmente indica?',
      options: [
        'Que você errou a lógica de soma.',
        'Que o servidor da API não autorizou seu site a ler os dados por segurança.',
        'Que seu computador está sem memória.',
        'Que o JavaScript expirou.'
      ],
      correctAnswer: 1,
      explanation: 'CORS é uma barreira de segurança entre domínios diferentes no navegador.'
    }
  ]
};
