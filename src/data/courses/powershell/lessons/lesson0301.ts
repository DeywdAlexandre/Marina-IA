import { Lesson } from '../../../../types/academy';

/**
 * Lição 3.1 — O Pipeline: Conectando Comandos
 * Ensina o conceito fundamental de pipeline (|) no PowerShell.
 */
export const lesson0301: Lesson = {
  id: 'ps-03-01',
  title: 'O Pipeline: Conectando Comandos',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'O pipeline (|) é o conceito mais poderoso do PowerShell. Domine ele e você domina o PowerShell.',
    'Pense no pipeline como uma "linha de montagem" onde cada comando faz uma etapa do trabalho.',
    'No terminal simulado, teste os comandos com | para ver o pipeline em ação!',
  ],
  content: {
    markdown: `
# O Pipeline: Conectando Comandos

Até agora, você usou comandos isolados: \`Get-Date\`, \`Get-Process\`, \`Get-Service\`. Mas o verdadeiro poder do PowerShell aparece quando você **conecta comandos** usando o **pipeline**.

> O pipeline (\`|\`) é como uma esteira rolante em uma fábrica. O primeiro comando produz algo, e passa para o próximo, que transforma, filtra ou exibe o resultado.

---

## 🔗 O que é o Pipeline?

O **pipe** é o caractere \`|\` (barra vertical). Ele pega a **saída** de um comando e envia como **entrada** do próximo.

### Sintaxe:
\`\`\`powershell
Comando1 | Comando2 | Comando3
\`\`\`

### Exemplo visual:

\`\`\`
Get-Service  →  Where-Object  →  Sort-Object  →  Resultado
(lista todos)   (filtra)         (ordena)        (na tela)
\`\`\`

É como pedir num restaurante:
1. **Cozinha** produz todos os pratos → \`Get-Service\`
2. **Garçom filtra** só os que você pediu → \`Where-Object\`
3. **Apresentação** organiza bonito no prato → \`Sort-Object\`

---

## 🚀 Primeiro Exemplo Prático

Vamos listar serviços que estão **parados**:

### Sem pipeline (resultado bruto):
\`\`\`powershell
Get-Service
\`\`\`
Isso mostra TODOS os serviços (centenas!). Difícil de ler.

### Com pipeline (filtrado):
\`\`\`powershell
Get-Service | Where-Object Status -eq 'Stopped'
\`\`\`
Agora mostra apenas os serviços parados. Muito mais útil!

### Com pipeline (filtrado + ordenado):
\`\`\`powershell
Get-Service | Where-Object Status -eq 'Stopped' | Sort-Object Name
\`\`\`
Agora mostra os serviços parados **em ordem alfabética**.

---

## 📊 Comandos Mais Usados no Pipeline

Esses são os "trabalhadores" que você vai usar depois do \`|\`:

| Comando | O que faz | Exemplo |
|---------|-----------|---------|
| \`Where-Object\` | **Filtra** resultados | \`Where-Object Status -eq 'Running'\` |
| \`Sort-Object\` | **Ordena** resultados | \`Sort-Object Name\` |
| \`Select-Object\` | **Escolhe** colunas | \`Select-Object Name, Status\` |
| \`Format-Table\` | **Formata** como tabela | \`Format-Table -AutoSize\` |
| \`Format-List\` | **Formata** como lista | \`Format-List\` |
| \`Measure-Object\` | **Conta/soma** | \`Measure-Object\` |
| \`Out-File\` | **Salva** em arquivo | \`Out-File resultado.txt\` |
| \`Export-Csv\` | **Exporta** como CSV | \`Export-Csv dados.csv\` |

> Não precisa decorar tudo agora. Vamos praticar cada um nas próximas lições!

---

## 🔢 Encadeando Múltiplos Pipes

Você pode encadear quantos comandos quiser:

\`\`\`powershell
Get-Process |
  Where-Object { $_.CPU -gt 10 } |
  Sort-Object CPU -Descending |
  Select-Object -First 5 Name, CPU |
  Format-Table -AutoSize
\`\`\`

Esse comando faz tudo isso em uma linha:
1. Lista todos os processos
2. Filtra os que usam mais de 10 segundos de CPU
3. Ordena do maior para o menor uso de CPU
4. Pega apenas os 5 primeiros
5. Formata como tabela bonita

---

## ⚡ Atalhos Importantes

O PowerShell tem atalhos para os comandos de pipeline mais usados:

| Comando Completo | Alias/Atalho |
|-----------------|-------------|
| \`Where-Object\` | \`where\` ou \`?\` |
| \`Sort-Object\` | \`sort\` |
| \`Select-Object\` | \`select\` |
| \`ForEach-Object\` | \`foreach\` ou \`%\` |
| \`Format-Table\` | \`ft\` |
| \`Format-List\` | \`fl\` |
| \`Measure-Object\` | \`measure\` |

Então esses dois comandos são **idênticos**:

\`\`\`powershell
# Forma completa
Get-Service | Where-Object Status -eq 'Running' | Sort-Object Name

# Forma com atalhos
Get-Service | where Status -eq 'Running' | sort Name
\`\`\`

---

## 📝 Resumo da Lição

- O **pipeline** (\`|\`) conecta comandos, passando a saída de um como entrada do próximo
- É como uma **linha de montagem**: cada comando faz uma etapa
- Comandos mais usados no pipeline: \`Where-Object\`, \`Sort-Object\`, \`Select-Object\`
- Você pode **encadear** quantos pipes quiser
- Existem **aliases** para digitar mais rápido: \`where\`, \`sort\`, \`select\`
`,
    codeExamples: [
      {
        title: 'Pipeline na prática — teste no terminal!',
        language: 'powershell',
        code: '# Top 5 processos por uso de CPU\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU\n\n# Serviços rodando, em ordem alfabética\nGet-Service | Where-Object Status -eq \'Running\' | Sort-Object Name | Select-Object -First 5',
        output: 'Name            CPU\n----            ---\nchrome          234.5\nCode             98.2\nTeams            67.1\nexplorer         45.0\nSpotify          23.4\n\nStatus  Name                DisplayName\n------  ----                -----------\nRunning AudioSrv            Windows Audio\nRunning BrokerInfrastru...  Background Tasks...\nRunning CryptSvc            Cryptographic Services\nRunning Dhcp                DHCP Client\nRunning Dnscache            DNS Client',
        explanation: 'Note como cada | adiciona uma etapa de processamento. Os dados fluem da esquerda para a direita.'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-03-01-q1',
      type: 'multiple_choice',
      question: 'O que o caractere | (pipe) faz no PowerShell?',
      options: [
        'Divide o comando em duas partes',
        'Envia a saída de um comando como entrada do próximo',
        'Comenta o código',
        'Cria uma variável'
      ],
      correctAnswer: 1,
      explanation: 'O pipe (|) conecta comandos — a saída do primeiro vira a entrada do segundo. É o conceito central do PowerShell!'
    },
    {
      id: 'ps-03-01-q2',
      type: 'multiple_choice',
      question: 'Qual comando FILTRA resultados no pipeline?',
      options: [
        'Sort-Object',
        'Select-Object',
        'Where-Object',
        'Format-Table'
      ],
      correctAnswer: 2,
      explanation: 'Where-Object filtra/seleciona apenas os itens que atendem a uma condição. Sort-Object ordena, Select-Object escolhe colunas.'
    },
    {
      id: 'ps-03-01-q3',
      type: 'multiple_choice',
      question: 'Qual é o alias (atalho) do Where-Object?',
      options: [
        'wo',
        'filter',
        'where ou ?',
        'find'
      ],
      correctAnswer: 2,
      explanation: 'Where-Object pode ser abreviado como "where" ou até mesmo "?" (interrogação). Exemplo: Get-Service | ? Status -eq \'Running\''
    },
    {
      id: 'ps-03-01-code1',
      type: 'code_challenge',
      question: 'Escreva um comando que liste os 3 primeiros processos ordenados por nome.',
      codePrompt: 'Use Get-Process com Sort-Object e Select-Object no pipeline para listar os 3 primeiros processos em ordem alfabética.',
      expectedOutput: 'Get-Process | Sort-Object Name | Select-Object -First 3',
      hint: 'Use 3 comandos: Get-Process | Sort-Object ... | Select-Object -First ...',
      starterCode: '# Liste os 3 primeiros processos em ordem alfabética\n'
    }
  ]
};
