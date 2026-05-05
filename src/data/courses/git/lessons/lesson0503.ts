import { Lesson } from '../../../../types/academy';

export const lesson0503: Lesson = {
  id: 'git-05-03',
  title: 'Clonagem (clone)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O comando clone já faz o "git init" e o "git remote add origin" automaticamente para você.',
    'Você pode clonar qualquer projeto público do mundo (como o código do VS Code ou do React) para estudar na sua máquina.'
  ],
  content: {
    markdown: `
# 🐑 O Ataque dos Clones

Até agora, pensamos em começar um projeto do zero no nosso PC e depois mandar para o GitHub. Mas e se o projeto já existir lá? 
E se você acabou de ser contratado em uma empresa e precisa baixar o código do aplicativo deles para começar a trabalhar?

Nós usamos o comando **\`git clone\`**.

---

## 🧬 Como clonar um Repositório

Basta copiar a URL do projeto no GitHub e digitar:

\`\`\`bash
git clone https://github.com/usuario/projeto-incrivel.git
\`\`\`

O que esse comando faz?
1. Cria uma pasta chamada \`projeto-incrivel\` no seu computador.
2. Baixa **TODO o histórico** de commits e todos os arquivos.
3. Já configura o \`remote origin\` apontando para aquele link.
4. Te deixa pronto para trabalhar em segundos.

---

## 🔐 SSH vs HTTPS

Ao clicar no botão "Code" no GitHub, você verá duas opções de link:
- **HTTPS:** Mais simples, mas costuma pedir autenticação com frequência.
- **SSH:** Mais profissional e seguro. Você configura uma "chave" no seu PC e nunca mais precisa digitar senhas para dar push ou pull.

> 🎓 **Dica:** No começo, use o **HTTPS**. Quando você se sentir um ninja, pesquise sobre como configurar chaves SSH para ganhar produtividade!
`
  },
  exercises: [
    {
      id: 'git-05-03-q1',
      type: 'multiple_choice',
      question: 'Qual o comando usado para baixar uma cópia COMPLETA de um projeto que já existe no GitHub para o seu computador local?',
      options: [
        'git download',
        'git copy-remote',
        'git clone',
        'git pull --all'
      ],
      correctAnswer: 2,
      explanation: 'O "git clone" é a porta de entrada para qualquer projeto existente. Ele traz arquivos, histórico e configurações de uma só vez.'
    },
    {
      id: 'git-05-03-q2',
      type: 'multiple_choice',
      question: 'Após dar um "git clone" em um projeto, você precisa rodar o "git init" para começar a versionar?',
      options: [
        'Sim, sempre.',
        'Não, o comando clone já inicializa o repositório e configura o servidor remoto automaticamente para você.',
        'Sim, mas apenas se o projeto for privado.',
        'Não, mas precisa rodar o "git start".'
      ],
      correctAnswer: 1,
      explanation: 'O clone é um pacote completo de boas-vindas. Ele já deixa tudo pronto para você começar a dar o seu primeiro "git add".'
    }
  ]
};
