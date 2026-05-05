import { Lesson } from '../../../../types/academy';

export const lesson0502: Lesson = {
  id: 'git-05-02',
  title: 'Baixando Atualizações (fetch e pull)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Sempre dê um git pull antes de começar a trabalhar no dia para garantir que você tem o código mais recente da equipe.',
    'O pull é basicamente um fetch seguido de um merge automático.'
  ],
  content: {
    markdown: `
# 📥 Trazendo de Volta

A nuvem não serve só para enviar. Se você trabalha em equipe, ou se você mesmo programou em outro computador (no trabalho, por exemplo) e agora está em casa, você precisa baixar as novidades que estão no GitHub.

---

## 📡 O Olhar: \`git fetch\`

O **\`git fetch\`** é como olhar pela janela para ver se está chovendo. Ele vai até o GitHub e pergunta: *"Tem algum commit novo lá que eu não tenho aqui?"*.

Ele baixa as informações, mas **NÃO altera os seus arquivos** de código. Ele apenas atualiza o banco de dados interno do Git. Você continua seguro.

\`\`\`bash
git fetch origin
\`\`\`

---

## 🚜 O Trator: \`git pull\`

O **\`git pull\`** é o comando que você usará 99% das vezes. Ele faz o trabalho pesado: vai ao GitHub, baixa os commits novos e já tenta "mesclar" (merge) eles automaticamente no seu código atual.

\`\`\`bash
git pull origin master
\`\`\`

> ⚠️ **Atenção:** Se você alterou a mesma linha que alguém alterou no GitHub e tentar dar um \`pull\`, o Git vai travar e pedir para você resolver um **Conflito de Merge** (que aprendemos no módulo anterior). Por isso, a regra de ouro é: **Puxe (Pull) antes de começar, Empurre (Push) quando terminar.**
`
  },
  exercises: [
    {
      id: 'git-05-02-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença crucial entre "git fetch" e "git pull"?',
      options: [
        'O fetch apaga o código e o pull recupera.',
        'O fetch apenas baixa as informações das novidades sem alterar seus arquivos. O pull baixa e já tenta aplicar as mudanças nos seus arquivos locais imediatamente.',
        'Não há diferença, são sinônimos.',
        'O pull é usado apenas para imagens.'
      ],
      correctAnswer: 1,
      explanation: 'Fetch é passivo (só busca informação). Pull é ativo (busca e já mexe no seu código).'
    },
    {
      id: 'git-05-02-q2',
      type: 'multiple_choice',
      question: 'Por que é recomendável rodar o "git pull" todos os dias antes de escrever qualquer linha de código?',
      options: [
        'Para o Git não expirar.',
        'Para garantir que você está trabalhando sobre a versão mais atualizada do projeto, evitando conflitos desnecessários com o trabalho que seus colegas enviaram enquanto você dormia.',
        'Para limpar o cache do navegador.',
        'Para carregar a bateria do notebook.'
      ],
      correctAnswer: 1,
      explanation: 'Manter-se sincronizado com a "verdade" que está no servidor é a melhor forma de evitar dores de cabeça no final do dia.'
    }
  ]
};
