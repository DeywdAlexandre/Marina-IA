import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0505: Lesson = {
  id: 'js-adv-05-05',
  title: 'Projeto POS 5/5: Finalização e Persistência',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0501.previewHtml,
  tips: [
    'O estoque do catálogo deve ser salvo no LocalStorage toda vez que uma venda for concluída.',
    'Ao recarregar o app, tente carregar o estoque salvo ou use o padrão.',
    'Parabéns! Você construiu um sistema funcional de PDV do zero!'
  ],
  content: {
    markdown: `
# 🏁 Finalizando o Marina POS

Para que o sistema seja realmente útil, o estoque não pode "resetar" toda vez que a página recarregar. Vamos persistir o estado do catálogo.

---

## 🛠️ O Toque Final
1. Criar uma função \`salvarEstoque()\`.
2. Carregar o estoque no \`init()\` do sistema.
3. Adicionar um relógio em tempo real no header usando \`setInterval\`.

---

## 🏗️ O Poder do JS Avançado
Você usou:
- **Classes** para modelar dados.
- **LocalStorage** para persistência.
- **DOM Dinâmico** para a interface.
- **Lógica de Negócio** para validar estoque.

---

## 🚀 Desafio no Editor
Implemente o salvamento do estoque. Tente também adicionar um pequeno relógio no elemento \`#pos-clock\` que atualize a cada segundo. Você agora tem um PDV (Ponto de Venda) completo e funcional!
`,
    codeExamples: [
      {
        title: 'Sistema Persistente',
        language: 'javascript',
        code: `function salvar() {\n  localStorage.setItem('marina_pos_stock', JSON.stringify(catalogo));\n}\n\n// No seu init:\nconst cache = localStorage.getItem('marina_pos_stock');\nif (cache) {\n  // Aqui você reconstruiria as instâncias de Produto com os dados salvos\n}\n\n// Relógio\nsetInterval(() => {\n  document.querySelector("#pos-clock").innerText = new Date().toLocaleTimeString();\n}, 1000);`,
        output: '(Relógio funcionando e dados persistidos)',
        explanation: 'A persistência de estado é o que separa um brinquedo de um software de produção.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-05-05-q1',
      type: 'multiple_choice',
      question: 'Parabéns por terminar o Projeto 1! Qual foi o pilar mais importante para garantir que o sistema não vendesse produtos inexistentes?',
      options: [
        'O CSS personalizado.',
        'A Validação de Integridade na lógica de negócio (Encapsulamento).',
        'O uso de imagens bonitas.',
        'O nome do aplicativo.'
      ],
      correctAnswer: 1,
      explanation: 'A lógica de controle é o coração de qualquer sistema de gestão.'
    }
  ]
};
