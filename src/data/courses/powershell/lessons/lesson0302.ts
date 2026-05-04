import { Lesson } from '../../../../types/academy';

/**
 * Lição 3.2 — Where-Object e Sort-Object: Filtrando e Ordenando
 * Aprofunda nos dois comandos mais usados do pipeline.
 */
export const lesson0302: Lesson = {
  id: 'ps-03-02',
  title: 'Where-Object e Sort-Object: Filtrando e Ordenando',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'Where-Object funciona como um "filtro de café" — só passa o que atende à condição.',
    'O $_ (underline dólar) representa o "item atual" no pipeline. Pense nele como "esse aqui".',
    'Pratique esses comandos no simulador — são os que mais vai usar na vida real!',
  ],
  content: {
    markdown: `
# Where-Object e Sort-Object

Esses dois comandos são os "braços direito e esquerdo" do pipeline. Com eles, você transforma uma lista caótica em informação útil.

---

## 🔍 Where-Object: O Filtro

O Where-Object filtra objetos com base em uma **condição**. Existem duas sintaxes:

### Sintaxe Simplificada (PowerShell 3.0+):
\`\`\`powershell
Get-Service | Where-Object Status -eq 'Running'
\`\`\`

### Sintaxe com Script Block (mais flexível):
\`\`\`powershell
Get-Service | Where-Object { $_.Status -eq 'Running' }
\`\`\`

O \`$_\` representa o **objeto atual** no pipeline. É como dizer "pegue cada item e verifique se o Status dele é Running".

---

## 📐 Operadores de Comparação

O PowerShell usa operadores especiais (diferentes de outras linguagens):

| Operador | Significado | Exemplo |
|----------|-------------|---------|
| \`-eq\` | Igual (Equal) | \`-eq 'Running'\` |
| \`-ne\` | Diferente (Not Equal) | \`-ne 'Stopped'\` |
| \`-gt\` | Maior que (Greater Than) | \`-gt 100\` |
| \`-lt\` | Menor que (Less Than) | \`-lt 50\` |
| \`-ge\` | Maior ou igual (Greater/Equal) | \`-ge 10\` |
| \`-le\` | Menor ou igual (Less/Equal) | \`-le 5\` |
| \`-like\` | Padrão com curinga | \`-like '*chrome*'\` |
| \`-notlike\` | NÃO combina com padrão | \`-notlike '*svc*'\` |
| \`-contains\` | Contém na lista | \`-contains 'Admin'\` |
| \`-match\` | Regex (expressão regular) | \`-match '^Get'\` |

> **Por que -eq e não ==?** O PowerShell usa \`-eq\` por clareza. O \`=\` já é usado para atribuir valores a variáveis.

---

## 💡 Exemplos Práticos de Filtros

\`\`\`powershell
# Processos usando mais de 100MB de memória
Get-Process | Where-Object { $_.WorkingSet64 -gt 100MB }

# Serviços que começam com "Win"
Get-Service | Where-Object Name -like 'Win*'

# Arquivos maiores que 1MB na pasta atual
Get-ChildItem | Where-Object { $_.Length -gt 1MB }

# Processos cujo nome contém "chrome"
Get-Process | Where-Object Name -like '*chrome*'
\`\`\`

### Combinando múltiplas condições:

\`\`\`powershell
# Serviços parados E que começam com "Win"
Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.Name -like 'Win*' }

# Processos que usam mais de 50MB OU mais de 30s de CPU
Get-Process | Where-Object { $_.WorkingSet64 -gt 50MB -or $_.CPU -gt 30 }
\`\`\`

---

## 📊 Sort-Object: Organizando os Dados

Sort-Object ordena os resultados por uma propriedade.

### Ordem crescente (padrão):
\`\`\`powershell
Get-Process | Sort-Object Name
Get-Service | Sort-Object Status
\`\`\`

### Ordem decrescente:
\`\`\`powershell
Get-Process | Sort-Object CPU -Descending
Get-ChildItem | Sort-Object Length -Descending
\`\`\`

### Ordenar por múltiplas propriedades:
\`\`\`powershell
# Ordenar por Status, depois por Nome
Get-Service | Sort-Object Status, Name
\`\`\`

---

## 🔗 Combinando Where + Sort no Pipeline

O fluxo mais comum:

\`\`\`powershell
# 1. Lista → 2. Filtra → 3. Ordena → 4. Exibe
Get-Process |
  Where-Object { $_.CPU -gt 5 } |
  Sort-Object CPU -Descending |
  Select-Object Name, CPU, WorkingSet64
\`\`\`

Esse padrão **Lista → Filtra → Ordena** é o que você vai usar em 90% das situações!

---

## 📝 Resumo da Lição

- \`Where-Object\` filtra dados com condições (\`-eq\`, \`-gt\`, \`-like\`, etc.)
- \`$_\` representa o item atual no pipeline
- Operadores: \`-eq\`, \`-ne\`, \`-gt\`, \`-lt\`, \`-like\`, \`-match\`
- Combine condições com \`-and\` e \`-or\`
- \`Sort-Object\` ordena por propriedade (use \`-Descending\` para inverter)
- Padrão: \`Get-Algo | Where-Object | Sort-Object | Select-Object\`
`,
    codeExamples: [
      {
        title: 'Filtrando e ordenando — teste no terminal!',
        language: 'powershell',
        code: '# Top 3 processos que mais consomem CPU\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 3 Name, CPU\n\n# Serviços rodando, ordenados por nome\nGet-Service | Where-Object Status -eq \'Running\' | Sort-Object Name | Select-Object -First 5 Name, Status',
        output: 'Name       CPU\n----       ---\nchrome     234.5\nCode        98.2\nTeams       67.1\n\nName          Status\n----          ------\nAudioSrv     Running\nBITS         Running\nCryptSvc     Running\nDhcp         Running\nDnscache     Running',
        explanation: 'O padrão Get → Where → Sort → Select é o workflow mais usado no dia a dia!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-03-02-q1',
      type: 'multiple_choice',
      question: 'O que o $_ representa dentro de um Where-Object?',
      options: [
        'O nome do computador',
        'O objeto atual que está passando pelo pipeline',
        'A variável de erro',
        'O último resultado'
      ],
      correctAnswer: 1,
      explanation: '$_ (ou $PSItem) representa o objeto atual no pipeline. Cada item da lista passa por ele para ser avaliado.'
    },
    {
      id: 'ps-03-02-q2',
      type: 'multiple_choice',
      question: 'Qual operador significa "maior que" no PowerShell?',
      options: [
        '>',
        '-bigger',
        '-gt',
        '-more'
      ],
      correctAnswer: 2,
      explanation: '-gt (Greater Than) é o operador de "maior que". O PowerShell usa abreviações em inglês para todos os operadores.'
    },
    {
      id: 'ps-03-02-q3',
      type: 'multiple_choice',
      question: 'Como ordenar resultados do MAIOR para o MENOR?',
      options: [
        'Sort-Object -Reverse',
        'Sort-Object -Descending',
        'Sort-Object -Down',
        'Sort-Object -Backward'
      ],
      correctAnswer: 1,
      explanation: 'O parâmetro -Descending inverte a ordem. Sem ele, a ordenação é crescente (ascending) por padrão.'
    },
    {
      id: 'ps-03-02-code1',
      type: 'code_challenge',
      question: 'Escreva um comando que liste apenas os serviços com status "Stopped", ordenados por nome.',
      codePrompt: 'Use Get-Service, Where-Object e Sort-Object no pipeline.',
      expectedOutput: 'Get-Service | Where-Object Status -eq \'Stopped\' | Sort-Object Name',
      hint: 'Get-Service | Where-Object ... | Sort-Object ...',
      starterCode: '# Serviços parados, ordenados por nome\n'
    }
  ]
};
