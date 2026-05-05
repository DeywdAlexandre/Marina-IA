import { Lesson } from '../../../../types/academy';

export const lesson0102: Lesson = {
  id: 'shell-01-02',
  title: 'Os Sabores do Shell (Bash, Zsh e PowerShell)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Terminal é a tela preta (o programa que desenha as letras na tela). Shell é o "cérebro" invisível que entende o que você digitou e executa a ordem.'
  ],
  content: {
    markdown: `
# 🍦 Os Sabores do Terminal

Assim como existem vários sistemas operacionais (Windows, macOS, Linux), existem vários "cérebros" diferentes que podem morar dentro do seu Terminal. Chamamos esse cérebro de **Shell** (concha/casca, em inglês, porque ele envolve o núcleo do sistema).

Cada Shell tem a sua própria linguagem (seus próprios comandos). Vamos conhecer os 3 principais sabores que você vai encontrar no mercado de trabalho:

---

## 1. O Padrão Universal: **Bash** (e o seu primo Zsh)

O **Bash** é o Shell mais famoso e importante do mundo. Ele nasceu na década de 80 e é o coração do **Linux**.
Como quase 100% dos servidores da internet (incluindo onde este site está hospedado) rodam Linux, o Bash é a linguagem universal de TI.

- **Onde encontrar?** Em qualquer Linux e no Windows Subsystem for Linux (WSL).
- **Zsh:** É um primo mais moderno do Bash. É o terminal padrão dos computadores da **Apple (Mac)**. A boa notícia? Os comandos do Bash e do Zsh são 99% idênticos!

Neste curso, **nós vamos focar nos comandos do Bash/Zsh**, porque se você aprender eles, você consegue pilotar qualquer servidor do mundo.

---

## 2. O Antigo: **CMD** (Command Prompt)

Se você já usou Windows na vida, já viu o "Prompt de Comando". É aquela tela preta velha com as letras \`C:\\> \`.
Ele foi criado pela Microsoft nos anos 80 (na época do MS-DOS). 

Os comandos dele são totalmente diferentes do Bash do Linux. Hoje em dia, ele é considerado obsoleto pela própria Microsoft e está morrendo. **Evite aprender ou usar o CMD.**

---

## 3. O Moderno da Microsoft: **PowerShell**

A Microsoft percebeu que o CMD era muito fraco comparado ao Bash do Linux. Então ela criou o **PowerShell** (aquela tela azul). 
Ele é absurdamente poderoso para gerenciar servidores Windows e foca em conceitos de programação avançados.

> 💡 **A grande sacada da Microsoft:** Para facilitar a vida de quem estava migrando do Linux (Bash) para o Windows (PowerShell), a Microsoft programou o PowerShell para "entender" os principais comandos do Linux! Ou seja, se você aprender os comandos básicos do Bash (neste curso), eles também vão funcionar no PowerShell do seu Windows!

---

## 📝 Resumo Rápido

- **Terminal**: É o aplicativo (a janela física) que você abre.
- **Shell**: É o motor que roda dentro da janela e entende o que você digita.
- **Bash / Zsh**: O padrão mundial. É o idioma do Linux e do Mac. É o que aprenderemos aqui.
- **CMD**: O motor jurássico do Windows. Fuja dele.
- **PowerShell**: O motor moderno do Windows (que possui um curso completo dedicado a ele aqui na Academia!).
`
  },
  exercises: [
    {
      id: 'shell-01-02-q1',
      type: 'multiple_choice',
      question: 'Qual é o Shell padrão do ecossistema Linux e considerado a "linguagem universal" para gerenciar servidores na internet?',
      options: [
        'CMD (Command Prompt)',
        'Bash',
        'Windows Explorer',
        'Zsh (Exclusivo do Windows)'
      ],
      correctAnswer: 1,
      explanation: 'O Bash é o "idioma oficial" dos servidores. Saber Bash é saber pilotar as nuvens da AWS, Google Cloud e Azure.'
    },
    {
      id: 'shell-01-02-q2',
      type: 'multiple_choice',
      question: 'Qual é a diferença correta entre o Terminal e o Shell?',
      options: [
        'São exatamente a mesma coisa, apenas sinônimos.',
        'O Shell é a janela preta onde você digita, e o Terminal é o programa de e-mail.',
        'O Terminal é o aplicativo "Visual" que você abre (a janela que desenha as letras na tela). O Shell é o "cérebro" invisível que processa os comandos que você digita.',
        'Terminal só existe no Mac, e Shell só existe no Linux.'
      ],
      correctAnswer: 2,
      explanation: 'Exato! Você pode ter vários terminais diferentes (Hyper, Windows Terminal, iTerm2), mas todos eles rodam um Shell (Bash, Zsh, PowerShell) por baixo dos panos.'
    }
  ]
};
