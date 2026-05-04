import { Lesson } from '../../../../types/academy';

/**
 * Lição 1.3 — Seus Primeiros Comandos
 * Ensinando a filosofia Verb-Noun, os primeiros cmdlets
 * e como "ler" os comandos do PowerShell.
 */
export const lesson0103: Lesson = {
  id: 'ps-01-03',
  title: 'Seus Primeiros Comandos (Cmdlets)',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'A regra "Verbo-Substantivo" é a chave para nunca esquecer os comandos do PowerShell.',
    'Sempre que não lembrar de um comando, pense: "O que eu quero FAZER (verbo) e COM O QUE (substantivo)?"',
    'Use Tab para autocompletar comandos! Comece a digitar e pressione Tab.',
  ],
  content: {
    markdown: `
# Seus Primeiros Comandos (Cmdlets)

Agora que o PowerShell está aberto, vamos aprender a "conversar" com ele. Nesta lição, você vai entender **como os comandos funcionam** e executar vários deles.

---

## 🧩 A Regra de Ouro: Verbo-Substantivo

Todo comando do PowerShell segue uma lógica simples:

\`\`\`
Verbo-Substantivo
\`\`\`

**Exemplos:**

| Comando | Verbo | Substantivo | O que faz |
|---------|-------|-------------|-----------|
| \`Get-Date\` | Get (Obter) | Date (Data) | Obtém a data atual |
| \`Get-Process\` | Get (Obter) | Process (Processo) | Lista processos rodando |
| \`Get-Service\` | Get (Obter) | Service (Serviço) | Lista serviços do Windows |
| \`Stop-Process\` | Stop (Parar) | Process (Processo) | Para/fecha um processo |
| \`Set-Location\` | Set (Definir) | Location (Local) | Muda de pasta |
| \`New-Item\` | New (Novo) | Item | Cria um novo arquivo/pasta |

> **💡 Sacou o padrão?** Se quiser **obter** algo, o verbo é \`Get\`. Se quiser **parar** algo, é \`Stop\`. Se quiser **criar** algo, é \`New\`. É como montar frases!

### Verbos mais comuns:

| Verbo | Significado | Exemplo |
|-------|-------------|---------|
| \`Get\` | Obter/Buscar | \`Get-Process\` |
| \`Set\` | Definir/Configurar | \`Set-Location\` |
| \`New\` | Criar | \`New-Item\` |
| \`Remove\` | Remover/Apagar | \`Remove-Item\` |
| \`Start\` | Iniciar | \`Start-Process\` |
| \`Stop\` | Parar | \`Stop-Service\` |
| \`Restart\` | Reiniciar | \`Restart-Computer\` |
| \`Test\` | Testar | \`Test-Connection\` |
| \`Out\` | Enviar para | \`Out-File\` |
| \`Write\` | Escrever | \`Write-Output\` |

---

## 🚀 Comandos para Praticar Agora

Abra o PowerShell e digite cada um desses comandos (um por vez, pressionando Enter após cada):

### 1. Mostrar a data e hora
\`\`\`powershell
Get-Date
\`\`\`

### 2. Listar processos (programas rodando)
\`\`\`powershell
Get-Process
\`\`\`
Vai aparecer uma lista grande! Não se assuste. Cada linha é um programa rodando no seu PC.

### 3. Listar serviços do Windows
\`\`\`powershell
Get-Service
\`\`\`
Serviços são programas que rodam "por trás" no Windows (antivírus, Wi-Fi, impressora, etc).

### 4. Ver informações do computador
\`\`\`powershell
Get-ComputerInfo | Select-Object CsName, OsName, OsVersion
\`\`\`
Isso mostra o nome do PC, sistema operacional e versão.

### 5. Testar conexão com a internet (ping)
\`\`\`powershell
Test-Connection google.com -Count 2
\`\`\`
Funciona como o famoso "ping" — testa se seu PC consegue acessar um site.

### 6. Escrever uma mensagem na tela
\`\`\`powershell
Write-Output "Olá, eu estou aprendendo PowerShell!"
\`\`\`

---

## ⌨️ Truques Essenciais do Terminal

Esses atalhos vão salvar sua vida:

| Atalho | O que faz |
|--------|-----------|
| **Tab** | Autocompleta o comando (ex: digite \`Get-Pro\` e aperte Tab) |
| **Seta ↑** | Mostra o comando anterior (histórico) |
| **Seta ↓** | Avança no histórico de comandos |
| **Ctrl + C** | Cancela um comando em execução |
| **Ctrl + L** | Limpa a tela (\`Clear-Host\` também funciona) |
| **F7** | Mostra lista visual do histórico de comandos |

> **💡 Dica Pro:** O Tab é seu melhor amigo! Nunca tente digitar o comando inteiro. Digite as primeiras letras e aperte Tab. Se houver mais de uma opção, aperte Tab várias vezes para alternar.

---

## 🔤 Maiúsculas e Minúsculas — Importam?

**Não!** O PowerShell **não diferencia** maiúsculas de minúsculas. Todos estes funcionam igual:

\`\`\`powershell
Get-Date
get-date
GET-DATE
gEt-DaTe
\`\`\`

Mas a convenção é usar **PascalCase** (primeira letra de cada palavra maiúscula): \`Get-Date\`, \`Get-Process\`, etc. Isso torna o código mais legível.

---

## 🔧 Parâmetros — Dando Detalhes ao Comando

Comandos podem receber **parâmetros** — informações extras que modificam seu comportamento:

\`\`\`powershell
# Sem parâmetro (padrão)
Get-Date

# Com parâmetro -Format (muda o formato da data)
Get-Date -Format "dd/MM/yyyy"

# Com parâmetro -Format (outro formato)
Get-Date -Format "HH:mm:ss"
\`\`\`

Os parâmetros sempre começam com **hífen** (\`-\`):

\`\`\`powershell
Test-Connection google.com -Count 3
#                          ^^^^^^ parâmetro
#                                 ^ valor do parâmetro
\`\`\`

---

## 📝 Resumo da Lição

- Comandos seguem a regra **Verbo-Substantivo** (\`Get-Date\`, \`Stop-Process\`)
- Os verbos mais usados: \`Get\`, \`Set\`, \`New\`, \`Remove\`, \`Start\`, \`Stop\`
- **Tab** autocompleta, **Seta ↑** repete comandos anteriores
- Maiúsculas/minúsculas **não importam**, mas use PascalCase por convenção
- **Parâmetros** (com \`-\`) modificam o comportamento dos comandos
`,
    codeExamples: [
      {
        title: 'Combinando o que aprendemos',
        language: 'powershell',
        code: '# Mostrar data no formato brasileiro\nGet-Date -Format "dd/MM/yyyy HH:mm"\n\n# Listar os 5 processos que mais usam CPU\nGet-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU\n\n# Ping rápido\nTest-Connection google.com -Count 1',
        output: '04/05/2025 19:20\n\nName         CPU\n----         ---\nchrome       234.5\nCode          98.2\nTeams         67.1\nexplorer      45.0\nSpotify       23.4\n\nSource      Destination  IPV4Address  Status\n------      -----------  -----------  ------\nMEU-PC      google.com   142.250.79.  Success',
        explanation: 'Note como os comandos podem ser combinados com | (pipe). Veremos isso em detalhes no módulo 3!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-01-03-q1',
      type: 'multiple_choice',
      question: 'Qual é a regra de nomenclatura dos comandos do PowerShell?',
      options: [
        'Nome-Sobrenome',
        'Verbo-Substantivo',
        'Substantivo-Verbo',
        'Não há regra, é aleatório'
      ],
      correctAnswer: 1,
      explanation: 'Todos os cmdlets seguem o padrão Verbo-Substantivo. Exemplo: Get-Process (Obter-Processo), New-Item (Novo-Item).'
    },
    {
      id: 'ps-01-03-q2',
      type: 'multiple_choice',
      question: 'Se eu quiser CRIAR algo, qual verbo devo usar no comando?',
      options: [
        'Get',
        'Set',
        'New',
        'Make'
      ],
      correctAnswer: 2,
      explanation: 'O verbo para criar coisas novas é "New". Exemplos: New-Item (criar arquivo/pasta), New-Service (criar serviço).'
    },
    {
      id: 'ps-01-03-q3',
      type: 'multiple_choice',
      question: 'O que a tecla Tab faz no PowerShell?',
      options: [
        'Fecha o PowerShell',
        'Apaga o último comando',
        'Autocompleta o comando que você está digitando',
        'Abre uma nova aba'
      ],
      correctAnswer: 2,
      explanation: 'Tab é o atalho mais útil! Comece a digitar um comando (ex: Get-Pro) e pressione Tab para autocompletar (Get-Process).'
    },
    {
      id: 'ps-01-03-q4',
      type: 'multiple_choice',
      question: 'Os comandos "Get-Date", "get-date" e "GET-DATE" são equivalentes?',
      options: [
        'Não, apenas o primeiro funciona',
        'Sim, o PowerShell não diferencia maiúsculas e minúsculas',
        'Sim, mas apenas no Windows',
        'Não, cada um faz algo diferente'
      ],
      correctAnswer: 1,
      explanation: 'O PowerShell é case-insensitive — não diferencia maiúsculas de minúsculas. Mas a convenção é usar PascalCase (Get-Date) para melhor legibilidade.'
    },
    {
      id: 'ps-01-03-code1',
      type: 'code_challenge',
      question: 'Escreva um comando que mostre a data atual no formato "dd/MM/yyyy" (dia/mês/ano).',
      codePrompt: 'Use o cmdlet Get-Date com o parâmetro -Format para exibir a data no formato brasileiro (dd/MM/yyyy).',
      expectedOutput: 'Get-Date -Format "dd/MM/yyyy" — deve retornar algo como 04/05/2025',
      hint: 'O cmdlet é Get-Date e o parâmetro para mudar o formato começa com -F...',
      starterCode: '# Mostre a data no formato dd/MM/yyyy\n'
    }
  ]
};
