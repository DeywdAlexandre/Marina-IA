import { Lesson } from '../../../../types/academy';

export const lesson0101: Lesson = {
  id: 'shell-01-01',
  title: 'Interface Gráfica vs Linha de Comando',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O "Terminal" não é um programa de hackers de filmes de Hollywood. É apenas a forma mais antiga e rápida de conversar com o computador.',
    'CLI significa Command Line Interface (Interface de Linha de Comando).'
  ],
  content: {
    markdown: `
# 🖥️ O que é o Terminal?

Desde que você aprendeu a usar um computador, você provavelmente usa um **Mouse** para clicar em ícones, pastas e botões. Essa tela bonita que você vê, com janelas e cores, é chamada de **GUI** (Interface Gráfica do Usuário).

Mas como as pessoas usavam computadores antes de inventarem o mouse? 

Elas usavam o teclado. Elas digitavam o que queriam fazer. Essa forma de "conversar" com o computador escrevendo comandos em uma tela preta é chamada de **CLI** (Interface de Linha de Comando), ou carinhosamente: o **Terminal**.

---

## 🐢 Por que usar o Terminal se o Mouse é mais fácil?

Imagine que você precisa criar 100 pastas, chamadas "Cliente_1", "Cliente_2", até "Cliente_100".
Se você for fazer isso com o mouse (Botão Direito -> Nova Pasta -> Digitar o nome -> Enter), você vai demorar **30 minutos** e seu pulso vai doer.

No terminal, você digita **uma única linha** de texto, aperta Enter, e o computador cria as 100 pastas em **1 milissegundo**.

O terminal é:
1. **Infinitamente mais rápido** (depois que você aprende).
2. **Automatizável** (você pode programar o computador para fazer as coisas sozinho).
3. **Leve** (servidores de grandes empresas como Google e Netflix não têm "área de trabalho" com mouse, eles só têm terminal para economizar memória).

---

## 👻 Perdendo o Medo da Tela Preta

Muitos iniciantes têm medo de abrir o terminal e acidentalmente quebrar o computador ou "deletar a internet".

Fique tranquilo! O terminal é como um cachorro treinado. Ele **NUNCA** faz nada que você não mande. Se você não digitar o comando de apagar um arquivo, ele nunca vai apagar um arquivo sozinho. Ele é seguro, desde que você entenda o que está digitando.

Neste curso, vamos dar os seus primeiros passos com os comandos mais inofensivos e úteis do mundo.

---

## 📝 Resumo Rápido

- **GUI**: Interface Gráfica (o que você usa com o mouse, janelas e botões).
- **CLI (Terminal)**: A tela de texto onde você conversa com o PC usando o teclado.
- O terminal não é perigoso por si só, ele é apenas uma ferramenta extremamente poderosa de produtividade.
`
  },
  exercises: [
    {
      id: 'shell-01-01-q1',
      type: 'multiple_choice',
      question: 'Qual é a principal diferença entre uma GUI e uma CLI?',
      options: [
        'A GUI é para computadores antigos e a CLI é para PCs modernos.',
        'A GUI usa interface visual com mouse e janelas (ex: Windows). A CLI é operada exclusivamente por textos digitados no teclado (o Terminal).',
        'A CLI é cheia de vírus, a GUI é segura.',
        'GUI significa Google User Interface.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente. GUI = Graphical User Interface. CLI = Command Line Interface.'
    },
    {
      id: 'shell-01-01-q2',
      type: 'multiple_choice',
      question: 'Por que servidores de grandes empresas (como a nuvem da AWS ou servidores web) geralmente usam apenas o Terminal (CLI) e não possuem Área de Trabalho para usar o mouse?',
      options: [
        'Porque mouse custa caro para a empresa.',
        'Porque monitores não suportam Área de Trabalho hoje em dia.',
        'Porque a interface gráfica (com ícones e animações) consome muita Memória RAM e Processamento. Usar apenas o terminal deixa o servidor super rápido para processar o que realmente importa.',
        'Porque eles usam apenas o celular.'
      ],
      correctAnswer: 2,
      explanation: 'Não ter uma Interface Gráfica (GUI) economiza Gigabytes de RAM. Servidores precisam focar 100% da sua força em hospedar sites e bancos de dados, não em renderizar janelas transparentes.'
    }
  ]
};
