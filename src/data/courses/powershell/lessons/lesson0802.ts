import { Lesson } from '../../../../types/academy';

export const lesson0802: Lesson = {
  id: 'ps-08-02',
  title: 'ErrorAction e o Poderoso -WhatIf',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O PowerShell tem dois tipos de erros: "Erros Não-Fatais" (o script continua rodando) e "Erros Fatais" (o script para).',
    'O -WhatIf é a sua maior rede de segurança ao lidar com comandos destrutivos (como Remove-Item).'
  ],
  content: {
    markdown: `
# 🛠️ Controlando o Comportamento do Erro

Na lição anterior, colocamos um misterioso \`-ErrorAction Stop\` no nosso código para que o \`Try/Catch\` funcionasse. Chegou a hora de entender o porquê.

Por padrão, a Microsoft projetou o PowerShell para ser "teimoso". Se ele não acha um arquivo, ele cospe sangue na tela (texto vermelho), mas **continua executando a linha seguinte**. Esse é um erro **Não-Fatal**. 

O problema é que o \`Try/Catch\` **só captura erros fatais!**

### O Parâmetro Universal: -ErrorAction

Quase todos os comandos nativos do PowerShell possuem o parâmetro invisível \`-ErrorAction\` (ou \`-EA\`). Ele dita como o comando deve reagir se algo der errado.

As 4 opções principais são:

1. **Continue** (Padrão): Mostra o erro em vermelho na tela e continua o script.
2. **Stop**: Transforma a falha em um *Erro Fatal*. Mostra o erro e **PARALISA** o script imediatamente (ativando o \`Catch\`).
3. **SilentlyContinue**: Ignora o erro completamente. Não mostra o texto vermelho e finge que nada aconteceu (Use com cautela!).
4. **Inquire**: Pergunta ao usuário na tela se ele quer continuar ou parar.

\`\`\`powershell
# Forçando o Try/Catch a funcionar (transformando o erro em Stop)
try {
    Get-Process "ProcessoQueNaoExiste" -ErrorAction Stop
} catch {
    Write-Host "Processo não encontrado. Sem pânico."
}

# Ignorando erros de permissão ao listar uma pasta inteira:
Get-ChildItem C:\\Windows -Recurse -ErrorAction SilentlyContinue
\`\`\`

---

## 🔮 Prevendo o Futuro: -WhatIf

Um dos maiores diferenciais do PowerShell frente a outras linguagens de script é o parâmetro de segurança **\`-WhatIf\`** (E Se...).

Se você está prestes a rodar um comando perigoso (como apagar milhares de arquivos, parar serviços vitais, ou alterar regras de firewall) e está com medo de dar Enter, use o \`-WhatIf\`!

\`\`\`powershell
# Quero apagar todos os arquivos .tmp da pasta atual
Remove-Item *.tmp -WhatIf
\`\`\`

**O que vai acontecer?**
Absolutamente **NADA** será apagado. O PowerShell apenas lerá os seus pensamentos e dirá na tela:
> *"What if: Performing the operation 'Remove File' on target 'C:\\Temp\\arquivo_lixo.tmp'."*

Ele simula o comando e te conta exatamente o que **teria acontecido** se você apertasse Enter de verdade. É a melhor ferramenta de testes do mundo de TI.

---

## ✅ Pedindo Confirmação: -Confirm

Irmão do WhatIf, o \`-Confirm\` obriga o PowerShell a abrir uma caixa de diálogo (ou prompt) pedindo sua autorização **Y/N** antes de afetar CADA item.

\`\`\`powershell
# Ele vai te perguntar arquivo por arquivo se pode apagar
Remove-Item *.tmp -Confirm
\`\`\`

---

## 📝 Resumo Rápido

- \`-ErrorAction Stop\` (ou \`-EA Stop\`): Exige que o PowerShell pare tudo se der erro. Essencial para usar com Try/Catch.
- \`-ErrorAction SilentlyContinue\`: Esconde o erro vermelho e segue a vida.
- \`-WhatIf\`: Simula o comando destrutivo e diz o que aconteceria. **Não altera nada na máquina.**
- \`-Confirm\`: Para e exige que você confirme (Y/N) antes de modificar algo.
`
  },
  exercises: [
    {
      id: 'ps-08-02-q1',
      type: 'multiple_choice',
      question: 'Por que frequentemente adicionamos -ErrorAction Stop em comandos dentro de um bloco "try"?',
      options: [
        'Para fazer o script rodar mais rápido',
        'Porque o try/catch do PowerShell apenas detecta "Erros Fatais" (Terminating Errors). O parâmetro Stop transforma erros simples em erros fatais, forçando o desvio para o Catch.',
        'Para impedir o usuário de fechar a janela do terminal',
        'Porque o -ErrorAction apaga os logs de erro antigos'
      ],
      correctAnswer: 1,
      explanation: 'É exatamente por isso. Sem o -ErrorAction Stop, o cmdlet poderia dar um erro simples, pintar a tela de vermelho, ignorar o Catch e seguir rodando as próximas linhas.'
    },
    {
      id: 'ps-08-02-q2',
      type: 'multiple_choice',
      question: 'Você construiu um script complexo que deleta usuários inativos. Você quer testá-lo sem deletar ninguém de verdade para ver se a lógica está certa. O que você usa no final do comando Remove-ADUser?',
      options: [
        '-TestMode',
        '-ErrorAction SilentlyContinue',
        '-WhatIf',
        '-Debug'
      ],
      correctAnswer: 2,
      explanation: 'O parâmetro -WhatIf ("E se") simula a ação e te relata quais usuários seriam deletados, sem tocar num fio de cabelo deles.'
    }
  ]
};
