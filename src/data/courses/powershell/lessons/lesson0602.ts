import { Lesson } from '../../../../types/academy';

export const lesson0602: Lesson = {
  id: 'ps-06-02',
  title: 'Foreach: Repetição Inteligente',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Computadores são bons em fazer coisas repetitivas muito rápido e sem errar. Os loops (laços) são a forma de pedir para eles fazerem isso.',
    'O "Foreach" (Para cada) é o loop mais usado em administração de sistemas, perfeito para percorrer listas.'
  ],
  content: {
    markdown: `
# 🔁 Loops (Laços de Repetição)

Se você tem uma lista com 100 servidores e precisa reiniciar cada um deles, você não vai escrever 100 linhas de código iguais, certo? 

A solução mágica é o **Loop**. Ele permite executar o mesmo bloco de código várias vezes seguidas. 

A estrela do PowerShell é o **\`foreach\`** ("para cada", em inglês).

---

## 🏃 O Loop Foreach

O \`foreach\` pega uma lista (um Array) e diz: "Para cada item desta lista, faça a seguinte ação".

A sintaxe parece com uma frase em inglês: \`foreach ($item in $lista) { ... }\`

\`\`\`powershell
$frutas = @("Maçã", "Banana", "Laranja")

# A variável temporária $f vai representar uma fruta de cada vez
foreach ($f in $frutas) {
    Write-Host "Eu gosto de comer $f"
}
\`\`\`

**Como o computador pensa:**
1. Ele olha a lista \`$frutas\`. O primeiro item é "Maçã".
2. Ele cria a variável \`$f\` e coloca "Maçã" nela.
3. Roda o código: Imprime "Eu gosto de comer Maçã".
4. Volta pro topo. O próximo é "Banana". Ele põe "Banana" no \`$f\`.
5. Roda de novo... e repete até a lista acabar.

---

## 🚀 Foreach na Prática de TI

Onde isso brilha de verdade? Ao lidar com comandos reais que retornam listas (objetos)!

\`\`\`powershell
# Pega todos os arquivos da pasta que terminam em .log
$arquivosDeLog = Get-ChildItem -Path "C:\\Logs\\" -Filter "*.log"

foreach ($arquivo in $arquivosDeLog) {
    # Para cada arquivo, copiamos ele para a pasta de Backup
    Copy-Item -Path $arquivo.FullName -Destination "C:\\Backup"
    Write-Host "Copiado: $($arquivo.Name)"
}
\`\`\`

> 💡 **Nota:** O \`foreach\` é absurdamente poderoso porque ele entende os "Objetos" ricos do PowerShell, então você pode extrair as propriedades exatas que precisa em cada passada do loop.

---

## 🚰 Foreach-Object (O Loop do Pipeline)

No Módulo 3, aprendemos o Pipeline (\`|\`). Você também pode fazer loops lá mesmo no terminal usando o **\`Foreach-Object\`** (ou seu atalho **\`%\`**).

Nesse caso, usamos a famosa variável automática \`$_\` para representar o item atual.

\`\`\`powershell
# Pega a lista, joga no pipe, e para cada objeto, faz a ação.
Get-Process | Foreach-Object { Write-Host "Nome: $_.Name" }

# Atalho ninja (exatamente a mesma coisa):
Get-Process | % { Write-Host "Nome: $_.Name" }
\`\`\`

---

## 📝 Resumo Rápido

- **Loops** servem para evitar repetição de código manual.
- **foreach ($x in $lista)**: "Para cada item (chamado de x) dentro da lista, rode o bloco {}".
- **A variável temporária ($x)** ganha um novo valor a cada rodada do loop.
- **Foreach-Object (ou %)**: A versão do foreach projetada para trabalhar direto na "linha de montagem" do Pipeline.
`
  },
  exercises: [
    {
      id: 'ps-06-02-q1',
      type: 'multiple_choice',
      question: 'Dada a estrutura `foreach ($usuario in $listaDeUsuarios) { ... }`, o que a variável $usuario representa?',
      options: [
        'É o nome de uma função',
        'Representa a lista inteira de usuários o tempo todo',
        'É uma variável temporária que contém um único usuário de cada vez, atualizando a cada ciclo do loop',
        'Causa um erro, pois deveríamos usar $PSItem'
      ],
      correctAnswer: 2,
      explanation: 'No foreach tradicional, você declara livremente o nome da variável temporária (nesse caso, $usuario). Ela vai segurar um pedaço diferente da lista a cada iteração.'
    },
    {
      id: 'ps-06-02-q2',
      type: 'multiple_choice',
      question: 'Qual é a diferença entre o loop "foreach" clássico e o "Foreach-Object" do pipeline?',
      options: [
        'Nenhuma, são escritos exatamente da mesma forma',
        'O foreach-object não aceita comandos complexos',
        'O foreach clássico exige que a lista seja declarada entre parênteses "in", enquanto o Foreach-Object recebe os itens pelo pipe (|) e usa a variável $_',
        'O Foreach-Object só funciona no Linux'
      ],
      correctAnswer: 2,
      explanation: 'Essa é a distinção chave. O foreach clássico armazena tudo na memória e processa. O Foreach-Object processa os itens conforme eles chegam em fluxo contínuo pelo pipeline.'
    }
  ]
};
