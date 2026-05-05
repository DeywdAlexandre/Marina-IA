import { Lesson } from '../../../../types/academy';

export const lesson0602: Lesson = {
  id: 'git-06-02',
  title: 'Pull Requests (O Pedido de Mesclagem)',
  type: 'mixed',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=6m3XfA4Xz9w',
  videoTitle: 'Pull Requests e Trabalho em Equipe (Aula 13) - Curso em Vídeo',
  tips: [
    'O Pull Request (PR) não é um comando de terminal, é um recurso visual do GitHub.',
    'Um bom PR deve ter uma descrição clara do que foi feito e por que deve ser aceito.'
  ],
  content: {
    markdown: `
# 📝 O Pedido de Aceitação (Pull Request)

Você fez o **Fork**, criou uma **Branch**, corrigiu um bug e deu um **Push** para a sua conta. Agora, como você avisa ao dono do projeto original que você tem um presente (um código melhor) para ele?

Você abre um **Pull Request (PR)**.

---

## 🤝 O que acontece em um PR?

Um Pull Request é basicamente um convite para uma conversa. Ao abrir um PR:
1. O GitHub mostra um comparativo (diff) entre o seu código e o código original.
2. O dono do projeto pode ler seu código, fazer comentários e pedir ajustes.
3. Se ele gostar, ele clica em **"Merge"** e o seu código passa a fazer parte do projeto oficial!

---

## 🧐 Por que o nome é "Pull" Request?

Pode parecer confuso. Se você está "enviando" uma sugestão, por que não se chama "Push Request"?

O nome vem da perspectiva do dono do projeto original. Você está fazendo uma **Requisição** para que ELE dê um **Pull** (puxe) das suas alterações para dentro do projeto dele.

---

## 🧪 Code Review (Revisão de Código)

Nas empresas, ninguém joga código direto na master. 
- O desenvolvedor cria uma branch.
- Abre um PR.
- Outros desenvolvedores lêem o código (Code Review), apontam erros ou sugerem melhorias.
- Somente após a aprovação de pelo menos um colega, o código é mesclado.

Isso garante que o aplicativo nunca quebre por causa de um erro bobo que uma segunda pessoa poderia ter visto.
`
  },
  exercises: [
    {
      id: 'git-06-02-q1',
      type: 'multiple_choice',
      question: 'O que é um Pull Request no contexto do GitHub?',
      options: [
        'Um comando de terminal usado para apagar arquivos.',
        'Um recurso do site do GitHub que permite propor alterações de código de um repositório para outro (ou de uma branch para outra) para que sejam revisadas e mescladas.',
        'Uma forma de pedir dinheiro para outros desenvolvedores.',
        'Um erro que acontece quando a internet cai.'
      ],
      correctAnswer: 1,
      explanation: 'O PR é a alma da colaboração. É o lugar onde as discussões sobre o código acontecem antes de ele ser salvo definitivamente.'
    },
    {
      id: 'git-06-02-q2',
      type: 'multiple_choice',
      question: 'Qual a importância do "Code Review" durante um Pull Request?',
      options: [
        'Aumentar o tempo de entrega do projeto.',
        'Serve apenas para criticar o trabalho dos outros.',
        'É uma etapa crucial de qualidade onde colegas revisam o código em busca de bugs, falhas de segurança ou melhorias antes que ele seja integrado ao produto final.',
        'Não tem importância nenhuma.'
      ],
      correctAnswer: 2,
      explanation: 'Quatro olhos vêem melhor que dois. O Code Review é a maior ferramenta de aprendizado e segurança em uma equipe de tecnologia.'
    }
  ]
};
