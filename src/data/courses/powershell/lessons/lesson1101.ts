import { Lesson } from '../../../../types/academy';

export const lesson1101: Lesson = {
  id: 'ps-bonus-01',
  title: 'Caça aos Sugadores de Memória e CPU',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O PowerShell pode fazer o mesmo trabalho do "Gerenciador de Tarefas" (Ctrl+Shift+Esc), mas de forma automatizada e filtrada.',
    'Saber fechar um programa travado pelo terminal salva você de ter que reiniciar o computador.'
  ],
  content: {
    markdown: `
# 🕵️ Detectando o Problema

Seu computador está lento? A primeira regra da manutenção de computadores é não sair apagando coisas sem saber o que está causando a lentidão. 

O PowerShell tem um comando cirúrgico para investigar o que está acontecendo no seu processador e na sua memória RAM agora mesmo: o **\`Get-Process\`**.

---

## 📊 Listando os Programas Mais Pesados

Se você digitar apenas \`Get-Process\`, vai ver uma lista enorme e confusa. Vamos usar a mágica do Pipeline (\`|\`) e do \`Sort-Object\` (que vimos no Módulo 3) para criar um **Top 5 dos programas que mais consomem memória RAM**.

\`\`\`powershell
# Ordena por Memória (PM) de forma decrescente (Descending) e pega os 5 primeiros
Get-Process | Sort-Object -Property PM -Descending | Select-Object -First 5
\`\`\`

*(A coluna \`PM\` significa Paged Memory, que é uma boa métrica de RAM. Se quiser ver quem está sugando o Processador, troque \`PM\` por \`CPU\`)*.

---

## 🛑 Matando Processos Travados

Sabe quando um programa trava completamente (aquela tela branca de "Não Respondendo") e nem o "X" vermelho funciona?

Em vez de reiniciar a máquina, você pode ser um administrador raiz e "assassinar" o processo através do PowerShell usando o comando **\`Stop-Process\`**.

\`\`\`powershell
# Procurando o nome exato do processo:
Get-Process -Name "*chrome*"

# Fechando brutalmente o programa pelo Nome:
Stop-Process -Name "chrome" -Force
\`\`\`

> ⚠️ **Cuidado:** O parâmetro \`-Force\` não tem piedade. O programa vai fechar na hora e você perderá qualquer trabalho que não tenha sido salvo.

---

## 🕒 Quem iniciou hoje?

Às vezes, suspeitamos que algum programa estranho abriu sozinho enquanto não estávamos olhando. Como descobrir quando um programa iniciou?

\`\`\`powershell
# Lista os processos, mas exibe o nome e a hora exata de início!
Get-Process | Select-Object Name, StartTime | Sort-Object StartTime -Descending | Select-Object -First 10
\`\`\`
*(Alguns processos de sistema não vão mostrar a hora e darão um aviso vermelho, é normal. Apenas ignore-os ou adicione \`-ErrorAction SilentlyContinue\`)*.

---

## 📝 Resumo Rápido

- O diagnóstico sempre vem antes da ação.
- Use \`Get-Process | Sort-Object PM -Descending\` para achar quem está travando a memória RAM.
- Use \`Stop-Process -Name "Nome" -Force\` para matar programas congelados sem precisar reiniciar o PC.
`
  },
  exercises: [
    {
      id: 'ps-bonus-01-q1',
      type: 'multiple_choice',
      question: 'Seu Microsoft Word ("winword") travou completamente. Qual é a forma mais rápida de forçar o fechamento dele pelo PowerShell?',
      options: [
        'Close-Program -Name "winword"',
        'Stop-Process -Name "winword" -Force',
        'Remove-Item "winword"',
        'Get-Process -Kill "winword"'
      ],
      correctAnswer: 1,
      explanation: 'Stop-Process é o matador oficial de programas travados. O -Force garante que o Windows não vai tentar pedir "por favor" para o programa fechar.'
    },
    {
      id: 'ps-bonus-01-q2',
      type: 'multiple_choice',
      question: 'Ao investigar a lentidão do PC, por que o comando "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5" é tão útil?',
      options: [
        'Porque ele deleta vírus',
        'Porque ele esfria a temperatura do processador',
        'Porque ele filtra o ruído e te mostra exatamente o "Top 5" dos programas que estão sobrecarregando o processador naquele exato segundo.',
        'Porque ele libera espaço no HD'
      ],
      correctAnswer: 2,
      explanation: 'Ordenando de forma decrescente (do maior pro menor) e cortando só os 5 primeiros, você ganha um diagnóstico instantâneo e cirúrgico do problema.'
    }
  ]
};
