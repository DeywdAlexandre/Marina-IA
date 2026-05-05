import { Lesson } from '../../../../types/academy';

export const lesson0103: Lesson = {
  id: 'git-01-03',
  title: 'Seu Primeiro Repositório',
  type: 'mixed',
  estimatedMinutes: 20,
  videoUrl: 'https://www.youtube.com/watch?v=cQhG6b_xX8Y',
  videoTitle: 'Iniciando o Git (Aula 05) - Curso em Vídeo',
  tips: [
    'Repositório é apenas um nome chique (e assustador) que os desenvolvedores usam para chamar uma "Pasta monitorada pelo Git".',
    'O Git não salva nada automaticamente. Se você não mandar ele salvar, ele não salvará.'
  ],
  content: {
    markdown: `
# 📸 A Trindade Sagrada do Git

Agora que você tem um nome, é hora de usar a Máquina do Tempo de verdade.

Para o Git funcionar, você precisa seguir **3 Passos Sagrados** toda vez que for criar ou alterar um código. Decore esses três passos, pois eles são 90% do trabalho diário de qualquer programador.

---

## 1. O Despertar (\`git init\`)

Se você criar uma pasta chamada "Meu_Projeto" no seu computador agora, o Git não vai dar a mínima pra ela. O Git fica dormindo até você mandá-lo acordar dentro da pasta.

Entre na sua pasta de projeto pelo terminal e digite:
\`\`\`bash
git init
\`\`\`
**(Initialize):** Este comando "acorda" o Git. Ele cria uma pasta invisível chamada \`.git\` dentro do seu projeto. A partir desse segundo, a sua pasta comum virou um **Repositório**. O Git agora está de olhos abertos olhando para todos os seus arquivos.

---

## 2. O Palco de Preparação (\`git add\`)

Digamos que você criou três arquivos de código, mas só terminou um deles e quer salvá-lo no histórico do Git.

O Git possui uma "Área de Preparação" (Staging Area). É como se fosse o palco de um teatro. Você escolhe quais atores (arquivos) vão subir no palco para a foto final.

\`\`\`bash
# Adiciona apenas um arquivo específico para a foto:
git add index.html

# O Truque Ninja: Adiciona TODOS os arquivos modificados de uma vez!
git add .
\`\`\`
O \`git add .\` (com o ponto final) é o seu melhor amigo. Ele joga tudo o que você fez para o palco.

---

## 3. O Flash da Câmera (\`git commit\`)

Seus arquivos estão no palco. Estão prontos. Agora você precisa "Bater a Foto" para que o momento fique cravado na história para sempre.

A ação de salvar uma versão permanente da história se chama **Commit**.

E preste atenção: O Git **EXIGE** que toda foto tenha uma legenda (uma mensagem) explicando o que foi feito ali. Sem a mensagem, o Git bloqueia a foto.

\`\`\`bash
# O -m significa "Message". Escreva a legenda sempre entre aspas!
git commit -m "Criação da tela inicial do aplicativo"
\`\`\`

---

## 📝 Resumo Rápido

Decore o ciclo da vida do código:
1. Começou um projeto novo? → **\`git init\`** (só precisa fazer isso UMA vez por projeto).
2. Escreveu código e quer salvar? → **\`git add .\`** (Coloca no palco).
3. Bate a foto com a legenda! → **\`git commit -m "O que eu fiz"\`**.
`
  },
  exercises: [
    {
      id: 'git-01-03-q1',
      type: 'multiple_choice',
      question: 'Você começou a programar hoje e abriu uma pasta vazia. Qual é o ÚNICO comando que você usa apenas uma vez na vida do projeto para transformá-lo em um Repositório oficial do Git?',
      options: [
        'git start',
        'git create',
        'git repo',
        'git init'
      ],
      correctAnswer: 3,
      explanation: 'O comando "git init" (initialize) planta a semente oculta (a pasta .git) que dá poderes mágicos à sua pasta comum, transformando-a em um Repositório.'
    },
    {
      id: 'git-01-03-q2',
      type: 'multiple_choice',
      question: 'Você fez várias alterações em 5 arquivos diferentes de uma só vez e quer mandar todos eles de uma vez só para o "Palco" (Staging Area) para tirar a foto do commit. Qual atalho ninja você usa?',
      options: [
        'git add all',
        'git add *',
        'git add .',
        'git stage'
      ],
      correctAnswer: 2,
      explanation: 'O "git add ." (com ponto final) significa "Adicione ao palco o diretório atual e tudo o que foi modificado nele". É o comando de adição mais usado no planeta.'
    },
    {
      id: 'git-01-03-q3',
      type: 'multiple_choice',
      question: 'O que a letra "m" significa no parâmetro do comando: git commit -m "Correção de bug"?',
      options: [
        'Master (Branch principal)',
        'Message (Mensagem do Commit)',
        'Modify (Modificado)',
        'Merge (Mesclar)'
      ],
      correctAnswer: 1,
      explanation: 'O -m serve para pular a abertura do editor de texto chato do terminal e já injetar a sua "Mensagem" (legenda da foto) diretamente na mesma linha do comando.'
    }
  ]
};
