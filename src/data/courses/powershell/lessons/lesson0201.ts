import { Lesson } from '../../../../types/academy';

/**
 * Lição 2.1 — Get-Help: Seu Manual de Sobrevivência
 * Ensina o aluno a ser independente usando o sistema de ajuda do PowerShell.
 */
export const lesson0201: Lesson = {
  id: 'ps-02-01',
  title: 'Get-Help: Seu Manual de Sobrevivência',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O Get-Help é o comando mais importante do PowerShell. Se você aprender só um comando, aprenda este.',
    'Profissionais usam o Get-Help o tempo todo. Não é "coisa de iniciante".',
    'Se o terminal pedir para atualizar a ajuda, digite Y e pressione Enter.',
  ],
  content: {
    markdown: `
# Get-Help: Seu Manual de Sobrevivência

Na lição anterior você aprendeu seus primeiros comandos. Mas e se você esquecer como usar um deles? E se quiser descobrir novos comandos?

É aí que entra o **Get-Help** — o sistema de ajuda **embutido** no PowerShell.

> **Regra de Ouro:** Nunca decore comandos. Aprenda a **consultar** o Get-Help. É como ter o Google dentro do seu terminal.

---

## 🔍 Usando o Get-Help pela primeira vez

Para ver a ajuda de qualquer comando, basta usar:

\`\`\`powershell
Get-Help Get-Date
\`\`\`

Isso mostra:
- **NAME** — nome do comando
- **SYNOPSIS** — resumo de uma linha
- **SYNTAX** — como usar (quais parâmetros aceita)
- **DESCRIPTION** — explicação detalhada
- **EXAMPLES** — exemplos práticos

---

## 📚 Níveis de Detalhe

O Get-Help tem 3 níveis de profundidade:

### Ajuda resumida (padrão)
\`\`\`powershell
Get-Help Get-Date
\`\`\`

### Ajuda detalhada (-Detailed)
\`\`\`powershell
Get-Help Get-Date -Detailed
\`\`\`
Mostra tudo + parâmetros com explicações + exemplos completos.

### Ajuda completa (-Full)
\`\`\`powershell
Get-Help Get-Date -Full
\`\`\`
Mostra absolutamente TUDO. Usado quando precisa de cada detalhe técnico.

### Apenas exemplos (-Examples)
\`\`\`powershell
Get-Help Get-Date -Examples
\`\`\`
Mostra apenas os exemplos de uso. **Super útil quando quer ir direto ao ponto!**

---

## 🌐 Ajuda Online

Se preferir ler no navegador (com formatação bonita):

\`\`\`powershell
Get-Help Get-Date -Online
\`\`\`

Isso abre a documentação oficial da Microsoft no seu navegador. Muito útil quando está no computador.

---

## 🔄 Atualizando a Ajuda

Na primeira vez, a ajuda local pode estar incompleta. Para baixar a ajuda completa e atualizada:

\`\`\`powershell
Update-Help -Force
\`\`\`

> **Nota:** Esse comando precisa de acesso à internet e pode demorar alguns minutos. Execute uma vez e pronto.

---

## 🧠 Usando Curingas para Descobrir Comandos

E se você **não souber** o nome do comando, mas souber o que quer fazer?

### Buscar comandos por palavra-chave:
\`\`\`powershell
# Quais comandos têm a ver com "process"?
Get-Help *process*

# Quais comandos têm a ver com "file"?
Get-Help *file*

# Quais comandos têm a ver com "network"?
Get-Help *network*
\`\`\`

O \`*\` (asterisco) funciona como curinga — significa "qualquer coisa". Então \`*process*\` significa "qualquer coisa que contenha a palavra process".

---

## 📝 Resumo da Lição

- \`Get-Help <comando>\` mostra a ajuda de qualquer comando
- Use \`-Detailed\`, \`-Full\` ou \`-Examples\` para mais detalhes
- Use \`-Online\` para abrir a documentação no navegador
- Use \`Get-Help *palavra*\` com curingas para **descobrir** comandos novos
- \`Update-Help -Force\` atualiza a ajuda local
`,
    codeExamples: [
      {
        title: 'Prática guiada — Experimente no terminal!',
        language: 'powershell',
        code: '# 1. Veja a ajuda do Get-Date\nGet-Help Get-Date\n\n# 2. Veja só os exemplos\nGet-Help Get-Date -Examples\n\n# 3. Descubra comandos sobre serviços\nGet-Help *service*\n\n# 4. Descubra comandos sobre arquivos\nGet-Help *item*',
        output: '(lista de informações sobre o comando Get-Date)\n\n(exemplos de uso do Get-Date)\n\n(lista de todos os comandos relacionados a service)\n\n(lista de todos os comandos relacionados a item - arquivos/pastas)',
        explanation: 'Note que *item* no PowerShell se refere a arquivos e pastas. Veremos isso em detalhes mais à frente!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-02-01-q1',
      type: 'multiple_choice',
      question: 'Qual comando mostra APENAS os exemplos de uso de um cmdlet?',
      options: [
        'Get-Help Get-Date -Full',
        'Get-Help Get-Date -Detailed',
        'Get-Help Get-Date -Examples',
        'Get-Help Get-Date -Show'
      ],
      correctAnswer: 2,
      explanation: 'O parâmetro -Examples mostra apenas os exemplos de uso — perfeito para quando você quer ir direto ao ponto!'
    },
    {
      id: 'ps-02-01-q2',
      type: 'multiple_choice',
      question: 'Como descobrir TODOS os comandos relacionados à palavra "process"?',
      options: [
        'Search-Command process',
        'Get-Help *process*',
        'Find process',
        'Help-Me process'
      ],
      correctAnswer: 1,
      explanation: 'Usando Get-Help com curingas (*): Get-Help *process* encontra todos os comandos que contêm "process" no nome.'
    },
    {
      id: 'ps-02-01-code1',
      type: 'code_challenge',
      question: 'Use o Get-Help para descobrir quantos comandos existem relacionados à palavra "service". Cole o comando usado.',
      codePrompt: 'Descubra todos os cmdlets que contêm "service" no nome.',
      expectedOutput: 'Get-Help *service* — deve listar vários cmdlets como Get-Service, Start-Service, Stop-Service, etc.',
      hint: 'Use o Get-Help com asteriscos (*) ao redor da palavra.',
      starterCode: '# Descubra os comandos relacionados a "service"\n'
    }
  ]
};
