import { Lesson } from '../../../../types/academy';

export const lesson0701: Lesson = {
  id: 'js-adv-07-01',
  title: 'A Maestria Técnica: O Fim e o Começo',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <style>
      .cert-adv {
        padding: 40px;
        background: #1a1a1a;
        text-align: center;
        color: white;
        border: 10px solid #F7DF1E;
        border-radius: 4px;
        position: relative;
      }
      .cert-adv h1 { color: #F7DF1E; font-size: 32px; margin-bottom: 5px; }
      .cert-adv p { font-style: italic; color: #ccc; }
      .cert-adv h2 { font-size: 36px; margin: 20px 0; border-bottom: 2px solid #333; display: inline-block; padding: 0 50px; }
      .badge-adv {
        width: 100px; height: 100px; margin: 20px auto;
        background: radial-gradient(circle, #F7DF1E 0%, #d4bb00 100%);
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        color: #000; font-weight: bold; font-size: 14px; box-shadow: 0 0 20px rgba(247,223,30,0.5);
      }
    </style>
    <div class="cert-adv">
      <h1>CERTIFICADO DE MAESTRIA</h1>
      <p>A Marina Academy confere este título a:</p>
      <h2 id="adv-student">DESENVOLVEDOR(A) SÊNIOR</h2>
      <p>por dominar a Engenharia, Arquitetura e Performance em</p>
      <h3>JAVASCRIPT AVANÇADO</h3>
      <div class="badge-adv">MAESTRIA<br>TECH</div>
      <div style="margin-top: 30px; font-size: 12px; color: #666;">
        ID: ADV-JS-${Math.floor(Math.random()*999999)} | Data: ${new Date().toLocaleDateString()}
      </div>
    </div>
  `,
  tips: [
    'Você agora entende os fundamentos de qualquer framework (React, Vue, Angular).',
    'Sua base em Vanilla JS é o que te tornará um desenvolvedor acima da média.',
    'Nunca pare de construir projetos funcionais!'
  ],
  content: {
    markdown: `
# 🏆 O TOPO DA MONTANHA

Você completou a trilha mais difícil da Marina Academy. Você não é mais apenas alguém que "faz scripts", você é um **Engenheiro de Software**.

---

## 🛠️ O que você agora domina:
1. **ES6+ Moderno:** Escreve códigos limpos e performáticos.
2. **OOP Profissional:** Sabe modelar sistemas complexos e protegidos.
3. **Engenharia:** Conhece padrões de projeto (SOLID, Singleton, Observer).
4. **Performance:** Sabe usar Cache, Workers e controle de eventos.
5. **Projetos Reais:** Construiu um PDV e um CRM funcionais.

---

## 🏗️ O Que Vem Depois?
Agora você está pronto para:
- Aprender **React.js** ou **Next.js** com facilidade.
- Criar APIs no **Node.js**.
- Liderar projetos técnicos.

---

## 🚀 Desafio Final de Maestria
No seu certificado de maestria, o nome está como "DESENVOLVEDOR(A) SÊNIOR". Use o seu conhecimento de **DOM Avançado** para capturar o elemento \`#adv-student\` e colocar o seu nome nele, mas faça isso usando uma **Higher-Order Function** ou um **Proxy** para validar que o nome não está vazio!
`,
    codeExamples: [
      {
        title: 'Assinatura de Mestre',
        language: 'javascript',
        code: `const assinar = (nome) => {\n  if (!nome) throw new Error("Nome inválido");\n  document.querySelector("#adv-student").innerText = nome.toUpperCase();\n};\n\ntry {\n  assinar("Seu Nome Aqui");\n  console.log("🏅 Certificado de Maestria assinado!");\n} catch (e) {\n  console.error(e.message);\n}`,
        output: '(Seu nome brilha no certificado dourado)',
        explanation: 'Um toque final de classe para marcar sua nova patente como desenvolvedor.'
      }
    ]
  }
};
