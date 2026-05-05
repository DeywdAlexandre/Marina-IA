import { Lesson } from '../../../../types/academy';

export const lesson0701: Lesson = {
  id: 'js-int-07-01',
  title: 'Parabéns! Você é um Desenvolvedor Intermediário',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <style>
      .cert-container {
        padding: 40px;
        background: #fff;
        text-align: center;
        font-family: 'Georgia', serif;
      }
      .certificate {
        border: 15px solid #3178C6;
        border-double: 5px solid #2563a3;
        padding: 50px;
        position: relative;
        background: #fff;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .certificate:before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border: 2px solid #3178C6;
        margin: 5px;
      }
      .logo { font-family: 'Segoe UI', sans-serif; font-weight: bold; color: #3178C6; font-size: 24px; margin-bottom: 20px; }
      .title { font-size: 42px; color: #333; margin-bottom: 10px; }
      .subtitle { font-size: 18px; color: #666; font-style: italic; margin-bottom: 40px; }
      .student-name { font-size: 32px; border-bottom: 2px solid #eee; display: inline-block; padding: 0 40px; margin-bottom: 20px; color: #222; }
      .course-name { font-size: 20px; color: #444; margin-bottom: 40px; }
      .footer-cert { display: flex; justify-content: space-between; margin-top: 50px; font-family: sans-serif; font-size: 12px; color: #888; }
      .seal { width: 80px; height: 80px; background: #3178C6; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 10px; transform: rotate(-15deg); border: 4px double white; }
    </style>
    <div class="cert-container">
      <div class="certificate">
        <div class="logo">MARINA ACADEMY</div>
        <div class="title">Certificado de Conclusão</div>
        <div class="subtitle">Este documento certifica que</div>
        <div class="student-name">ALUNO(A) MARINA IA</div>
        <div class="course-name">concluiu com êxito o curso de<br><strong>JavaScript Intermediário: Interatividade e APIs</strong></div>
        
        <div class="seal">SELO DE<br>QUALIDADE</div>

        <div class="footer-cert">
          <div>Data: ${new Date().toLocaleDateString()}</div>
          <div>ID: MACAD-JSINT-${Math.floor(Math.random() * 1000000)}</div>
          <div>Instrutora: Marina IA</div>
        </div>
      </div>
      <button onclick="window.print()" style="margin-top: 30px; padding: 10px 20px; background: #3178C6; color: white; border: none; border-radius: 5px; cursor: pointer; font-family: sans-serif;">Imprimir Certificado</button>
    </div>
  `,
  tips: [
    'Você completou 100% da trilha intermediária!',
    'O próximo nível é o JavaScript Avançado: Engenharia e Arquitetura.',
    'Continue praticando com o Marina Finance!'
  ],
  content: {
    markdown: `
# 🎓 VOCÊ CONSEGUIU!

Parabéns pela dedicação. Você percorreu um caminho longo:
- 🌳 Dominou a árvore do **DOM**.
- ⚡ Aprendeu a reagir a **Eventos**.
- 🌐 Conectou seu app com o mundo via **Fetch API**.
- 💾 Deu memória ao navegador com **LocalStorage**.
- 🏦 Construiu o seu primeiro sistema real: **Marina Finance**.

---

## 🎖️ Seu Certificado Simbólico
Vá na aba **Visualizar** e veja o seu certificado. Sinta-se orgulhoso(a), poucas pessoas chegam até aqui com esse nível de compreensão técnica.

---

## 🚀 O Próximo Nível
O JavaScript Intermediário te deu os "superpoderes" visuais. O **JavaScript Avançado** vai te dar a "Engenharia". Veremos:
- **Classes e Protótipos:** Para criar sistemas organizados.
- **Módulos:** Para separar seu código em arquivos profissionais.
- **Arquitetura:** Como grandes empresas constroem software.

---

## 🚀 Desafio de Despedida
No seu certificado, o nome está como "ALUNO(A) MARINA IA". Use o seu conhecimento de DOM no **script.js** para selecionar a div \`.student-name\` e colocar o seu nome real nela! 🎨✍️
`,
    codeExamples: [
      {
        title: 'Assinando seu Certificado',
        language: 'javascript',
        code: `// Coloque seu nome aqui!\ndocument.querySelector(".student-name").innerText = "Seu Nome Aqui";\n\nconsole.log("Certificado assinado com sucesso! 🖋️");`,
        output: '(Nome aparece no certificado no Preview)',
        explanation: 'Um último comando de DOM para marcar o fim desta jornada vitoriosa.'
      }
    ]
  }
};
