import { Lesson } from '../../../../types/academy';

export const lesson0701: Lesson = {
  id: 'ps-07-01',
  title: 'O Poder de Criar Suas Próprias Funções',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Uma função é como uma "receita de bolo" que você escreve uma vez e pode pedir pro PowerShell fazer quantas vezes quiser.',
    'A boa prática dita que você deve batizar suas funções com o mesmo padrão do PowerShell: Verbo-Substantivo (ex: Somar-Numeros).'
  ],
  content: {
    markdown: `
# 🛠️ Por que criar funções?

Se você tem um bloco de código que precisa rodar várias vezes em partes diferentes do seu script, copiar e colar esse código repetidamente é uma péssima ideia (dá trabalho e se você precisar mudar algo depois, terá que mudar em dezenas de lugares).

A solução elegante é empacotar esse código em uma **Função** (Function) e dar um nome a ela. A partir daí, basta chamar esse nome para o código todo rodar!

---

## 📝 A Estrutura Básica

Para criar uma função, usamos a palavra-chave **\`function\`**, seguida do nome que queremos dar, e abrimos chaves \`{}\` para colocar o código dentro.

\`\`\`powershell
function Mostrar-BoasVindas {
    Write-Host "Olá! Seja bem-vindo ao sistema."
    Write-Host "Data de hoje:"
    Get-Date
}
\`\`\`

> 💡 **Nota:** Ao rodar apenas esse bloco de código acima, **nada vai aparecer na tela**. Você apenas "ensinou" o PowerShell o que significa \`Mostrar-BoasVindas\`. Ele guardou isso na memória.

---

## 🚀 Chamando (Executando) a Função

Depois de criada, sua função age exatamente como qualquer outro comando nativo do PowerShell! Para rodá-la, basta digitar o nome dela:

\`\`\`powershell
# Chamando a função para trabalhar:
Mostrar-BoasVindas
\`\`\`

*(A saída será o texto de boas-vindas e a data atual).*

Você pode chamá-la quantas vezes quiser:
\`\`\`powershell
Mostrar-BoasVindas
Write-Host "Aguardando 5 segundos..."
Start-Sleep -Seconds 5
Mostrar-BoasVindas
\`\`\`

---

## 📝 Resumo Rápido

- Funções evitam a repetição de código ("Don't Repeat Yourself - DRY").
- Você define uma função usando: \`function Nome-DaFuncao { ... }\`.
- Definir uma função não a executa; apenas a salva na memória.
- Para rodar a função, você digita o nome dela no terminal, igualzinho a um cmdlet do PowerShell.
`
  },
  exercises: [
    {
      id: 'ps-07-01-q1',
      type: 'multiple_choice',
      question: 'O que acontece examente no momento em que você digita e confirma o bloco "function Limpar-Tudo { Clear-Host }" no PowerShell?',
      options: [
        'A tela é limpa imediatamente',
        'O PowerShell salva a instrução na memória, criando o comando "Limpar-Tudo" para ser usado depois. Mas a tela não é limpa agora.',
        'Ele dá erro, pois Clear-Host não pode ficar dentro de funções',
        'A tela fica travada esperando você chamar a função'
      ],
      correctAnswer: 1,
      explanation: 'Criar (declarar) uma função é apenas "ensinar" o PowerShell. O código dentro dela só roda quando você explicitamente "chama" (digita) o nome da função depois.'
    },
    {
      id: 'ps-07-01-q2',
      type: 'multiple_choice',
      question: 'Qual é a convenção de nomes recomendada pela Microsoft para criar suas próprias funções no PowerShell?',
      options: [
        'Tudo em minúsculo (ex: limpartudo)',
        'Sempre começar com a palavra "My" (ex: MyClearTool)',
        'Seguir o padrão nativo de Verbo-Substantivo (ex: Clear-Tool, Get-MyData)',
        'Usar underline (_) separando palavras (ex: clear_tool)'
      ],
      correctAnswer: 2,
      explanation: 'Apesar de o PowerShell aceitar qualquer nome (até `function batata {}`), a convenção oficial e profissional é sempre usar "Verbo-Substantivo" (Action-Target) para manter a padronização.'
    }
  ]
};
