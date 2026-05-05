import { Lesson } from '../../../../types/academy';

export const lesson0103: Lesson = {
  id: 'shell-01-03',
  title: 'Seus Primeiros Comandos (echo e clear)',
  type: 'interactive',
  estimatedMinutes: 10,
  tips: [
    'O terminal é o seu papagaio de pirata. Se você não mandar ele fazer nada, ele fica te olhando com aquele cursor piscando.',
    'Sempre aperte Enter para enviar o comando. Só digitar não faz nada!'
  ],
  content: {
    markdown: `
# 🎤 Hello World no Terminal

Chega de teoria, vamos para a prática! Como todo bom curso de TI, a sua primeira missão é fazer o computador falar com você.

No Terminal (Bash/Zsh/PowerShell), o comando para imprimir textos na tela se chama **\`echo\`** (eco). O computador fará o "eco" da sua voz.

Experimente digitar no terminal à sua direita:
\`\`\`bash
echo "Hello World"
\`\`\`
E aperte a tecla **Enter**.

Você deve ver o texto \`Hello World\` impresso na linha de baixo!

---

## 🧹 Mantendo a Casa Limpa

Conforme você for digitando dezenas de comandos, a tela do terminal vai ficar cheia de letras e informações velhas. Isso pode ser confuso.

Quando a tela estiver muito poluída, existe um comando mágico para limpar tudo e te dar uma tela preta e fresca novamente.

Digite no terminal:
\`\`\`bash
clear
\`\`\`

> 💡 **Dica de Profissional:** Os verdadeiros hackers não digitam \`clear\`. Eles usam um atalho de teclado que faz exatamente a mesma coisa, só que muito mais rápido: **\`Ctrl + L\`**. Tente usar o atalho no seu dia a dia!

---

## 📝 Resumo Rápido

- O terminal sempre espera que você digite algo e pressione a tecla **Enter**.
- **\`echo\`**: Pega as palavras que você digitar e "cospe" de volta na tela.
- **\`clear\`**: Limpa todo o lixo visual da tela (ou use o atalho ninja \`Ctrl + L\`).
`
  },
  exercises: [
    {
      id: 'shell-01-03-q1',
      type: 'multiple_choice',
      question: 'Qual a utilidade do comando "clear" no terminal Unix/Bash?',
      options: [
        'Deletar todos os arquivos da pasta atual',
        'Desligar o computador rapidamente',
        'Limpar o texto da tela do terminal, deixando o console visualmente limpo sem apagar ou afetar nenhum arquivo real no HD.',
        'Apagar a memória RAM'
      ],
      correctAnswer: 2,
      explanation: 'O comando clear é puramente visual. Ele apenas rola a tela para cima para tirar a bagunça do seu campo de visão.'
    },
    {
      id: 'shell-01-03-q2',
      type: 'multiple_choice',
      question: 'Qual é o atalho de teclado preferido dos profissionais de TI para limpar a tela em vez de digitar a palavra inteira "clear"?',
      options: [
        'Alt + F4',
        'Ctrl + C',
        'Ctrl + Z',
        'Ctrl + L'
      ],
      correctAnswer: 3,
      explanation: 'Ctrl + L é o atalho universal de limpeza de tela, suportado tanto em terminais Linux/Mac quanto no PowerShell do Windows.'
    }
  ]
};
