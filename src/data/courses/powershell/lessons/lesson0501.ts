import { Lesson } from '../../../../types/academy';

export const lesson0501: Lesson = {
  id: 'ps-05-01',
  title: 'Variáveis: Guardando Informações',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Toda variável no PowerShell começa obrigatoriamente com o cifrão ($).',
    'Diferente do Linux, onde $ é só para LER a variável, no PowerShell o $ faz parte do nome dela (tanto para criar quanto para ler).'
  ],
  content: {
    markdown: `
# 📦 O que é uma Variável?

Imagine uma variável como uma **caixa com uma etiqueta**. Você guarda uma informação dentro da caixa para poder usar (ou alterar) depois, sem precisar memorizar ou digitar a informação de novo.

No PowerShell, **toda variável começa com o símbolo \`$\`**.

### Criando sua primeira variável

Para guardar uma informação, basta inventar um nome com \`$\` e usar o sinal de igual (\`=\`):

\`\`\`powershell
$nome = "Marina"
$idade = 25
\`\`\`

> 💡 **Nota:** Se for um texto (letras, palavras), você **precisa** colocar entre aspas (duplas \`"\` ou simples \`'\`). Se for número, não precisa.

---

## 👀 Vendo o que está dentro da caixa

Para ver o que você guardou na variável, basta digitar o nome dela no terminal e apertar Enter:

\`\`\`powershell
$nome
\`\`\`
*(A saída será: Marina)*

Você também pode usar a variável no meio de outros comandos ou frases:

\`\`\`powershell
Write-Host "Olá, meu nome é $nome e eu tenho $idade anos."
\`\`\`

---

## ♻️ Alterando e Fazendo Contas

As variáveis se chamam "variáveis" justamente porque podem **variar** (mudar de valor)!

\`\`\`powershell
# Primeiro a idade é 25
$idade = 25

# Chegou o aniversário!
$idade = 26

# Fazendo contas diretamente com a variável:
$idadeNoFuturo = $idade + 10
$idadeNoFuturo
\`\`\`
*(A saída será 36)*

---

## 🔒 Variáveis Automáticas (Reservadas)

O PowerShell já vem com algumas variáveis prontas que ele mesmo atualiza. Você não deve tentar mudar o valor delas.

Algumas das mais famosas:
- \`$PSVersionTable\` → Detalhes sobre a versão do PowerShell
- \`$HOME\` → O caminho da sua pasta de usuário (ex: C:\\Users\\Aluno)
- \`$PWD\` → Present Working Directory (Pasta atual, igual ao \`Get-Location\`)
- \`$_\` (ou \`$PSItem\`) → O item atual passando pelo pipeline (vimos no Módulo 3!)

\`\`\`powershell
# Exemplo usando variável automática
Get-ChildItem $HOME
\`\`\`

---

## 📝 Resumo Rápido

- Criar variável: \`$nomeDaVariavel = Valor\`
- Ler variável: Apenas chame \`$nomeDaVariavel\`
- Textos usam aspas (\`"Olá"\`), números não (\`42\`).
- Variáveis automáticas (como \`$HOME\`) já vêm prontas para usar.
`
  },
  exercises: [
    {
      id: 'ps-05-01-q1',
      type: 'multiple_choice',
      question: 'Como você deve criar corretamente uma variável para guardar o nome da sua cidade?',
      options: [
        'cidade = "São Paulo"',
        '$cidade = "São Paulo"',
        'var cidade = São Paulo',
        'set $cidade = "São Paulo"'
      ],
      correctAnswer: 1,
      explanation: 'No PowerShell, toda variável precisa do prefixo $ (cifrão). Textos precisam estar entre aspas.'
    },
    {
      id: 'ps-05-01-q2',
      type: 'multiple_choice',
      question: 'O que vai aparecer na tela se você rodar o comando: Write-Host "Eu moro em $HOME" ?',
      options: [
        'Eu moro em $HOME',
        'Eu moro em casa',
        'Eu moro em (caminho da sua pasta de usuário, ex: C:\\Users\\SeuNome)',
        'Vai dar erro de permissão'
      ],
      correctAnswer: 2,
      explanation: '$HOME é uma variável automática do PowerShell que sempre contém o caminho do diretório do usuário logado.'
    }
  ]
};
