import { Lesson } from '../../../../types/academy';

export const lesson0102: Lesson = {
  id: 'git-01-02',
  title: 'Configurando sua Identidade',
  type: 'mixed',
  estimatedMinutes: 10,
  videoUrl: 'https://www.youtube.com/watch?v=xFf1WnL_Szw',
  videoTitle: 'Configurando o Git (Aula 04) - Curso em Vídeo',
  tips: [
    'O Git odeia anonimato. Ele se recusa a salvar o seu código se ele não souber quem você é.',
    'Você só precisa fazer essa configuração uma única vez no seu computador.'
  ],
  content: {
    markdown: `
# 🪪 Sua Identidade de Desenvolvedor

Imagine que um código do aplicativo de um banco quebrou e causou um prejuízo milionário. A equipe precisa saber EXATAMENTE quem foi o programador que escreveu a linha de código defeituosa, quando ele escreveu e o porquê.

O Git rastreia tudo isso. Mas, logo após você instalá-lo, ele ainda é "cego". Ele não sabe o seu nome nem o seu e-mail.

Se você tentar usar o Git agora, ele vai gritar um erro dizendo: *"Por favor, me diga quem você é"*.

---

## 🛠️ O Comando \`git config\`

Para configurar as suas configurações globais (que valerão para todos os projetos do seu computador), nós usamos o comando **\`git config --global\`**.

Você precisará rodar dois comandos no seu terminal. Substitua o texto entre aspas pelo seu nome real e pelo e-mail que você usa para programar (o mesmo que você usará para criar sua conta no GitHub depois).

\`\`\`bash
# 1. Configurando o seu Nome:
git config --global user.name "Marina Oliveira"

# 2. Configurando o seu E-mail:
git config --global user.email "marina@exemplo.com.br"
\`\`\`

> 💡 **Dica:** O Git não retorna nenhuma mensagem de "Sucesso!" se o comando der certo. No mundo do terminal Linux, *"Nenhuma notícia é boa notícia"*. Se você apertar Enter e ele apenas pular para a próxima linha vazia, significa que funcionou perfeitamente.

---

## 🔍 Como conferir se deu certo?

Se você é desconfiado e quer ter certeza de que o Git salvou o seu nome, você pode pedir para ele listar as configurações salvas.

\`\`\`bash
git config --list
\`\`\`
*(Este comando vai mostrar uma lista de variáveis. Procure por user.name e user.email no meio da lista).*

Pronto! Agora você tem um crachá oficial. Todo código que você salvar a partir de agora carregará a sua assinatura para a eternidade.
`
  },
  exercises: [
    {
      id: 'git-01-02-q1',
      type: 'multiple_choice',
      question: 'Por que é OBRIGATÓRIO configurar o "user.name" e "user.email" antes de começar a usar o Git?',
      options: [
        'Para o Git poder te mandar e-mails de propaganda.',
        'Porque sem isso o GitHub não deixa você acessar o site deles.',
        'Porque a premissa de um controle de versão é rastrear a autoria de cada alteração. Sem nome e e-mail, o Git não consegue assinar quem fez a modificação e bloqueará a ação de salvar.',
        'Não é obrigatório, é apenas estético.'
      ],
      correctAnswer: 2,
      explanation: 'O Git leva o rastreamento a sério. Cada "ponto na história" salvo exige a carimbo do autor. Sem o autor, ele se recusa a salvar.'
    },
    {
      id: 'git-01-02-q2',
      type: 'multiple_choice',
      question: 'O que a flag "--global" faz no comando "git config --global user.name"?',
      options: [
        'Avisa para os programadores do mundo inteiro que você se conectou.',
        'Configura o nome apenas para o projeto de código que você está aberto agora.',
        'Configura o idioma do seu computador para Inglês Global.',
        'Salva a configuração no seu computador inteiro. Assim, todos os repositórios (projetos) que você criar na sua máquina já nascerão usando essa mesma identidade padrão.'
      ],
      correctAnswer: 3,
      explanation: 'Usar o --global poupa trabalho. Sem ele, você teria que reconfigurar seu nome manualmente a cada nova pasta de projeto que você criasse.'
    }
  ]
};
