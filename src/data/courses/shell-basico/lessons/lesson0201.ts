import { Lesson } from '../../../../types/academy';

export const lesson0201: Lesson = {
  id: 'shell-02-01',
  title: 'Onde eu estou? O comando pwd',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'No terminal, você não tem uma interface gráfica para mostrar em qual pasta você está clicado. O terminal usa o conceito de "Diretório Atual" (Current Directory).',
    'pwd significa Print Working Directory (Imprimir o Diretório de Trabalho).'
  ],
  content: {
    markdown: `
# 📍 O GPS do Terminal

Quando você abre o Explorador de Arquivos do Windows ou o Finder do Mac, você tem uma barra em cima mostrando o seu caminho (Ex: \`Este Computador > Documentos > Fotos\`). Você sempre sabe onde está.

No Terminal, a tela é preta. Não há barra de navegação. 
Como o computador sabe em qual pasta você está operando?

Através do conceito de **Diretório Atual** (Working Directory). Quando você abre o terminal, ele "te joga" em uma pasta padrão (geralmente a sua pasta de usuário). 

Para perguntar ao terminal *"Em que pasta eu estou exatamente agora?"*, você usa o comando **\`pwd\`**.

---

## 🗺️ Usando o pwd

Digite o seguinte comando no terminal:
\`\`\`bash
pwd
\`\`\`

A resposta será o caminho completo (o "endereço") de onde você está.
Exemplo no Linux/Mac:
> \`/home/marina/documentos\`

Exemplo no Windows:
> \`C:\\Users\\Marina\\Documentos\`

---

## 🚦 Por que isso é importante?

Absolutamente TUDO o que você faz no terminal depende de onde você está. 

Se você usar um comando para "criar uma pasta" ou "apagar um arquivo", o terminal vai fazer isso **na pasta em que você estiver no momento**. Se você não souber onde está, você pode acabar apagando o arquivo errado!

**Regra de Ouro:** Antes de executar qualquer ação de modificação ou exclusão, digite \`pwd\` para ter certeza absoluta de que você está na pasta correta.

---

## 📝 Resumo Rápido

- O terminal sempre opera "dentro" de uma pasta específica.
- **\`pwd\`** (Print Working Directory): O comando que diz o seu "endereço" atual completo.
- Nunca confie apenas na sua intuição. Sempre verifique seu \`pwd\` antes de comandos destrutivos.
`
  },
  exercises: [
    {
      id: 'shell-02-01-q1',
      type: 'multiple_choice',
      question: 'O que significa a sigla "pwd" no mundo do Shell Linux/Mac?',
      options: [
        'Password (Senha)',
        'Print Working Directory (Imprimir o Diretório de Trabalho)',
        'Power Windows Directory',
        'Path Without Data'
      ],
      correctAnswer: 1,
      explanation: 'Isso mesmo! O "Print" nesse caso não é imprimir na impressora, é imprimir o texto na tela preta. Working Directory é o nome técnico da pasta atual.'
    },
    {
      id: 'shell-02-01-q2',
      type: 'multiple_choice',
      question: 'Por que o conceito de "Diretório Atual" é perigoso se você não prestar atenção?',
      options: [
        'Porque o computador gasta muita bateria.',
        'Porque os comandos sempre agem na pasta onde você está. Se você tentar apagar um arquivo chamado "foto.jpg" achando que está na Lixeira, mas estiver na sua pasta pessoal de Fotos, você apagará a foto original.',
        'Porque o "pwd" pode alterar a sua senha do computador se for digitado duas vezes.',
        'Não é perigoso, o Terminal impede você de apagar arquivos errados.'
      ],
      correctAnswer: 1,
      explanation: 'O terminal é cego e obediente. Ele assume que você sabe exatamente onde está. É por isso que o `pwd` é o seu melhor amigo.'
    }
  ]
};
