import { Lesson } from '../../../../types/academy';

/**
 * Lição 1.1 — O que é o PowerShell?
 * Parte do ZERO: explica o que é um terminal, por que usar,
 * e o que torna o PowerShell diferente de tudo que existe.
 */
export const lesson0101: Lesson = {
  id: 'ps-01-01',
  title: 'O que é o PowerShell? (E por que você deveria aprender)',
  type: 'theory',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=IG6bRXEsqIE',
  videoTitle: 'O que é Windows PowerShell — Bóson Treinamentos',
  tips: [
    'Não se preocupe em decorar comandos agora. O objetivo desta lição é entender O QUE é o PowerShell e POR QUE ele existe.',
    'Se estiver no celular, apenas leia com calma. Quando for praticar, use o computador.',
  ],
  content: {
    markdown: `
# O que é o PowerShell?

Antes de falar sobre PowerShell, vamos entender algo mais básico: **o que é um terminal?**

## 🖥️ O Terminal — A "Caixa Preta" do Computador

Quando você usa o computador normalmente, você clica em ícones, arrasta arquivos e usa menus. Isso é a **interface gráfica** (GUI — Graphical User Interface).

Mas existe outra forma de "conversar" com o computador: **digitando comandos em texto**. O lugar onde você digita esses comandos se chama **terminal** (ou **console**, ou **shell**).

> **Analogia:** Pense no terminal como um **WhatsApp do computador**. Você manda um comando (mensagem), e ele responde com o resultado. Simples assim.

### Por que alguém usaria texto em vez de clicar?

| Situação | Com o Mouse (GUI) | Com o Terminal |
|----------|-------------------|----------------|
| Renomear 500 arquivos | Clicar um por um (horas) | Um comando (2 segundos) |
| Verificar uso de memória | Abrir Gerenciador de Tarefas | Um comando instantâneo |
| Instalar 10 programas | Baixar e instalar um por um | Uma lista de comandos |
| Limpar arquivos temporários | Procurar manualmente | Um script automático |

**Resumo:** O terminal é **mais rápido, mais poderoso e pode ser automatizado**.

---

## ⚡ Tá, mas o que é o PowerShell especificamente?

O **PowerShell** é o terminal moderno da Microsoft. Ele é:

1. **Um Shell** — um programa onde você digita comandos
2. **Uma Linguagem de Script** — você pode escrever "programas" completos nele
3. **Multiplataforma** — funciona no Windows, Linux e macOS

### A história resumida

| Ano | O que aconteceu |
|-----|----------------|
| Antes de 2006 | O Windows só tinha o **CMD** (Prompt de Comando), muito limitado |
| 2006 | A Microsoft lança o **Windows PowerShell 1.0** |
| 2016 | O PowerShell vira **código aberto** e passa a funcionar em Linux/Mac |
| Hoje (v7+) | **PowerShell 7** é a versão moderna, rápida e multiplataforma |

> **Importante:** Existe o "Windows PowerShell" (versão 5.1, que já vem instalado no Windows) e o "PowerShell" (versão 7+, que é o moderno). Ambos funcionam de forma muito parecida. Neste curso, vamos usar conceitos que funcionam nos dois.

---

## 🤔 CMD vs PowerShell — Qual a diferença?

Se você já usou o **Prompt de Comando** (CMD) do Windows, pode estar pensando: "não é a mesma coisa?"

**Não.** A diferença é enorme:

| Característica | CMD | PowerShell |
|---------------|-----|------------|
| Criado em | 1987 | 2006 |
| Trabalha com | Texto puro | **Objetos** (dados estruturados) |
| Linguagem de script | Limitadíssima (.bat) | Completa (loops, funções, classes) |
| Ajuda embutida | Quase nenhuma | Sistema de ajuda completo |
| Pode gerenciar | Arquivos básicos | Sistema inteiro, nuvem, redes, registro |

### O que são "Objetos"? (O superpoder do PowerShell)

No CMD, quando você lista arquivos, recebe **texto**:

\`\`\`
 Volume in drive C has no label.
 Directory of C:\\Users\\Deywd

01/15/2025  10:30 AM    <DIR>          Documents
01/15/2025  10:30 AM           1,234  notas.txt
\`\`\`

No PowerShell, quando você lista arquivos, recebe **objetos** — dados organizados com propriedades:

\`\`\`powershell
Get-ChildItem | Select-Object Name, Length, LastWriteTime
\`\`\`

Resultado:
\`\`\`
Name           Length  LastWriteTime
----           ------  -------------
Documents              01/15/2025 10:30
notas.txt      1234    01/15/2025 10:30
\`\`\`

**A vantagem?** Você pode filtrar, ordenar e manipular esses dados facilmente:

\`\`\`powershell
# Mostrar apenas arquivos maiores que 1MB
Get-ChildItem | Where-Object { $_.Length -gt 1MB }
\`\`\`

> Não se preocupe em entender esse comando agora. Vamos aprender passo a passo. O importante é entender que o PowerShell trata dados como **informações organizadas**, não como "linhas de texto jogadas na tela".

---

## 🎯 O que você vai conseguir fazer ao final deste curso?

Aqui estão exemplos reais do que você vai aprender:

- ✅ **Navegar pelo computador** sem usar o mouse
- ✅ **Organizar arquivos** automaticamente (por tipo, data, tamanho)
- ✅ **Limpar seu PC** removendo arquivos temporários e cache
- ✅ **Criar scripts** que fazem tarefas repetitivas sozinhos
- ✅ **Monitorar seu sistema** (uso de CPU, memória, disco)
- ✅ **Automatizar instalação** de programas
- ✅ **Consumir APIs** da internet
- ✅ **Gerenciar serviços** do Windows

---

## 📝 Resumo da Lição

- O **terminal** é uma forma de controlar o computador por texto
- O **PowerShell** é o terminal moderno da Microsoft
- Ele é uma **linguagem completa**, não apenas um prompt de comandos
- Ele trabalha com **objetos**, não texto — isso muda tudo
- Funciona no **Windows, Linux e Mac**
- É a ferramenta #1 para **automação** no ecossistema Windows
`,
    codeExamples: [
      {
        title: 'Seu primeiro contato — não precisa executar ainda!',
        language: 'powershell',
        code: '# Isso mostra a data e hora atual\nGet-Date\n\n# Isso mostra os processos rodando no seu PC\nGet-Process | Select-Object -First 5 Name, CPU',
        output: 'domingo, 4 de maio de 2025 19:00:00\n\nName             CPU\n----             ---\nchrome           125.4\nexplorer          12.1\nCode              98.7\nSpotify           45.2\nDiscord           23.8',
        explanation: 'Esses são dois comandos simples. O Get-Date retorna a data atual. O Get-Process lista programas rodando. Não se preocupe com a sintaxe agora!'
      }
    ]
  },
  exercises: [
    {
      id: 'ps-01-01-q1',
      type: 'multiple_choice',
      question: 'O que é um terminal (shell)?',
      options: [
        'Um tipo de vírus de computador',
        'Uma forma de controlar o computador digitando comandos em texto',
        'Um programa para editar fotos',
        'O mesmo que o botão Iniciar do Windows'
      ],
      correctAnswer: 1,
      explanation: 'O terminal é uma interface de texto onde você digita comandos para o computador executar. É uma alternativa à interface gráfica (clicar com mouse).'
    },
    {
      id: 'ps-01-01-q2',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre o CMD e o PowerShell?',
      options: [
        'O CMD é mais moderno que o PowerShell',
        'O PowerShell só funciona no Linux',
        'O PowerShell trabalha com objetos, enquanto o CMD trabalha com texto puro',
        'Não há diferença, são o mesmo programa'
      ],
      correctAnswer: 2,
      explanation: 'Essa é a diferença fundamental! O CMD retorna texto puro, enquanto o PowerShell retorna objetos — dados estruturados que podem ser filtrados e manipulados facilmente.'
    },
    {
      id: 'ps-01-01-q3',
      type: 'multiple_choice',
      question: 'Em quais sistemas operacionais o PowerShell 7 funciona?',
      options: [
        'Apenas Windows',
        'Windows e Linux, mas não Mac',
        'Apenas Linux',
        'Windows, Linux e macOS'
      ],
      correctAnswer: 3,
      explanation: 'Desde 2016, o PowerShell é código aberto e multiplataforma. A versão 7+ funciona no Windows, Linux e macOS.'
    }
  ]
};
