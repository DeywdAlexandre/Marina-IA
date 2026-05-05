import { Lesson } from '../../../../types/academy';

export const lesson0301: Lesson = {
  id: 'git-03-01',
  title: 'O CTRL+Z Rápido (restore e checkout)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O comando restore é o sucessor moderno do antigo checkout para desfazer mudanças em arquivos.',
    'Cuidado: Desfazer mudanças com esses comandos apaga o que você escreveu e NÃO tem volta.'
  ],
  content: {
    markdown: `
# ⏪ O Botão de Arrependimento Instantâneo

Sabe aquele momento em que você começa a editar um arquivo, faz uma bagunça terrível e só queria que ele voltasse a ser como era antes de você começar? No Word, você daria um Ctrl+Z. No Git, você tem comandos muito mais precisos.

---

## 🛠️ Restaurando Arquivos com \`git restore\`

Se você alterou o arquivo \`index.html\`, ele está "vermelho" no seu radar (\`git status\`) e você quer que ele volte a ser exatamente como estava na última foto salva (o último commit), use:

\`\`\`bash
git restore index.html
\`\`\`

Isso vai "limpar" suas edições atuais e resetar o arquivo para o estado do último commit. 

> ⚠️ **Atenção:** Se você não salvou o que escreveu em um commit, ao dar o restore, aquele código sumirá para sempre. Use com sabedoria!

---

## 🎭 O Antigo \`git checkout\`

Antes do comando \`restore\` ser criado, os programadores usavam o comando **\`git checkout -- arquivo\`**. Você ainda verá muita gente usando ele na internet. 

\`\`\`bash
# Faz a mesma coisa que o git restore
git checkout -- index.html
\`\`\`

No Git moderno, o \`checkout\` agora é usado principalmente para trocar de "universos" (Branches), que aprenderemos no Módulo 4. Por enquanto, foque no \`restore\` para consertar arquivos bagunçados.

---

## 📦 Tirando do Palco

E se você deu um \`git add .\` mas percebeu que colocou um arquivo no palco que ainda não deveria ser salvo? Você quer "des-preparar" o arquivo sem apagar o que escreveu nele.

\`\`\`bash
# Tira o arquivo do palco (Staging Area) mas mantém suas edições
git restore --staged index.html
\`\`\`
`
  },
  exercises: [
    {
      id: 'git-03-01-q1',
      type: 'multiple_choice',
      question: 'Você editou o arquivo "style.css", mas não gostou do resultado e quer que ele volte a ser como era no último commit. Qual o comando moderno para isso?',
      options: [
        'git undo style.css',
        'git restore style.css',
        'git delete style.css',
        'git reset style.css'
      ],
      correctAnswer: 1,
      explanation: 'O "git restore" é o comando oficial para restaurar o estado de um arquivo para a versão da última foto (commit) tirada.'
    },
    {
      id: 'git-03-01-q2',
      type: 'multiple_choice',
      question: 'Qual a diferença entre "git restore" e "git restore --staged"?',
      options: [
        'Não há diferença.',
        'O primeiro apaga o arquivo, o segundo renomeia.',
        'O "git restore" desfaz mudanças no arquivo de trabalho. O "--staged" apenas retira o arquivo da área de preparação (palco) mas mantém o que você escreveu.',
        'O "--staged" é usado apenas para apagar o histórico inteiro.'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! O --staged serve para quando você deu um "add" por engano, mas ainda quer continuar editando o arquivo antes de bater a foto.'
    }
  ]
};
