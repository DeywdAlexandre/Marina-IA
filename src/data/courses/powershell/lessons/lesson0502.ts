import { Lesson } from '../../../../types/academy';

export const lesson0502: Lesson = {
  id: 'ps-05-02',
  title: 'Tipos de Dados: Texto, Número e Lógica',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O PowerShell é dinâmico: ele tenta adivinhar o tipo do dado sozinho se você não disser.',
    'Saber o tipo de dado é crucial porque você não pode "somar" uma palavra com um número facilmente.'
  ],
  content: {
    markdown: `
# 🧬 Tudo tem um Tipo

No PowerShell, quando você guarda algo em uma variável, essa informação tem um "Tipo" (Type). Os tipos mais comuns no dia a dia são:

- **String**: Textos e palavras
- **Int** (Integer): Números inteiros
- **Bool** (Boolean): Verdadeiro ou Falso

Você pode perguntar ao PowerShell qual é o tipo de uma variável usando o método \`.GetType()\`:

\`\`\`powershell
$nome = "Marina"
$nome.GetType() # Vai mostrar que é String
\`\`\`

---

## 🔤 Strings (Textos)

Strings são cadeias de caracteres (textos). Elas **devem** vir entre aspas.

**Aspas Duplas (\`"\`) vs Aspas Simples (\`'\`)**
Isso é uma pegadinha clássica!
- **Aspas Simples (\`'\`)**: O PowerShell lê **exatamente** o que está escrito (texto literal).
- **Aspas Duplas (\`"\`)**: O PowerShell lê o texto, mas se achar uma variável lá dentro (\`$\`), ele a substitui pelo valor dela.

\`\`\`powershell
$nome = "Marina"

Write-Host 'Meu nome é $nome'
# Saída: Meu nome é $nome

Write-Host "Meu nome é $nome"
# Saída: Meu nome é Marina
\`\`\`

---

## 🔢 Números (Int, Double)

Números não usam aspas. 

- **Int32 / Int64**: Números inteiros (ex: \`42\`, \`-10\`)
- **Double**: Números com casas decimais. (Atenção: no PowerShell, o separador decimal é o **ponto** \`.\` e não a vírgula).

\`\`\`powershell
$idade = 30
$preco = 19.99

# O PowerShell sabe fazer matemática
$total = $preco * 2
\`\`\`

---

## ✅ Booleanos (Verdadeiro ou Falso)

Booleanos são usados para criar lógica. Eles só têm dois valores possíveis: Verdadeiro (True) ou Falso (False).

No PowerShell, como o símbolo \`$\` é especial, os booleanos verdadeiros e falsos são representados por variáveis automáticas exclusivas:
- **\`$true\`** (Verdadeiro)
- **\`$false\`** (Falso)

\`\`\`powershell
$usuarioEstaLogado = $true
$temErro = $false
\`\`\`

Isso será MUITO usado no próximo módulo quando formos criar os famosos "If/Else" (Se/Senão).

---

## 📝 Resumo Rápido

- **String**: Texto. Use \`"\` para expandir variáveis e \`'\` para texto literal.
- **Int**: Números inteiros, sem aspas.
- **Double**: Decimais, separados por ponto (\`.\`).
- **Boolean**: Lógica. Sempre use \`$true\` ou \`$false\`.
- **.GetType()**: Descobre o tipo de qualquer variável.
`
  },
  exercises: [
    {
      id: 'ps-05-02-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre usar aspas simples (\'\') e aspas duplas ("") no PowerShell?',
      options: [
        'Não há diferença, é apenas questão de preferência visual.',
        'Aspas simples são para números e aspas duplas para textos.',
        'Aspas duplas substituem variáveis pelo seu valor dentro do texto, aspas simples tratam tudo como texto literal.',
        'Aspas duplas dão erro se você colocar uma variável dentro.'
      ],
      correctAnswer: 2,
      explanation: 'Essa é a regra de ouro das Strings no PS: "Expande variáveis" vs \'Texto Literal Literal\'.'
    },
    {
      id: 'ps-05-02-q2',
      type: 'multiple_choice',
      question: 'Como você define uma variável chamada "sucesso" com o valor Verdadeiro?',
      options: [
        '$sucesso = true',
        '$sucesso = "Verdadeiro"',
        '$sucesso = $true',
        'sucesso = True'
      ],
      correctAnswer: 2,
      explanation: 'Booleanos nativos no PowerShell sempre precisam do cifrão: $true e $false.'
    }
  ]
};
