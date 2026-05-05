import { Lesson } from '../../../../types/academy';

export const lesson0702: Lesson = {
  id: 'git-07-02',
  title: 'Pinçando Commits (cherry-pick)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Cherry-pick significa literalmente "escolher a cereja".',
    'É muito útil quando você fez um commit incrível em uma branch errada e quer trazê-lo para a master sem trazer o resto da bagunça.'
  ],
  content: {
    markdown: `
# 🍒 Escolhendo a Cereja (\`cherry-pick\`)

Você já se viu na situação de querer apenas **UM** commit específico de uma branch, mas sem querer fazer o \`merge\` da branch inteira (que traria outros 50 commits que você ainda não quer)?

Para esses casos cirúrgicos, usamos o **\`git cherry-pick\`**.

---

## 🏗️ Como usar a Pinça

Imagine que o seu colega fez um commit genial de correção de segurança na branch \`experimento-louco\`. O Hash do commit dele é \`c4f3d2e\`. 

Você está na \`master\` e quer apenas essa correção AGORA.

\`\`\`bash
git cherry-pick c4f3d2e
\`\`\`

O Git vai:
1. Ir até a outra branch.
2. Localizar o commit \`c4f3d2e\`.
3. Copiar as alterações daquele commit.
4. Aplicar um **NOVO commit** idêntico na sua branch atual.

---

## ⚠️ Cuidado com as sementes

O \`cherry-pick\` é uma ferramenta de exceção. Se você usá-lo demais, seu histórico vai ficar cheio de commits duplicados. 
Sempre prefira o \`merge\` ou o \`rebase\` para fluxos normais de trabalho. Use a pinça apenas para "resgates" de emergência!
`
  },
  exercises: [
    {
      id: 'git-07-02-q1',
      type: 'multiple_choice',
      question: 'O que o comando "git cherry-pick <hash>" faz?',
      options: [
        'Deleta o commit selecionado.',
        'Copia as alterações de um commit específico de qualquer branch e as aplica como um novo commit na sua branch atual.',
        'Faz o merge de todas as branches do projeto.',
        'Muda a cor do terminal para vermelho cereja.'
      ],
      correctAnswer: 1,
      explanation: 'Ele permite uma "migração seletiva" de código entre branches.'
    },
    {
      id: 'git-07-02-q2',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre um MERGE e um CHERRY-PICK?',
      options: [
        'O Merge é mais lento.',
        'O Merge traz todo o histórico de uma branch para outra. O Cherry-pick traz apenas UM commit específico escolhido por você.',
        'O Cherry-pick apaga o commit original e o Merge não.',
        'Não há diferença técnica.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! Merge é coletivo, Cherry-pick é individual.'
    }
  ]
};
