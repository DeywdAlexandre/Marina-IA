import { Lesson } from '../../../../types/academy';

export const lesson0702: Lesson = {
  id: 'ps-07-02',
  title: 'Deixando Dinâmico: Parâmetros e Retornos',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Funções que não recebem parâmetros fazem sempre exatamente a mesma coisa. Parâmetros dão inteligência a elas.',
    'A palavra "return" é a forma elegante de uma função "devolver" uma resposta matemática ou objeto sem poluir a tela do usuário.'
  ],
  content: {
    markdown: `
# 📥 Parâmetros (Entrada de Dados)

Na lição anterior, nossa função sempre dava bom dia da mesma forma. E se eu quiser que ela diga "Bom dia, [Nome-da-Pessoa]"? 

Nós precisamos criar "buracos" na função para receber essa informação de fora. Chamamos esses buracos de **Parâmetros**. A forma mais robusta e nativa do PowerShell de fazer isso é usar o bloco **\`param()\`** logo no início da função.

\`\`\`powershell
function Mostrar-BoasVindas {
    param(
        $Nome,
        $Idade
    )

    Write-Host "Olá $Nome! Você tem $Idade anos."
}
\`\`\`

### Como chamar uma função com parâmetros?

Assim como você usa \`-Path\` com o \`Get-ChildItem\`, agora a **sua** função também tem parâmetros nomeados!

\`\`\`powershell
Mostrar-BoasVindas -Nome "Marina" -Idade 25
\`\`\`

---

## 🔒 Tipagem e Valores Padrão

Para evitar bugs (tipo alguém passar "banana" para a idade), você pode (e deve) forçar os **Tipos** de dados (aprendidos no Módulo 5) nos seus parâmetros! E você também pode definir um valor padrão caso a pessoa esqueça de passar algo.

\`\`\`powershell
function Mostrar-BoasVindas {
    param(
        [string]$Nome = "Visitante",
        [int]$Idade = 0
    )

    Write-Host "Olá $Nome, idade: $Idade"
}

# Se eu não passar o -Nome, ele usará "Visitante"
Mostrar-BoasVindas -Idade 30
\`\`\`

---

## 📤 Retorno de Dados (Saída)

O comando \`Write-Host\` escreve na tela. O problema é que o que vai para a tela, morre na tela. Você não consegue salvar o resultado de um \`Write-Host\` dentro de uma variável para usar depois.

Se você quer que a sua função seja uma "calculadora" que processa algo e **devolve** a resposta real para o script, você deve usar o **\`return\`**.

\`\`\`powershell
function Somar-Numeros {
    param([int]$A, [int]$B)
    
    $resultado = $A + $B
    
    # A palavra 'return' cospe o valor para fora e encerra a função
    return $resultado 
}

# Agora sim! Podemos salvar o resultado na variável!
$minhaConta = Somar-Numeros -A 10 -B 5

Write-Host "O resultado salvo foi: $minhaConta"
\`\`\`

> 💡 **Nota do PowerShell:** O PowerShell é tão focado no pipeline que **qualquer** dado solto (sem ser capturado por uma variável) cai no fluxo de saída. Portanto, o \`return\` é opcional (apenas soltar \`$resultado\` na linha já funcionaria), mas usar o \`return\` é uma prática de ouro para legibilidade e para parar a função imediatamente.

---

## 📝 Resumo Rápido

- **\`param()\`**: Bloco no topo da função que define as variáveis de entrada.
- Defina tipos (\`[string]\`, \`[int]\`) para blindar sua função contra erros.
- Defina valores com \`=\` para ter respostas padrão (fallback).
- Use **\`return\`** para enviar a resposta útil para fora da função em vez de apenas imprimir na tela com \`Write-Host\`.
`
  },
  exercises: [
    {
      id: 'ps-07-02-q1',
      type: 'multiple_choice',
      question: 'Qual a forma correta e recomendada de definir um parâmetro que só aceite números (inteiros) no bloco param()?',
      options: [
        '$Idade = int',
        'param([int]$Idade)',
        'param($Idade.Int)',
        'integer $Idade'
      ],
      correctAnswer: 1,
      explanation: 'O PowerShell usa colchetes [ ] antes do nome da variável para fazer a tipagem estrita (cast). Ex: [string]$Nome, [int]$Idade.'
    },
    {
      id: 'ps-07-02-q2',
      type: 'multiple_choice',
      question: 'Por que usar "return $resultado" é melhor do que "Write-Host $resultado" em uma função de cálculo?',
      options: [
        'Porque o Write-Host não consegue imprimir números, só texto.',
        'Porque o return é mais rápido e gasta menos memória.',
        'Porque o Write-Host só "pinta" a tela (display visual), enquanto o return devolve o Objeto real que pode ser salvo em uma variável ou enviado para o pipeline.',
        'Na verdade o Write-Host é muito melhor para cálculos.'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! Write-Host é "tinta no monitor". O return envia o dado bruto de volta para o sistema usar em contas, salvar em banco de dados, arquivos, etc.'
    }
  ]
};
