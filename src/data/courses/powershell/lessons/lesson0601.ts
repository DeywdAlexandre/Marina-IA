import { Lesson } from '../../../../types/academy';

export const lesson0601: Lesson = {
  id: 'ps-06-01',
  title: 'If/Else: Ensinando o Computador a Tomar Decisões',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'No PowerShell, os operadores de comparação usam letras minúsculas com um traço na frente (ex: -eq, -gt, -lt) em vez dos clássicos símbolos (==, >, <).',
    'Chaves {} definem o bloco de código que vai rodar se a condição for atendida.'
  ],
  content: {
    markdown: `
# 🚦 O que é Controle de Fluxo?

Até agora, nossos scripts eram lidos e executados de cima para baixo, linha por linha, sem exceção. 

O **Controle de Fluxo** permite que o script seja "inteligente" e pule linhas ou escolha caminhos diferentes dependendo da situação. A ferramenta mais básica e poderosa para isso é o bloco **If / Else** (Se / Senão).

---

## ⚖️ Operadores de Comparação

Antes de tomar decisões, precisamos saber comparar coisas. No PowerShell, você **não** usa sinais de \`>\` ou \`=\` para comparar. Usamos os operadores nativos (abreviações do inglês):

| Operador | Significado | Inglês | Exemplo |
|----------|-------------|--------|---------|
| \`-eq\` | Igual a | Equals | \`$idade -eq 18\` |
| \`-ne\` | Diferente de | Not Equals | \`$nome -ne "Admin"\` |
| \`-gt\` | Maior que | Greater Than | \`$pontos -gt 50\` |
| \`-lt\` | Menor que | Less Than | \`$saldo -lt 0\` |
| \`-ge\` | Maior ou Igual | Greater/Equal | \`$idade -ge 18\` |
| \`-le\` | Menor ou Igual | Less/Equal | \`$tentativas -le 3\` |

---

## 🤔 A Estrutura If (Se)

A estrutura é simples: **Se** (a condição em parênteses for verdadeira) **{** faça o que está dentro das chaves **}**.

\`\`\`powershell
$idade = 20

if ($idade -ge 18) {
    Write-Host "Você é maior de idade. Pode entrar!"
}
\`\`\`
*(Como 20 é maior ou igual a 18, a mensagem será impressa na tela).*

---

## 🔄 Else (Senão) e ElseIf (Senão Se)

E se a condição não for verdadeira? Usamos o **Else**. Ele é o plano B.

\`\`\`powershell
$idade = 15

if ($idade -ge 18) {
    Write-Host "Pode entrar!"
} else {
    Write-Host "Acesso negado. Volte quando for mais velho."
}
\`\`\`

Para múltiplas condições, podemos encadear verificações usando o **ElseIf**:

\`\`\`powershell
$sinal = "Amarelo"

if ($sinal -eq "Verde") {
    Write-Host "Acelere!"
} elseif ($sinal -eq "Amarelo") {
    Write-Host "Atenção, reduza a velocidade."
} else {
    Write-Host "Pare o carro!"
}
\`\`\`

---

## 📝 Resumo Rápido

- O PowerShell lê a condição dentro dos parênteses \`()\`.
- O código a ser executado fica dentro das chaves \`{}\`.
- **if**: "Se isso for verdade, faça isso."
- **elseif**: "Se o primeiro falhou, mas isso for verdade, faça isso."
- **else**: "Se tudo falhar, faça isso como última opção."
- Esqueça o sinal de igual duplo \`==\`! Use **\`-eq\`**.
`
  },
  exercises: [
    {
      id: 'ps-06-01-q1',
      type: 'multiple_choice',
      question: 'Qual é a forma correta de verificar se uma variável $tentativas é menor que 5 no PowerShell?',
      options: [
        'if ($tentativas < 5)',
        'if ($tentativas -lt 5)',
        'if ($tentativas -less 5)',
        'if ($tentativas -le 5)'
      ],
      correctAnswer: 1,
      explanation: 'O operador correto para "Less Than" (Menor que) é o -lt. O -le seria "Menor ou igual". E o sinal de < não serve para comparar números no PowerShell, ele serve para importar arquivos!'
    },
    {
      id: 'ps-06-01-q2',
      type: 'multiple_choice',
      question: 'O bloco de código que acompanha o ELSE executa em qual situação?',
      options: [
        'Sempre, não importa o que aconteça',
        'Apenas se houver um erro no script',
        'Somente quando todas as condições do IF e do(s) ELSEIF falharem (forem $false)',
        'Somente se a variável for zero'
      ],
      correctAnswer: 2,
      explanation: 'O Else é o caminho "default" ou o "Plano B final". Ele só entra em ação quando o computador testa e rejeita todas as hipóteses anteriores.'
    }
  ]
};
