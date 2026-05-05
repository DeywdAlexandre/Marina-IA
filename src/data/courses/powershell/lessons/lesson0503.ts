import { Lesson } from '../../../../types/academy';

export const lesson0503: Lesson = {
  id: 'ps-05-03',
  title: 'Arrays e HashTables (Listas e Dicionários)',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'Arrays são como listas de supermercado. HashTables são como uma agenda de contatos (nome = telefone).',
    'A indexação de arrays no PowerShell, assim como em quase toda linguagem de programação, começa no número ZERO.'
  ],
  content: {
    markdown: `
# 📚 Arrays (Listas)

E se você precisar guardar VÁRIAS informações na mesma variável? Você usa um **Array** (uma lista).

Para criar um array, basta separar os itens por vírgula. Opcionalmente (mas recomendado), você pode envolver os itens com \`@(...)\`.

\`\`\`powershell
$frutas = @("Maçã", "Banana", "Laranja", "Uva")
\`\`\`

### Acessando itens da lista

No PowerShell, as listas começam a contar do **ZERO**.
Para pegar um item específico, use colchetes \`[]\` com o número da posição (chamado de *índice*).

\`\`\`powershell
$frutas[0] # Retorna "Maçã"
$frutas[2] # Retorna "Laranja"
\`\`\`

**O truque do -1:**
Quer pegar o ÚLTIMO item da lista mas não sabe o tamanho dela? O PowerShell tem um truque genial: use índices negativos!
\`\`\`powershell
$frutas[-1] # Retorna "Uva" (o último)
$frutas[-2] # Retorna "Laranja" (o penúltimo)
\`\`\`

---

## 🗂️ HashTables (Dicionários)

Arrays são ótimos para listas simples. Mas e se você tiver dados estruturados, onde cada informação tem um **Nome** e um **Valor**? Aí entra a **HashTable**.

Para criar uma HashTable, usamos o símbolo de arroba e chaves: \`@{ Chave = Valor; Chave2 = Valor2 }\`.

\`\`\`powershell
$usuario = @{
    Nome = "Marina"
    Idade = 25
    Departamento = "TI"
}
\`\`\`

### Acessando valores da HashTable

Diferente do Array onde você usa números (0, 1, 2), na HashTable você busca a informação pelo **Nome da Chave**. Você pode usar colchetes ou o ponto (\`.\`).

\`\`\`powershell
# Usando colchetes
$usuario["Departamento"]  # Retorna "TI"

# Usando a notação de ponto (mais elegante!)
$usuario.Nome            # Retorna "Marina"
\`\`\`

---

## ➕ Adicionando coisas

**No Array:**
\`\`\`powershell
$frutas += "Morango" # Adiciona Morango no final da lista
\`\`\`

**Na HashTable:**
\`\`\`powershell
$usuario.Permissao = "Admin" # Cria uma nova chave chamada Permissao
\`\`\`

---

## 📝 Resumo Rápido

- **Array \`@()\`**: Uma lista sequencial.
- O primeiro item do Array é sempre o \`[0]\`.
- O último item do Array é sempre o \`[-1]\`.
- **HashTable \`@{...}\`**: Um dicionário de chaves e valores.
- Acessamos valores na HashTable pelo nome: \`$variavel.Chave\`.
`
  },
  exercises: [
    {
      id: 'ps-05-03-q1',
      type: 'multiple_choice',
      question: 'Dado o array: $servidores = @("SRV-01", "SRV-02", "SRV-03", "SRV-04"). Como acessar o servidor "SRV-03"?',
      options: [
        '$servidores[3]',
        '$servidores[2]',
        '$servidores["SRV-03"]',
        '$servidores[-3]'
      ],
      correctAnswer: 1,
      explanation: 'A contagem começa em zero. SRV-01 é [0], SRV-02 é [1], e SRV-03 é [2].'
    },
    {
      id: 'ps-05-03-q2',
      type: 'multiple_choice',
      question: 'Qual é a sintaxe correta para criar uma HashTable (dicionário)?',
      options: [
        '@(Nome="João", Idade=30)',
        '@{Nome="João"; Idade=30}',
        '[Nome="João", Idade=30]',
        '${Nome: "João", Idade: 30}'
      ],
      correctAnswer: 1,
      explanation: 'HashTables usam @{ } (arroba e chaves) com pares Chave=Valor separados por ponto e vírgula (;).'
    }
  ]
};
