import { Lesson } from '../../../../types/academy';

export const lesson0603: Lesson = {
  id: 'ps-06-03',
  title: 'While e Do-Until: Condições Contínuas',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O Foreach serve para listas. O While e Do-Until servem para eventos: "continue fazendo até que algo mude".',
    'Cuidado com os "Loops Infinitos"! Se a sua condição nunca mudar para falsa, o computador ficará preso repetindo o código para sempre.'
  ],
  content: {
    markdown: `
# ⏳ O Loop While (Enquanto)

O **\`while\`** funciona literalmente como a palavra traduzida: **Enquanto**.

A estrutura é: **Enquanto (condição for verdadeira) { repita esse bloco }**. Ele testa a condição ANTES de executar o bloco.

Isso é muito útil quando você não tem uma lista definida (como no Foreach), mas está esperando que algo aconteça (como aguardar um serviço iniciar, ou repetir até o usuário digitar o que foi pedido).

\`\`\`powershell
$contador = 1

while ($contador -le 3) {
    Write-Host "Contagem: $contador"
    # IMPORTANTE: precisamos aumentar o contador, 
    # senão ele será 1 para sempre (loop infinito!)
    $contador = $contador + 1
}
Write-Host "Fim da contagem!"
\`\`\`
*(O código imprimirá 1, 2, 3 e sairá do loop quando o contador virar 4, pois 4 não é menor ou igual a 3).*

---

## 🔁 Do-Until (Faça-Até)

Ocasionalmente, você quer o oposto: você quer que o script **execute o código primeiro**, e só depois verifique se deve repetir. 

Além disso, a semântica de "Until" (Até) significa que ele repete enquanto a condição for FALSA, e **para quando se tornar verdadeira** (Faça isso ATÉ QUE a condição seja atendida).

\`\`\`powershell
$numeroDaSorte = 0
$tentativas = 0

do {
    $tentativas = $tentativas + 1
    # Gera um número aleatório de 1 a 10
    $numeroDaSorte = Get-Random -Minimum 1 -Maximum 11
    
    Write-Host "Tentativa $tentativas: Saiu o número $numeroDaSorte"

} until ($numeroDaSorte -eq 7)

Write-Host "Finalmente saiu o 7!"
\`\`\`

**A grande diferença:** No bloco \`do { ... } until()\`, o código dentro das chaves **sempre executará pelo menos uma vez**, porque o teste (until) só acontece no final.

---

## 🚧 Quebrando o ciclo (Break e Continue)

Às vezes, mesmo dentro de um loop, você quer fugir dele antecipadamente com base numa condição de emergência.

- **\`break\`**: Aborta o loop inteiro imediatamente. Chuta a porta e vai embora.
- **\`continue\`**: Pula o resto do código da rodada atual e vai direto para a próxima repetição.

\`\`\`powershell
foreach ($numero in 1..10) {
    if ($numero -eq 5) {
        Write-Host "Encontrei o 5, parando tudo!"
        break
    }
    Write-Host $numero
}
# A saída será 1, 2, 3, 4, e depois sai do loop.
\`\`\`

---

## 📝 Resumo Rápido

- **while**: Testa a condição no topo. Repete **enquanto** for \`$true\`. Pode rodar 0 vezes.
- **do-until**: Testa a condição no fundo. Executa pelo menos uma vez. Repete **até que** vire \`$true\`.
- Risco de Loop Infinito: Sempre se certifique de que a variável da condição será alterada dentro do loop!
- **break**: Destrói o loop e sai dele.
- **continue**: Pula para a próxima repetição sem terminar a atual.
`
  },
  exercises: [
    {
      id: 'ps-06-03-q1',
      type: 'multiple_choice',
      question: 'Qual é a principal característica que diferencia um bloco "do-until" de um "while"?',
      options: [
        'O do-until é mais rápido no processador',
        'O do-until obrigatoriamente executa o bloco de código pelo menos uma vez antes de testar a condição',
        'O do-until não pode usar operadores matemáticos',
        'O while só roda infinitamente'
      ],
      correctAnswer: 1,
      explanation: 'Como o "do" vem primeiro e o "until" fica no final do fechamento das chaves, o PowerShell é obrigado a executar o código inteiro antes de saber se deve parar.'
    },
    {
      id: 'ps-06-03-q2',
      type: 'multiple_choice',
      question: 'O que o comando "break" faz quando encontrado dentro de um loop?',
      options: [
        'Pausa o script por 5 segundos',
        'Interrompe a repetição atual e continua a próxima rodada do loop',
        'Gera um log de erro do sistema',
        'Encerra completamente o loop e pula para o código que vem depois dele'
      ],
      correctAnswer: 3,
      explanation: 'Break (quebrar) sai do loop totalmente. O que pula apenas a repetição atual para ir para a próxima é o comando "continue".'
    }
  ]
};
