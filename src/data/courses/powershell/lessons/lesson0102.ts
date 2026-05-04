import { Lesson } from '../../../../types/academy';

/**
 * Lição 1.2 — Instalando e Abrindo o PowerShell
 * Guia passo a passo para encontrar, abrir e configurar
 * o PowerShell no Windows. Focado em iniciantes absolutos.
 */
export const lesson0102: Lesson = {
  id: 'ps-01-02',
  title: 'Instalando e Abrindo o PowerShell',
  type: 'mixed',
  estimatedMinutes: 20,
  videoUrl: 'https://www.youtube.com/watch?v=MXBmhFdhJCg',
  videoTitle: 'Como Instalar o PowerShell 7 — Bóson Treinamentos',
  tips: [
    'Se estiver no celular, leia a teoria e guarde para praticar no computador depois.',
    'Recomendo usar o Windows Terminal — é mais bonito e funcional que o terminal padrão.',
    'Não precisa instalar o VS Code agora se não quiser. Ele será mais útil quando começarmos a criar scripts (módulo 7).',
  ],
  content: {
    markdown: `
# Instalando e Abrindo o PowerShell

Nesta lição você vai aprender a **encontrar, abrir e usar** o PowerShell no seu computador. Vamos por partes!

---

## 📍 Passo 1: Você já tem PowerShell!

Se você usa **Windows 10 ou 11**, ótima notícia: o PowerShell **já está instalado** no seu computador! O Windows vem com o **Windows PowerShell 5.1** embutido.

### Como abrir o PowerShell (3 formas)

**Forma 1 — Pelo Menu Iniciar (mais fácil):**
1. Clique no botão **Iniciar** (ícone do Windows)
2. Digite **"PowerShell"**
3. Clique em **"Windows PowerShell"**

**Forma 2 — Pelo atalho de teclado:**
1. Pressione \`Win + X\` (tecla Windows + letra X)
2. No menu que aparecer, clique em **"Terminal"** ou **"PowerShell"**

**Forma 3 — Pelo Explorador de Arquivos:**
1. Abra qualquer pasta no Explorador de Arquivos
2. Clique na **barra de endereço** (onde mostra o caminho da pasta)
3. Digite \`powershell\` e pressione **Enter**
4. O PowerShell abrirá **já naquela pasta**! Muito útil!

> **💡 Dica:** A Forma 3 é super útil no dia a dia! Quando precisar trabalhar com arquivos de uma pasta específica, abra o PowerShell diretamente de lá.

---

## 📍 Passo 2: Conhecendo a Tela

Quando você abre o PowerShell, verá algo assim:

\`\`\`
Windows PowerShell
Copyright (C) Microsoft Corporation. Todos os direitos reservados.

PS C:\\Users\\SeuNome>
\`\`\`

Vamos entender cada parte:

| Parte | Significado |
|-------|------------|
| \`PS\` | Indica que você está no **P**ower**S**hell |
| \`C:\\Users\\SeuNome\` | A **pasta atual** onde você está (sua pasta de usuário) |
| \`>\` | O **cursor** — onde você digita os comandos |

Esse \`PS C:\\Users\\SeuNome>\` se chama **prompt**. Ele sempre mostra em qual pasta você está.

---

## 📍 Passo 3: Seu Primeiro Comando!

Vamos testar se tudo funciona. Digite exatamente isso e pressione **Enter**:

\`\`\`powershell
Get-Date
\`\`\`

Você verá a **data e hora atual** do seu computador. Parabéns! 🎉 Você acabou de executar seu primeiro comando no PowerShell!

Agora tente este:

\`\`\`powershell
$PSVersionTable
\`\`\`

Isso mostra a **versão** do PowerShell instalada. Procure a linha **PSVersion**:
- Se mostrar **5.1.xxxxx** — você tem o Windows PowerShell (que já vem no Windows)
- Se mostrar **7.x.x** — você tem o PowerShell moderno (ótimo!)

---

## 📍 Passo 4 (Opcional): Instalando o PowerShell 7

O Windows PowerShell 5.1 é **perfeitamente funcional** para este curso. Mas se quiser a versão mais moderna (recomendado), instalar é fácil:

### Opção A — Pelo próprio PowerShell (mais fácil):
\`\`\`powershell
winget install Microsoft.PowerShell
\`\`\`

### Opção B — Pelo site da Microsoft:
1. Acesse: **https://aka.ms/powershell-release?tag=stable**
2. Baixe o arquivo **.msi** para Windows (64-bit)
3. Execute e siga o instalador normalmente (Next, Next, Install)

Após instalar, procure por **"PowerShell 7"** no menu Iniciar. Ele terá um ícone **preto** (diferente do azul do 5.1).

---

## 📍 Passo 5 (Opcional): Instalando o Windows Terminal

O **Windows Terminal** é o app moderno da Microsoft para usar terminais. Ele é mais bonito, permite abas e funciona tanto com PowerShell quanto com CMD.

### Como instalar:
\`\`\`powershell
winget install Microsoft.WindowsTerminal
\`\`\`

Ou procure **"Terminal"** na Microsoft Store.

> **Por que usar o Windows Terminal?**
> - Interface moderna e bonita
> - Abas (como no navegador)
> - Suporte a temas e fontes
> - Mostra PowerShell 5.1, PowerShell 7 e CMD em abas separadas

---

## 📍 Passo 6 (Opcional): VS Code como Editor de Scripts

Quando chegarmos no módulo de **criar scripts** (arquivos .ps1), o **Visual Studio Code** será muito útil. Não precisa instalar agora, mas saiba que ele existe:

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

Instale também a extensão **"PowerShell"** dentro do VS Code para ter:
- Syntax highlighting (código colorido)
- Autocompletar comandos
- Terminal integrado
- Debugging de scripts

---

## 📝 Resumo da Lição

- O PowerShell **já vem instalado** no Windows 10/11 (versão 5.1)
- Existem **3 formas** de abrir: Menu Iniciar, Win+X, ou pelo Explorador de Arquivos
- O **prompt** (\`PS C:\\...>\`) mostra onde você está
- \`Get-Date\` foi seu primeiro comando!
- Opcionalmente, instale o **PowerShell 7** e o **Windows Terminal** para melhor experiência
- O **VS Code** será útil mais para frente, quando criarmos scripts
`,
    codeExamples: [
      {
        title: 'Testando a instalação',
        language: 'powershell',
        code: '# Verificar a versão do PowerShell\n$PSVersionTable.PSVersion\n\n# Verificar onde o PowerShell está instalado\n$PSHOME\n\n# Mostrar a data atual\nGet-Date',
        output: 'Major  Minor  Build  Revision\n-----  -----  -----  --------\n5      1      22621  4391\n\nC:\\Windows\\System32\\WindowsPowerShell\\v1.0\n\ndomingo, 4 de maio de 2025 19:20:00',
        explanation: 'Esses três comandos verificam se seu PowerShell está funcionando corretamente. O $PSVersionTable mostra a versão, $PSHOME mostra onde está instalado, e Get-Date mostra a data.'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-01-02-q1',
      type: 'multiple_choice',
      question: 'Qual versão do PowerShell já vem instalada no Windows 10/11?',
      options: [
        'PowerShell 1.0',
        'PowerShell 7',
        'Windows PowerShell 5.1',
        'Nenhuma, precisa instalar manualmente'
      ],
      correctAnswer: 2,
      explanation: 'O Windows 10 e 11 vêm com o Windows PowerShell 5.1 pré-instalado. A versão 7+ é opcional e pode ser instalada separadamente.'
    },
    {
      id: 'ps-01-02-q2',
      type: 'multiple_choice',
      question: 'O que o prompt "PS C:\\Users\\Maria>" nos diz?',
      options: [
        'Que o computador se chama Maria',
        'Que estamos no PowerShell, na pasta C:\\Users\\Maria',
        'Que o PowerShell está desligado',
        'Que precisamos digitar uma senha'
      ],
      correctAnswer: 1,
      explanation: 'O "PS" indica PowerShell, e "C:\\Users\\Maria" é o caminho da pasta onde você está naquele momento. O ">" é onde você digita comandos.'
    },
    {
      id: 'ps-01-02-q3',
      type: 'multiple_choice',
      question: 'Qual é a forma MAIS PRÁTICA de abrir o PowerShell já dentro de uma pasta específica?',
      options: [
        'Pelo Menu Iniciar',
        'Pelo atalho Win + X',
        'Clicando na barra de endereço do Explorador e digitando "powershell"',
        'Reiniciando o computador'
      ],
      correctAnswer: 2,
      explanation: 'Ao clicar na barra de endereço do Explorador de Arquivos e digitar "powershell", ele abre o terminal já posicionado naquela pasta. Super prático!'
    },
    {
      id: 'ps-01-02-code1',
      type: 'code_challenge',
      question: 'Abra o PowerShell no seu computador e descubra qual versão está instalada. Cole aqui o comando que você usou e o resultado.',
      codePrompt: 'Qual comando mostra a versão do PowerShell? Execute-o e cole o resultado aqui.',
      expectedOutput: '$PSVersionTable ou $PSVersionTable.PSVersion — deve retornar uma tabela com a versão',
      hint: 'A variável que contém informações sobre a versão começa com $PS...',
      starterCode: '# Digite o comando para ver a versão do PowerShell\n'
    }
  ]
};
