import { Lesson } from '../../../../types/academy';

export const lesson0302: Lesson = {
  id: 'git-03-02',
  title: 'Arrependimentos (reset)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O git reset é como apagar uma página do diário. Se você forçar muito, pode apagar o que escreveu de verdade.',
    'O --hard é o parâmetro mais perigoso do Git. Use-o com extremo cuidado.'
  ],
  content: {
    markdown: `
# 💣 Git Reset: Reabrindo o Passado

O \`restore\` que aprendemos lida com arquivos que ainda não foram salvos. Mas e se você já bateu a foto (fez o commit) e percebeu que a foto ficou ruim? Você quer "des-fazer" o commit inteiro.

O comando **\`git reset\`** permite que você mova a Máquina do Tempo para um ponto anterior.

Existem três modos principais, e é vital saber a diferença entre eles:

---

## 1. Soft Reset (\`--soft\`)
*Eu quero desfazer o commit, mas manter todo o código que escrevi pronto no palco.*

\`\`\`bash
git reset --soft HEAD~1
\`\`\`
**(HEAD~1 significa: Volte 1 commit atrás).**
O commit desaparece da história, mas os seus arquivos continuam "verdes" e prontos para serem salvos de novo com uma mensagem melhor, por exemplo.

---

## 2. Mixed Reset (Padrão)
*Eu quero desfazer o commit e tirar os arquivos do palco, mas MANTER o que escrevi neles.*

\`\`\`bash
git reset HEAD~1
\`\`\`
O commit some, os arquivos ficam "vermelhos" (fora do palco). É como se você nunca tivesse dado \`add\` nem \`commit\`.

---

## 3. Hard Reset (\`--hard\`) ⚠️
*Eu quero que esse commit e tudo o que eu escrevi nele desapareçam da face da Terra.*

\`\`\`bash
git reset --hard HEAD~1
\`\`\`
Este comando **apaga permanentemente** as alterações nos arquivos. Ele volta o seu projeto para o estado exato do commit anterior, deletando qualquer linha de código nova.

---

## 🧐 Qual usar?

Se você só quer mudar a legenda da foto ou adicionar um arquivo que esqueceu, use o **\`--soft\`**. Se você odeia tudo o que fez e quer começar o dia do zero, use o **\`--hard\`**.
`
  },
  exercises: [
    {
      id: 'git-03-02-q1',
      type: 'multiple_choice',
      question: 'Você fez um commit com a mensagem "ajustes", mas percebeu que esqueceu de incluir um arquivo importante. Qual comando permite desfazer o commit mantendo o código no "palco" para você arrumar?',
      options: [
        'git reset --hard HEAD~1',
        'git reset --soft HEAD~1',
        'git undo last',
        'git delete commit'
      ],
      correctAnswer: 1,
      explanation: 'O --soft desmancha o "empacotamento" do commit mas deixa o conteúdo (os arquivos) intactos e prontos para um novo commit.'
    },
    {
      id: 'git-03-02-q2',
      type: 'multiple_choice',
      question: 'Qual o risco de rodar "git reset --hard HEAD~1"?',
      options: [
        'Nenhum, o Git sempre faz backup.',
        'Ele apenas muda o nome do commit.',
        'Ele apaga permanentemente o commit e TODAS as alterações de código feitas nele, sem possibilidade simples de recuperação.',
        'Ele apenas desconecta do GitHub.'
      ],
      correctAnswer: 2,
      explanation: 'O --hard é o comando de "destruição total". Ele limpa o diretório de trabalho para coincidir exatamente com o commit anterior.'
    }
  ]
};
