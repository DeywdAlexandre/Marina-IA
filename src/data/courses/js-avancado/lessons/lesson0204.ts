import { Lesson } from '../../../../types/academy';

export const lesson0204: Lesson = {
  id: 'js-adv-02-04',
  title: 'Estáticos e Polimorfismo: Inteligência de Classe',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧮 Calculadora de Vendas</h3>
      <p id="total-vendas" style="font-size: 14px; color: #888;">Total do Dia: R$ 0,00</p>
      <div style="display: flex; gap: 10px;">
        <button onclick="vender('Dinheiro')" style="padding: 10px; background: #eee;">Venda Dinheiro</button>
        <button onclick="vender('Cartao')" style="padding: 10px; background: #eee;">Venda Cartão (-5% taxa)</button>
      </div>
      <div id="output-venda" style="margin-top: 15px; font-weight: bold;"></div>
    </div>
  `,
  tips: [
    'Métodos estáticos (static) pertencem à CLASSE, não ao objeto individual. Úteis para funções de ajuda.',
    'Polimorfismo é a capacidade de diferentes classes terem o mesmo método, mas com comportamentos diferentes.',
    'Isso permite tratar vários objetos diferentes da mesma forma no código principal.'
  ],
  content: {
    markdown: `
# 🧠 Inteligência em Grupo: Estáticos e Polimorfismo

Às vezes precisamos de funções que ajudam a classe toda, ou queremos que objetos diferentes respondam ao mesmo comando de formas distintas.

---

## 🛠️ Métodos Estáticos (\`static\`)
Usados para utilitários que não precisam de uma instância específica.
\`\`\`javascript
class Conversor {
  static paraDolar(valor) { return valor / 5.20; }
}
console.log(Conversor.paraDolar(100)); // Não precisa de 'new'
\`\`\`

---

## 🏗️ Polimorfismo
Classes filhas podem sobrescrever métodos do pai.
\`\`\`javascript
class Pagamento { pagar() { /* padrão */ } }
class PagamentoPix extends Pagamento { pagar() { /* pix é instantâneo */ } }
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma classe base \`Venda\` com o método \`calcularTotal(valor)\`. Crie uma subclasse \`VendaCartao\` que sobrescreva esse método para descontar 5% de taxa. Use uma propriedade estática na classe base para contar quantas vendas foram feitas no total.
`,
    codeExamples: [
      {
        title: 'Herança Inteligente',
        language: 'javascript',
        code: `class Venda {\n  static contador = 0;\n  static totalAcumulado = 0;\n\n  constructor(valor) {\n    this.valor = valor;\n    Venda.contador++;\n  }\n\n  calcular() { return this.valor; }\n}\n\nclass VendaCartao extends Venda {\n  calcular() { return this.valor * 0.95; } // Desconto de taxa\n}\n\nwindow.vender = (tipo) => {\n  const v = tipo === 'Dinheiro' ? new Venda(100) : new VendaCartao(100);\n  const total = v.calcular();\n  Venda.totalAcumulado += total;\n  \n  document.querySelector("#output-venda").innerText = \`Venda \${tipo}: R$ \${total.toFixed(2)}\`;\n  document.querySelector("#total-vendas").innerText = \`Total do Dia: R$ \${Venda.totalAcumulado.toFixed(2)} (\${Venda.contador} vendas)\`;\n};`,
        output: '(Cálculos variam conforme o botão no Preview)',
        explanation: 'O polimorfismo permite que o botão "vender" não precise saber como o cálculo é feito, ele apenas chama .calcular().'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-02-04-q1',
      type: 'multiple_choice',
      question: 'Como chamamos um método estático de uma classe?',
      options: [
        'Através de uma instância: const obj = new Classe(); obj.metodo();',
        'Diretamente pelo nome da classe: Classe.metodo();',
        'Usando o comando import.',
        'Métodos estáticos não podem ser chamados.'
      ],
      correctAnswer: 1,
      explanation: 'Métodos estáticos são como funções globais "guardadas" dentro do namespace da classe.'
    }
  ]
};
