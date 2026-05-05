import { Lesson } from '../../../../types/academy';

export const lesson0201: Lesson = {
  id: 'git-02-01',
  title: 'Lendo a História (status e log)',
  type: 'mixed',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=xEKOcB2MvRc', // Usando aula genérica do Guanabara como material base
  videoTitle: 'Entendendo a História do Projeto - Curso em Vídeo',
  tips: [
    'O "git status" não altera nada, ele é apenas uma bússola. Você pode digitá-lo 100 vezes por dia sem medo.',
    'Cada commit gera um "hash" único (um código gigante). Esse código é o "RG" da sua foto.'
  ],
  content: {
    markdown: `
# 📖 O Diário de Bordo do Programador

Você bateu fotos (commits) do seu código, mas como você visualiza essas fotos? O Git seria inútil se fosse apenas um buraco negro onde você joga arquivos.

Existem dois comandos fundamentais que funcionam como os seus "óculos de leitura" no terminal.

> 🎓 **Créditos:** A didática deste curso homenageia o grande Professor **Gustavo Guanabara** do **Curso em Vídeo**, uma lenda do ensino no Brasil.

---

## 🧭 O Radar: \`git status\`

Antes de tomar qualquer atitude (antes de fazer um *add* ou um *commit*), você deve saber a situação atual da sua pasta. 
O comando **\`git status\`** te diz exatamente onde você está e o que está acontecendo.

\`\`\`bash
git status
\`\`\`

Ele vai te dar três tipos principais de informações:
1. **Arquivos Vermelhos (Untracked/Modified):** Arquivos que foram criados/alterados e que ainda NÃO foram para o palco (\`git add\`).
2. **Arquivos Verdes (Staged):** Arquivos que já estão no palco prontos para a foto (prontos para o \`git commit\`).
3. **Nothing to commit:** Mensagem de paz. Significa que a sua pasta está perfeitamente sincronizada e salva.

---

## 📜 O Livro de História: \`git log\`

O **\`git log\`** mostra todas as fotos que você já bateu, da mais recente para a mais antiga.

\`\`\`bash
git log
\`\`\`

A saída será algo parecido com isso:
\`\`\`text
commit a1b2c3d4e5f6g7h8i9j0 (HEAD -> master)
Author: Marina Oliveira <marina@exemplo.com.br>
Date:   Mon May 5 10:00:00 2025 -0300

    Criação da tela inicial do aplicativo
\`\`\`

Repare no número \`a1b2c3d4...\` — esse é o **Hash**. É a placa do carro do seu commit. Se um dia você quiser voltar no tempo, você usará esse número para dizer ao Git para onde quer viajar.

---

## 🚀 O Truque Ninja: Log Resumido

Quando o projeto tem mil commits, o \`git log\` normal fica gigante. Para ver apenas uma lista rápida e limpa em uma única linha por commit, use o melhor atalho do Git:

\`\`\`bash
git log --oneline
\`\`\`
*(A saída será apenas o começo do Hash e a mensagem. Muito mais limpo e profissional!)*
`
  },
  exercises: [
    {
      id: 'git-02-01-q1',
      type: 'multiple_choice',
      question: 'Ao digitar "git status", o terminal mostrou dois arquivos escritos em VERMELHO. O que isso significa?',
      options: [
        'Eles estão com vírus.',
        'Eles foram apagados permanentemente pelo sistema.',
        'Eles sofreram modificações (ou foram recém-criados), mas ainda NÃO estão no palco (staging area). Você precisa dar um "git add" neles.',
        'Significa erro fatal no repositório.'
      ],
      correctAnswer: 2,
      explanation: 'No mundo Git, Vermelho significa "código bagunçado fora do palco", enquanto Verde significa "código limpo no palco aguardando a foto do commit".'
    },
    {
      id: 'git-02-01-q2',
      type: 'multiple_choice',
      question: 'Para que serve a string alfanumérica gigante que aparece ao lado de "commit" quando digitamos o "git log"?',
      options: [
        'É uma senha que o GitHub pede para fazer login.',
        'É o Hash, um identificador único (como uma impressão digital ou placa) para aquele commit específico, permitindo resgatá-lo futuramente.',
        'É um bug da tela.',
        'É a chave do seu cartão de crédito.'
      ],
      correctAnswer: 1,
      explanation: 'O Hash (SHA-1) garante que nenhuma foto seja igual a outra. É a âncora usada para todas as viagens no tempo do Módulo 3.'
    }
  ]
};
