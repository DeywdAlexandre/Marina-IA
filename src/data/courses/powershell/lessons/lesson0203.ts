import { Lesson } from '../../../../types/academy';

/**
 * Lição 2.3 — Aliases e Get-Member: Atalhos e Raio-X
 * Ensina sobre aliases (atalhos) e o poderoso Get-Member para inspecionar objetos.
 */
export const lesson0203: Lesson = {
  id: 'ps-02-03',
  title: 'Aliases e Get-Member: Atalhos e Raio-X',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'Aliases são atalhos — NÃO são comandos diferentes. "ls" e "Get-ChildItem" fazem exatamente a mesma coisa.',
    'O Get-Member é o comando que vai fazer você entender o PowerShell de verdade. Ele revela os "poderes ocultos" de cada objeto.',
    'Quando você dominar o Get-Member, vai conseguir fazer coisas que nem imaginava serem possíveis.',
  ],
  content: {
    markdown: `
# Aliases e Get-Member: Atalhos e Raio-X

Nesta lição você vai aprender dois conceitos essenciais: **Aliases** (atalhos para digitar mais rápido) e **Get-Member** (a ferramenta para entender o que qualquer comando retorna).

---

## ⚡ Aliases — Atalhos para Digitar Rápido

Se você já usou Linux ou o CMD, vai reconhecer vários comandos:

| Alias (Atalho) | Comando Real | O que faz |
|---------------|-------------|-----------|
| \`ls\` | \`Get-ChildItem\` | Lista arquivos e pastas |
| \`dir\` | \`Get-ChildItem\` | Lista arquivos e pastas |
| \`cd\` | \`Set-Location\` | Muda de pasta |
| \`pwd\` | \`Get-Location\` | Mostra a pasta atual |
| \`cls\` | \`Clear-Host\` | Limpa a tela |
| \`cat\` | \`Get-Content\` | Mostra conteúdo de arquivo |
| \`cp\` | \`Copy-Item\` | Copia arquivo |
| \`mv\` | \`Move-Item\` | Move/renomeia arquivo |
| \`rm\` | \`Remove-Item\` | Remove arquivo |
| \`echo\` | \`Write-Output\` | Escreve na tela |
| \`man\` | \`Get-Help\` | Mostra ajuda |
| \`kill\` | \`Stop-Process\` | Fecha um processo |
| \`curl\` | \`Invoke-WebRequest\` | Faz requisição web |

> **Importante:** Aliases e o comando original são **100% idênticos**. \`ls\` faz exatamente a mesma coisa que \`Get-ChildItem\`. Use o que preferir!

---

## 🔎 Descobrindo Aliases

### Ver todos os aliases:
\`\`\`powershell
Get-Alias
\`\`\`

### Descobrir o alias de um comando:
\`\`\`powershell
# Quais aliases apontam para Get-ChildItem?
Get-Alias -Definition Get-ChildItem
\`\`\`

### Descobrir o que um alias significa:
\`\`\`powershell
# O que "ls" significa?
Get-Alias ls

# O que "gc" significa?
Get-Alias gc
\`\`\`

---

## 🔬 Get-Member: O Raio-X dos Objetos

Lembra que na primeira lição falamos que o PowerShell trabalha com **objetos** em vez de texto? O \`Get-Member\` é a ferramenta que mostra **o que está dentro** de cada objeto.

### O conceito

Quando você roda \`Get-Date\`, o PowerShell não retorna apenas o texto "04/05/2025". Ele retorna um **objeto DateTime** que contém:
- **Propriedades** — dados (ano, mês, dia, hora, etc.)
- **Métodos** — ações (adicionar dias, comparar datas, etc.)

O \`Get-Member\` revela tudo isso!

---

## 🎯 Usando o Get-Member na Prática

### Sintaxe básica:
\`\`\`powershell
Get-Date | Get-Member
\`\`\`

O \`|\` (pipe) envia o resultado do primeiro comando para o segundo. Veremos o pipe em detalhes no próximo módulo!

### O que ele mostra:

\`\`\`powershell
# Propriedades de uma data
Get-Date | Get-Member -MemberType Property
\`\`\`

Resultado (parcial):
\`\`\`
Name        MemberType  Definition
----        ----------  ----------
Date        Property    datetime Date {get;}
Day         Property    int Day {get;}
DayOfWeek   Property    System.DayOfWeek DayOfWeek {get;}
Hour        Property    int Hour {get;}
Month       Property    int Month {get;}
Year        Property    int Year {get;}
\`\`\`

---

## 💎 Acessando Propriedades

Agora que sabe quais propriedades existem, pode acessá-las com o **ponto** (\`.\`):

\`\`\`powershell
# Pegar só o ano
(Get-Date).Year

# Pegar só o dia da semana
(Get-Date).DayOfWeek

# Pegar só a hora
(Get-Date).Hour

# Pegar o mês
(Get-Date).Month
\`\`\`

Isso funciona com **qualquer** comando:

\`\`\`powershell
# Nome do computador
(Get-ComputerInfo).CsName

# Versão do OS
(Get-ComputerInfo).OsVersion
\`\`\`

---

## 📝 Resumo da Lição

- **Aliases** são atalhos: \`ls\` = \`Get-ChildItem\`, \`cd\` = \`Set-Location\`
- Use \`Get-Alias\` para descobrir aliases
- **Get-Member** revela propriedades e métodos de qualquer objeto
- Use \`.\` (ponto) para acessar propriedades: \`(Get-Date).Year\`
- **Workflow completo:** Get-Command → Get-Help → usar → Get-Member para explorar
`,
    codeExamples: [
      {
        title: 'Explorando objetos com Get-Member',
        language: 'powershell',
        code: '# Que propriedades um processo tem?\nGet-Process | Get-Member -MemberType Property | Select-Object -First 8 Name\n\n# Usar uma propriedade específica\n(Get-Date).DayOfWeek\n\n# Qual o comando real por trás do alias "ls"?\nGet-Alias ls',
        output: 'Name\n----\nBasePriority\nExitCode\nExitTime\nHandle\nHandleCount\nHasExited\nId\nMachineName\n\nSunday\n\nCommandType  Name  ReferencedCommand\n-----------  ----  -----------------\nAlias        ls    Get-ChildItem',
        explanation: 'Get-Member mostra que um processo tem dezenas de propriedades. Você pode acessar qualquer uma delas com o ponto!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-02-03-q1',
      type: 'multiple_choice',
      question: 'Qual é o comando REAL por trás do alias "cd"?',
      options: [
        'Change-Directory',
        'Set-Location',
        'Move-Path',
        'Go-Folder'
      ],
      correctAnswer: 1,
      explanation: '"cd" é um alias para Set-Location. Ambos fazem exatamente a mesma coisa: mudam a pasta atual.'
    },
    {
      id: 'ps-02-03-q2',
      type: 'multiple_choice',
      question: 'Para que serve o Get-Member?',
      options: [
        'Para adicionar membros a um grupo',
        'Para mostrar as propriedades e métodos de um objeto',
        'Para deletar um usuário',
        'Para conectar na internet'
      ],
      correctAnswer: 1,
      explanation: 'Get-Member é o "raio-X" do PowerShell — ele revela todas as propriedades (dados) e métodos (ações) de qualquer objeto.'
    },
    {
      id: 'ps-02-03-q3',
      type: 'multiple_choice',
      question: 'Como acessar APENAS o ano da data atual?',
      options: [
        'Get-Date -Year',
        'Get-Date.Year',
        '(Get-Date).Year',
        'Year(Get-Date)'
      ],
      correctAnswer: 2,
      explanation: 'Encapsule o comando em parênteses e use o ponto para acessar a propriedade: (Get-Date).Year. Os parênteses forçam a execução primeiro.'
    },
    {
      id: 'ps-02-03-code1',
      type: 'code_challenge',
      question: 'Descubra qual é o dia da semana hoje usando o Get-Date e acessando uma propriedade. Cole o comando.',
      codePrompt: 'Use (Get-Date) com o ponto e a propriedade correta para mostrar o dia da semana.',
      expectedOutput: '(Get-Date).DayOfWeek — deve retornar algo como "Sunday" ou "Monday"',
      hint: 'A propriedade se chama DayOfWeek. Use (Get-Date).???',
      starterCode: '# Mostre o dia da semana atual\n'
    }
  ]
};
