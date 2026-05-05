import { Lesson } from '../../../../types/academy';

export const lesson0203: Lesson = {
  id: 'shell-02-03',
  title: 'Viajando entre Pastas (o comando cd)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'cd significa "Change Directory" (Mudar de Diretório).',
    'O Tab do seu teclado é o seu melhor amigo. Se você começar a digitar um nome de pasta e apertar Tab, o terminal preenche o resto do nome para você!'
  ],
  content: {
    markdown: `
# 🚀 O Teletransporte

Você já sabe onde está (\`pwd\`) e já sabe o que tem na sua pasta (\`ls\`).
Agora você quer entrar em uma dessas pastas que o \`ls\` mostrou.

Para isso, usamos o comando de movimento: **\`cd\`**.

---

## 1. Entrando em uma pasta (Caminho Relativo)

Se você deu \`ls\` e viu que tem uma pasta chamada "Downloads" bem aí na sua frente, basta digitar o nome dela:

\`\`\`bash
cd Downloads
\`\`\`

Pronto! Você acaba de dar um "duplo clique" invisível na pasta Downloads.
Se você rodar o \`pwd\` agora, vai ver que seu endereço mudou.

> ⚠️ **Atenção:** Sistemas Linux/Mac são *Case Sensitive*. Isso significa que "Downloads" é diferente de "downloads". Se você digitar a letra minúscula, vai dar erro de arquivo não encontrado! (Use a tecla **Tab** do teclado para evitar erros de digitação!).

---

## 2. Dando "Voltar" (Subindo um nível)

No Windows com o mouse, quando você quer sair da pasta "Downloads" e voltar para a pasta anterior, você clica na setinha azul de "Voltar" lá no topo da tela.

No Terminal, nós usamos os **dois pontinhos (\`..\`)**.
No mundo Unix, os dois pontos significam sempre "A pasta mãe da pasta que estou agora".

\`\`\`bash
cd ..
\`\`\`

Basta digitar \`cd ..\` e apertar Enter para dar um passo para trás.

---

## 3. Voltando para Casa (O Atalho ~)

E se você estiver lá no fundo do seu HD, perdido em um caminho imenso como \`/usr/local/share/fonts/opentype\`, e quiser voltar para as suas pastas pessoais (Documentos, Fotos, etc) rapidamente?

A sua pasta de usuário principal é chamada de "Home". E o símbolo universal para ela é o **Til (\`~\`)**.

\`\`\`bash
cd ~
\`\`\`

Sempre que você se sentir perdido, digite \`cd ~\`. É como clicar na casinha de "Página Inicial" do navegador. Ele te joga na hora de volta para a segurança da sua pasta de usuário.

---

## 📝 Resumo Rápido

- **\`cd Nomedapasta\`**: Entra na pasta que está na sua frente. Lembre-se de usar letras maiúsculas corretamente.
- **\`cd ..\`**: Sobe um nível. É o equivalente ao botão "Voltar".
- **\`cd ~\`: O botão de pânico.** Volta instantaneamente para a sua pasta principal de usuário, não importa o quão fundo você esteja no sistema.
`
  },
  exercises: [
    {
      id: 'shell-02-03-q1',
      type: 'multiple_choice',
      question: 'Você está dentro da pasta "/home/marina/Documentos/Projetos" no terminal Linux. O que acontece se você digitar "cd .." e apertar Enter?',
      options: [
        'A pasta Projetos é deletada.',
        'Você avança para dentro de uma pasta oculta.',
        'Você dá um passo "para trás" e é teletransportado para a pasta "/home/marina/Documentos".',
        'Dá erro de sintaxe.'
      ],
      correctAnswer: 2,
      explanation: 'O ".." é a representação universal da "pasta-pai". É a forma de voltar/subir na árvore de diretórios.'
    },
    {
      id: 'shell-02-03-q2',
      type: 'multiple_choice',
      question: 'Um colega digitou "cd relatorios" e o terminal devolveu um erro: "No such file or directory" (Arquivo não encontrado). Sendo que a pasta Relatorios definitivamente existe lá. Qual é a causa mais provável em sistemas Linux/Mac?',
      options: [
        'O teclado dele está quebrado.',
        'A pasta está bloqueada por senha.',
        'A falta de espaço no HD.',
        'Sistemas Unix são Case-Sensitive (diferenciam maiúsculas de minúsculas). Ele digitou "relatorios", mas a pasta de verdade começava com "R" maiúsculo.'
      ],
      correctAnswer: 3,
      explanation: 'Essa é a maior causa de dor de cabeça para quem vem do Windows (que não liga pra maiúsculas). No Linux/Mac, Relatorios é diferente de relatorios.'
    }
  ]
};
