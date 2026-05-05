import { Lesson } from '../../../../types/academy';

export const lesson0501: Lesson = {
  id: 'git-05-01',
  title: 'Conectando com a Nuvem (remote e push)',
  type: 'mixed',
  estimatedMinutes: 20,
  videoUrl: 'https://www.youtube.com/watch?v=S0ididv042E',
  videoTitle: 'Enviando código para o GitHub (Aula 08) - Curso em Vídeo',
  tips: [
    'O nome "origin" é apenas um apelido padrão que o Git dá para o servidor do GitHub.',
    'Você só precisa configurar o "remote add" uma vez por projeto.'
  ],
  content: {
    markdown: `
# ☁️ Subindo para as Nuvens

Até agora, todo o seu histórico de commits vive apenas dentro da pasta oculta \`.git\` no seu computador. Se o seu PC quebrar hoje, você perde tudo.

O **GitHub** resolve isso funcionando como o seu servidor remoto de backup e compartilhamento.

---

## 🔗 Passo 1: Criando o Elo (\`git remote\`)

Primeiro, você cria um repositório vazio no site do GitHub. Ele vai te dar um link (ex: \`https://github.com/usuario/projeto.git\`). 
Agora, você precisa dizer ao seu Git local que esse link é o "endereço de casa" dele na nuvem.

\`\`\`bash
git remote add origin https://github.com/usuario/projeto.git
\`\`\`
- **remote add:** Adiciona um servidor remoto.
- **origin:** É o apelido que damos ao link (podia ser "nuvem", mas o padrão mundial é origin).

---

## 🚀 Passo 2: O Empurrão (\`git push\`)

Agora que o Git sabe para onde enviar, vamos "empurrar" os nossos commits para lá.

\`\`\`bash
git push -u origin master
\`\`\`
- **push:** Empurra os dados.
- **-u origin master:** Diz ao Git: "A partir de agora, lembre-se que a minha branch master deve sempre ser enviada para a origin". Nas próximas vezes, você poderá digitar apenas \`git push\`.

---

## 🛡️ Segurança: Tokens e SSH

O GitHub não deixa qualquer um empurrar código para a sua conta. Antigamente ele pedia sua senha, mas hoje ele exige um **Personal Access Token** ou uma **Chave SSH**. 

> 💡 Siga o passo a passo no vídeo do Professor Guanabara para configurar sua autenticação sem erros!
`
  },
  exercises: [
    {
      id: 'git-05-01-q1',
      type: 'multiple_choice',
      question: 'Qual o objetivo do comando "git remote add origin <url>"?',
      options: [
        'Baixar o código do GitHub para o PC.',
        'Criar uma conexão (um apelido chamado origin) entre o seu repositório local e o repositório hospedado no servidor do GitHub.',
        'Deletar o histórico local.',
        'Mudar o nome do usuário.'
      ],
      correctAnswer: 1,
      explanation: 'O remote add cria a ponte. Sem essa ponte, o Git não sabe para qual servidor deve enviar os arquivos.'
    },
    {
      id: 'git-05-01-q2',
      type: 'multiple_choice',
      question: 'O que o comando "git push" faz na prática?',
      options: [
        'Apaga os commits locais.',
        'Traz as atualizações da internet para o seu computador.',
        'Envia (empurra) os seus commits e arquivos locais para o servidor remoto configurado (como o GitHub).',
        'Cria uma nova branch.'
      ],
      correctAnswer: 2,
      explanation: 'Push é o ato de publicar seu trabalho. É como dar um "Upload" do seu histórico de versões.'
    }
  ]
};
