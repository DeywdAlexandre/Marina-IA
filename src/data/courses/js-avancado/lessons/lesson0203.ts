import { Lesson } from '../../../../types/academy';

export const lesson0203: Lesson = {
  id: 'js-adv-02-03',
  title: 'Getters, Setters e Propriedades Privadas',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
      <h3>🔒 Conta Bancária (Encapsulamento)</h3>
      <div style="font-size: 24px; color: #27c93f; font-weight: bold;" id="saldo-display">R$ 0,00</div>
      <div style="margin-top: 15px; display: flex; gap: 5px;">
        <input type="number" id="input-deposito" placeholder="Valor..." style="width: 80px; padding: 5px;">
        <button id="btn-deposito" style="padding: 5px 10px; background: #27c93f; color: white; border: none; cursor: pointer;">Depositar</button>
      </div>
      <p id="msg-erro" style="color: red; font-size: 10px; margin-top: 5px;"></p>
    </div>
  `,
  tips: [
    'Use # antes do nome da variável para torná-la PRIVADA (ex: #saldo). Ninguém fora da classe pode mexer nela.',
    'Getters funcionam como propriedades, mas executam uma lógica de leitura.',
    'Setters permitem validar o dado antes de ele ser gravado.'
  ],
  content: {
    markdown: `
# 🔒 Protegendo os Dados (Encapsulamento)

Em um sistema financeiro, você não quer que qualquer parte do código possa mudar o \`saldo\` para um milhão de reais. Precisamos de **privacidade**.

---

## 🛠️ Propriedades Privadas (\`#\`)
O símbolo \`#\` bloqueia o acesso externo.
\`\`\`javascript
class Conta {
  #saldo = 0; // Privado!
  
  depositar(valor) {
    if (valor > 0) this.#saldo += valor;
  }
}
\`\`\`

---

## 🏗️ Getters e Setters
Permitem usar uma função como se fosse uma variável.
\`\`\`javascript
get saldoFormatado() {
  return "R$ " + this.#saldo.toFixed(2);
}
\`\`\`

---

## 🚀 Desafio no Editor
Crie a classe \`ContaBancaria\` com um \`#saldo\` privado. Use um \`set saldo\` que impeça valores negativos. Implemente o botão de depósito para atualizar a tela usando um \`get\` para formatar o valor.
`,
    codeExamples: [
      {
        title: 'Proteção de Saldo',
        language: 'javascript',
        code: `class Conta {\n  #saldo = 0;\n\n  set depositar(valor) {\n    if (valor <= 0) throw new Error("Valor inválido");\n    this.#saldo += valor;\n  }\n\n  get saldoFormatado() {\n    return "R$ " + this.#saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 });\n  }\n}\n\nconst minhaConta = new Conta();\n\ndocument.querySelector("#btn-deposito").addEventListener("click", () => {\n  const val = Number(document.querySelector("#input-deposito").value);\n  try {\n    minhaConta.depositar = val;\n    document.querySelector("#saldo-display").innerText = minhaConta.saldoFormatado;\n    document.querySelector("#msg-erro").innerText = "";\n  } catch (err) {\n    document.querySelector("#msg-erro").innerText = err.message;\n  }\n});`,
        output: '(Saldo protegido e formatado no Preview)',
        explanation: 'Encapsulamento garante que as regras de negócio (como não aceitar depósito negativo) sejam sempre respeitadas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-02-03-q1',
      type: 'multiple_choice',
      question: 'O que acontece se você tentar ler uma propriedade privada (ex: console.log(obj.#campo)) fora da classe?',
      options: [
        'Retorna undefined.',
        'Funciona normalmente.',
        'O JavaScript lança um Erro de Sintaxe fatal.',
        'Retorna null.'
      ],
      correctAnswer: 2,
      explanation: 'Campos privados são protegidos a nível de linguagem; o navegador nem permite que o código rode se houver essa tentativa.'
    }
  ]
};
