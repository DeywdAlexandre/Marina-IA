import { Lesson } from '../../../../types/academy';

/**
 * Lição 3.3 — Select-Object e Format: Escolhendo e Formatando
 * Ensina a selecionar propriedades e formatar a saída de forma profissional.
 */
export const lesson0303: Lesson = {
  id: 'ps-03-03',
  title: 'Select-Object e Format: Escolhendo e Formatando',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'Select-Object ESCOLHE quais propriedades mostrar. Format-Table FORMATA como exibir.',
    'Use Select-Object ANTES no pipeline (para processar dados) e Format-Table como ÚLTIMO comando (para exibir).',
    'Nunca coloque Format-Table no meio do pipeline — ele deve ser sempre o último!',
  ],
  content: {
    markdown: `
# Select-Object e Format: Escolhendo e Formatando

Na lição anterior você aprendeu a filtrar e ordenar. Agora vai aprender a **escolher** quais informações mostrar e **formatar** a saída de forma profissional.

---

## 🎯 Select-Object: Escolhendo Propriedades

Quando você roda \`Get-Process\`, ele mostra muitas colunas. E se você só quer o nome e o uso de CPU?

### Selecionando colunas específicas:
\`\`\`powershell
Get-Process | Select-Object Name, CPU, WorkingSet64
\`\`\`

### Pegando os primeiros N resultados:
\`\`\`powershell
# Primeiros 5 processos
Get-Process | Select-Object -First 5

# Últimos 3 serviços
Get-Service | Select-Object -Last 3
\`\`\`

### Pulando resultados:
\`\`\`powershell
# Pular os primeiros 10 e mostrar o resto
Get-Process | Select-Object -Skip 10
\`\`\`

### Removendo duplicatas:
\`\`\`powershell
# Valores únicos de Status (sem repetir)
Get-Service | Select-Object Status -Unique
\`\`\`

---

## 🧮 Propriedades Calculadas

O Select-Object pode criar **colunas novas** com cálculos:

\`\`\`powershell
# Converter memória de bytes para MB
Get-Process | Select-Object Name, @{
  Name = 'MemoriaMB'
  Expression = { [math]::Round($_.WorkingSet64 / 1MB, 2) }
} | Sort-Object MemoriaMB -Descending | Select-Object -First 5
\`\`\`

Isso cria uma coluna chamada "MemoriaMB" que converte bytes para megabytes.

> **Não se assuste com a sintaxe!** O \`@{Name=...; Expression={...}}\` é uma "propriedade calculada". Com o tempo, fica natural.

---

## 📐 Measure-Object: Contando e Somando

Para contar quantos itens tem, ou somar valores:

\`\`\`powershell
# Quantos processos estão rodando?
Get-Process | Measure-Object

# Quantos serviços estão parados?
Get-Service | Where-Object Status -eq 'Stopped' | Measure-Object

# Soma total do uso de CPU de todos os processos
Get-Process | Measure-Object CPU -Sum

# Média de uso de CPU
Get-Process | Measure-Object CPU -Average

# Estatísticas completas
Get-Process | Measure-Object CPU -Sum -Average -Maximum -Minimum
\`\`\`

---

## 🎨 Format-Table e Format-List

### Format-Table (ft) — Exibição em tabela:
\`\`\`powershell
# Tabela com largura automática
Get-Service | Format-Table -AutoSize

# Tabela com colunas específicas
Get-Process | Format-Table Name, CPU, WorkingSet64 -AutoSize
\`\`\`

### Format-List (fl) — Exibição em lista vertical:
\`\`\`powershell
# Útil quando há muitas propriedades
Get-Service AudioSrv | Format-List *
\`\`\`

### Format-Wide — Uma coluna só:
\`\`\`powershell
# Lista apenas os nomes, em múltiplas colunas
Get-Process | Format-Wide Name -Column 4
\`\`\`

> **Regra importante:** \`Format-*\` deve ser o **ÚLTIMO** comando no pipeline! Depois dele, os dados viram texto e não podem mais ser processados.

---

## 📤 Exportando Dados

Em vez de mostrar na tela, salve em arquivo:

\`\`\`powershell
# Salvar como texto
Get-Process | Out-File processos.txt

# Salvar como CSV (abre no Excel!)
Get-Process | Select-Object Name, CPU | Export-Csv processos.csv -NoTypeInformation

# Salvar como JSON
Get-Process | Select-Object Name, CPU | ConvertTo-Json | Out-File processos.json
\`\`\`

O \`Export-Csv\` é especialmente útil — o arquivo abre direto no Excel!

---

## 📝 Resumo da Lição

- \`Select-Object\` escolhe propriedades: \`-First\`, \`-Last\`, \`-Skip\`, \`-Unique\`
- Propriedades calculadas: \`@{Name='...'; Expression={...}}\`
- \`Measure-Object\` conta, soma, média, máx/mín
- \`Format-Table\` formata em tabela (\`-AutoSize\`)
- \`Format-List\` formata em lista vertical
- \`Out-File\` e \`Export-Csv\` salvam em arquivo
- **Format-* sempre por último** no pipeline!
`,
    codeExamples: [
      {
        title: 'Pipeline completo profissional',
        language: 'powershell',
        code: '# Relatório dos 5 processos mais pesados\nGet-Process |\n  Where-Object { $_.WorkingSet64 -gt 50MB } |\n  Sort-Object WorkingSet64 -Descending |\n  Select-Object -First 5 Name, @{\n    Name = "MemoriaMB"\n    Expression = { [math]::Round($_.WorkingSet64/1MB, 1) }\n  }, CPU |\n  Format-Table -AutoSize',
        output: 'Name      MemoriaMB    CPU\n----      ---------    ---\nchrome       512.3    234.5\nCode         389.1     98.2\nTeams        267.4     67.1\nexplorer     156.8     45.0\nSpotify      134.2     23.4',
        explanation: 'Esse é o padrão profissional: Get → Where → Sort → Select → Format. Cada etapa refina os dados!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-03-03-q1',
      type: 'multiple_choice',
      question: 'Qual parâmetro do Select-Object pega apenas os 3 primeiros resultados?',
      options: [
        '-Top 3',
        '-First 3',
        '-Limit 3',
        '-Head 3'
      ],
      correctAnswer: 1,
      explanation: '-First N retorna os primeiros N resultados. Da mesma forma, -Last N retorna os últimos.'
    },
    {
      id: 'ps-03-03-q2',
      type: 'multiple_choice',
      question: 'Por que o Format-Table deve ser SEMPRE o último no pipeline?',
      options: [
        'Porque é mais rápido assim',
        'Porque depois dele os dados viram texto e não podem mais ser processados',
        'Porque ele deleta os dados',
        'Não precisa ser o último, pode ser em qualquer posição'
      ],
      correctAnswer: 1,
      explanation: 'Format-* transforma os objetos em texto para exibição. Depois disso, comandos como Where-Object e Sort-Object não funcionam mais!'
    },
    {
      id: 'ps-03-03-q3',
      type: 'multiple_choice',
      question: 'Qual comando EXPORTA dados em formato que abre no Excel?',
      options: [
        'Out-File',
        'Export-Excel',
        'Export-Csv',
        'Save-Table'
      ],
      correctAnswer: 2,
      explanation: 'Export-Csv cria um arquivo CSV que pode ser aberto diretamente no Excel, Google Sheets, etc.'
    },
    {
      id: 'ps-03-03-code1',
      type: 'code_challenge',
      question: 'Escreva um comando que conte quantos serviços estão com status "Running".',
      codePrompt: 'Use Get-Service, Where-Object e Measure-Object no pipeline.',
      expectedOutput: 'Get-Service | Where-Object Status -eq \'Running\' | Measure-Object — deve retornar um Count',
      hint: 'Get-Service | Where-Object ... | Measure-Object',
      starterCode: '# Quantos serviços estão rodando?\n'
    }
  ]
};
