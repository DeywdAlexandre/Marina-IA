import { Lesson } from '../../../../types/academy';

export const lesson0601: Lesson = {
  id: 'git-06-01',
  title: 'O Fluxo de Forks',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Dar um Fork é como tirar uma xerox de um projeto famoso para a sua própria conta.',
    'O Fork é o primeiro passo para contribuir com projetos Open Source (Código Aberto).'
  ],
  content: {
    markdown: `
# 🔱 O Garfo da Liberdade (Fork)

Imagine que você encontrou um projeto incrível no GitHub, como o código do Linux ou de um jogo famoso. Você quer mexer nele, mas você não tem permissão para dar um \`git push\` direto no servidor deles (claro, você não é o dono!).

Como você faz para sugerir uma melhoria? Usando o **Fork**.

---

## 📋 O que é um Fork?

Diferente do \`clone\` (que apenas baixa o código para o seu PC), o **Fork** é uma ação feita **dentro do site do GitHub**.

Quando você clica no botão "Fork", o GitHub cria uma cópia exata do repositório original **dentro da sua conta**. 
- Agora você é o dono da cópia. 
- Você tem permissão total de Push na sua cópia.
- O projeto original continua intacto e seguro.

---

## 🛠️ O Fluxo de Trabalho

O fluxo de um contribuidor Open Source é sempre este:
1. **Fork:** Cria a cópia no seu GitHub.
2. **Clone:** Baixa a sua cópia para o seu computador.
3. **Branch:** Cria uma branch para a sua melhoria.
4. **Commit/Push:** Salva e envia para a sua cópia.
5. **Pull Request:** Pede para o dono original aceitar suas mudanças (veremos na próxima aula).

> 💡 **Curiosidade:** Quase todo software que você usa hoje (navegadores, Android, etc.) foi construído por milhares de pessoas usando esse fluxo de "xerox e sugestão".
`
  },
  exercises: [
    {
      id: 'git-06-01-q1',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre um CLONE e um FORK?',
      options: [
        'O Clone apaga o original.',
        'O Clone baixa o código para o seu computador local. O Fork cria uma cópia completa do repositório de outra pessoa dentro da sua conta do GitHub na nuvem.',
        'Não há diferença.',
        'O Fork é pago e o Clone é gratuito.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! O Fork permite que você tenha a sua própria versão do projeto na nuvem para fazer o que quiser sem estragar o projeto oficial.'
    },
    {
      id: 'git-06-01-q2',
      type: 'multiple_choice',
      question: 'Por que o Fork é essencial para o mundo Open Source?',
      options: [
        'Porque ele protege o código original de modificações maliciosas ou erradas de desconhecidos, permitindo que qualquer um sugira melhorias através de suas próprias cópias.',
        'Porque ele aumenta a velocidade da internet.',
        'Porque ele traduz o código para português.',
        'Porque ele cria um backup no Google Drive.'
      ],
      correctAnswer: 0,
      explanation: 'O Fork democratiza o desenvolvimento: todos podem mexer, mas só os donos oficiais decidem o que entra no projeto principal.'
    }
  ]
};
