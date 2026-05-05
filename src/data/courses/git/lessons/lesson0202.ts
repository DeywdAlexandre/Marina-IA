import { Lesson } from '../../../../types/academy';

export const lesson0202: Lesson = {
  id: 'git-02-02',
  title: 'O que mudou exatamente? (diff e show)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O git status te diz QUAL arquivo foi alterado. O git diff te diz EXATAMENTE em qual linha e qual palavra foi alterada.'
  ],
  content: {
    markdown: `
# 🔍 O Cirurgião de Código

Saber que o \`index.html\` está vermelho no seu radar (\`git status\`) é ótimo. Mas e se você ficou 3 horas trabalhando e não lembra mais se apagou uma vírgula ou adicionou um botão inteiro dentro daquele arquivo?

Para ver as entranhas do código antes de salvar, nós usamos os comandos de comparação.

---

## ⚖️ A Balança: \`git diff\`

O comando **\`git diff\`** (Difference) compara o seu código atual (que está na pasta agora e ainda não foi para o palco) com a última "foto" salva.

\`\`\`bash
# Mostra o que você alterou desde o último commit
git diff
\`\`\`

A tela do seu terminal ficará cheia de linhas vermelhas e verdes:
- 🔴 As linhas com um \`-\` (sinal de menos) na frente e na cor **vermelha** indicam o que foi **apagado**.
- 🟢 As linhas com um \`+\` (sinal de mais) na frente e na cor **verde** indicam o que foi **adicionado**.

É uma auditoria perfeita. Antes de dar um \`git commit\`, bons programadores sempre rodam um \`git diff\` para garantir que não deixaram um texto "teste123" perdido no meio do código.

---

## 🔦 O Holofote: \`git show\`

O \`git diff\` mostra as coisas que *ainda não foram salvas*.
Mas e se você quiser ver o que foi alterado em um commit antigo que já aconteceu há meses atrás?

Para isso, você pega o "Hash" (o número da placa) daquele commit usando o \`git log\` e joga o Hash no comando **\`git show\`**.

\`\`\`bash
# "Me mostre os detalhes deste commit específico"
git show a1b2c3d
\`\`\`

Ele vai te mostrar a mensagem do commit, o autor, a data e, logo abaixo, o "diff" exato de tudo o que foi alterado naquele dia. É a ferramenta perfeita para investigar *quem* colocou um bug no sistema.
`
  },
  exercises: [
    {
      id: 'git-02-02-q1',
      type: 'multiple_choice',
      question: 'Ao rodar um "git diff", você vê a seguinte linha: "+ <button>Comprar</button>". O que o sinal de "+" na cor verde significa?',
      options: [
        'Que o arquivo aumentou de tamanho no HD.',
        'Que essa linha de código foi recém-ADICIONADA por você e ainda não havia na última foto salva.',
        'Que essa linha está livre de vírus.',
        'Que o botão comprar é importante.'
      ],
      correctAnswer: 1,
      explanation: 'O diff trabalha com subtrações (-) e adições (+). O mais (+) verde significa sempre código injetado novo.'
    },
    {
      id: 'git-02-02-q2',
      type: 'multiple_choice',
      question: 'O git diff analisa o que você está escrevendo agora. Qual comando você usa para ver detalhadamente o código que foi escrito em um commit velho de 2 anos atrás?',
      options: [
        'git history',
        'git diff -old',
        'git show <numero_do_hash>',
        'git log --details'
      ],
      correctAnswer: 2,
      explanation: 'O comando "show" (mostrar) acompanhado da placa de identificação (Hash) exibe todos os detalhes microscópicos daquela foto antiga.'
    }
  ]
};
