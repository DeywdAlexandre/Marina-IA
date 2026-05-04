import { Lesson } from '../../../../types/academy';

/**
 * Lição 2.2 — Get-Command: O Catálogo Completo
 * Ensina a explorar TODOS os comandos disponíveis no PowerShell.
 */
export const lesson0202: Lesson = {
  id: 'ps-02-02',
  title: 'Get-Command: O Catálogo Completo',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Get-Command é diferente do Get-Help: ele LISTA comandos, enquanto Get-Help EXPLICA comandos.',
    'O PowerShell tem milhares de comandos disponíveis. Você não precisa saber todos — apenas saber como encontrá-los.',
  ],
  content: {
    markdown: `
# Get-Command: O Catálogo Completo

Se o \`Get-Help\` é o "manual de instruções", o \`Get-Command\` é o **catálogo da loja** — ele mostra **todos** os comandos disponíveis no seu PowerShell.

---

## 📦 Listando TODOS os Comandos

\`\`\`powershell
Get-Command
\`\`\`

**Cuidado:** esse comando vai listar MILHARES de resultados. No meu computador são mais de 1.500 comandos! Vamos aprender a filtrar.

---

## 🎯 Filtrando Comandos

### Por verbo (o que você quer FAZER):
\`\`\`powershell
# Todos os comandos que "obtêm" algo
Get-Command -Verb Get

# Todos os comandos que "param" algo
Get-Command -Verb Stop

# Todos os comandos que "criam" algo
Get-Command -Verb New
\`\`\`

### Por substantivo (COM O QUE você quer trabalhar):
\`\`\`powershell
# Todos os comandos que trabalham com "Service"
Get-Command -Noun Service

# Todos os comandos que trabalham com "Process"
Get-Command -Noun Process

# Todos os comandos que trabalham com "Item" (arquivos/pastas)
Get-Command -Noun Item
\`\`\`

### Por nome com curinga:
\`\`\`powershell
# Tudo que começa com "Get-"
Get-Command Get-*

# Tudo que tem "net" no nome
Get-Command *net*
\`\`\`

---

## 📊 Contando Comandos

Quer saber **quantos** comandos existem?

\`\`\`powershell
# Total de comandos
(Get-Command).Count

# Quantos são do tipo Cmdlet
(Get-Command -CommandType Cmdlet).Count

# Quantos são do tipo Function
(Get-Command -CommandType Function).Count
\`\`\`

---

## 🏷️ Tipos de Comando

O PowerShell tem diferentes tipos de comandos:

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Cmdlet** | Comando nativo do PowerShell | \`Get-Process\` |
| **Function** | Função criada em script | \`mkdir\` |
| **Alias** | Atalho para outro comando | \`ls\` → \`Get-ChildItem\` |
| **Application** | Programa externo (.exe) | \`notepad\`, \`ping\` |

Para filtrar por tipo:
\`\`\`powershell
Get-Command -CommandType Alias
Get-Command -CommandType Application
\`\`\`

---

## 🔗 Combinando Get-Command com Get-Help

Workflow profissional para descobrir e aprender comandos:

1. **Encontre** o comando: \`Get-Command *service*\`
2. **Entenda** o comando: \`Get-Help Get-Service -Examples\`
3. **Use** o comando: \`Get-Service\`

Esse fluxo é o que profissionais fazem todos os dias. Você nunca precisa "saber de cor"!

---

## 📝 Resumo da Lição

- \`Get-Command\` lista todos os comandos disponíveis
- Filtre por \`-Verb\`, \`-Noun\` ou com curingas (\`*\`)
- Use \`(Get-Command).Count\` para contar comandos
- Existem 4 tipos: Cmdlet, Function, Alias e Application
- **Workflow:** Get-Command → Get-Help → usar o comando
`,
    codeExamples: [
      {
        title: 'Explorando o catálogo',
        language: 'powershell',
        code: '# Quantos comandos existem no total?\n(Get-Command).Count\n\n# Listar todos os verbos disponíveis\nGet-Verb | Select-Object -First 10\n\n# Encontrar comandos sobre "computer"\nGet-Command *computer*',
        output: '1547\n\nVerb    AliasPrefix Group          Description\n----    ----------- -----          -----------\nAdd     a           Common         Adds a resource...\nClear   cl          Common         Clears a resource...\nClose   cs          Common         Closes a resource...\n...',
        explanation: 'Get-Verb mostra todos os verbos aprovados pelo PowerShell. Isso ajuda a adivinhar o nome de comandos!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-02-02-q1',
      type: 'multiple_choice',
      question: 'Qual parâmetro do Get-Command filtra comandos pelo VERBO?',
      options: [
        '-Name',
        '-Verb',
        '-Action',
        '-Type'
      ],
      correctAnswer: 1,
      explanation: 'O parâmetro -Verb filtra pelo verbo do comando. Exemplo: Get-Command -Verb Stop retorna todos os comandos que "param" algo.'
    },
    {
      id: 'ps-02-02-q2',
      type: 'multiple_choice',
      question: 'O que é um "Alias" no PowerShell?',
      options: [
        'Um comando para criar pastas',
        'Um vírus disfarçado de comando',
        'Um atalho (apelido) para outro comando',
        'Um tipo de variável'
      ],
      correctAnswer: 2,
      explanation: 'Aliases são atalhos. Por exemplo, "ls" é um alias para "Get-ChildItem", e "cd" é um alias para "Set-Location". Veremos mais na próxima lição!'
    },
    {
      id: 'ps-02-02-code1',
      type: 'code_challenge',
      question: 'Use Get-Command para descobrir quantos comandos usam o verbo "Get". Cole o comando.',
      codePrompt: 'Conte quantos cmdlets começam com "Get-".',
      expectedOutput: '(Get-Command -Verb Get).Count — deve retornar algo como 200+',
      hint: 'Use Get-Command com -Verb e encapsule em parênteses seguido de .Count',
      starterCode: '# Quantos comandos usam o verbo "Get"?\n'
    }
  ]
};
