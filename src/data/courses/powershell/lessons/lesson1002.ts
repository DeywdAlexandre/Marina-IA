import { Lesson } from '../../../../types/academy';

export const lesson1002: Lesson = {
  id: 'ps-10-02',
  title: 'Codificando o Core do Projeto (Backup e Disco)',
  type: 'mixed',
  estimatedMinutes: 30,
  tips: [
    'O comando Compress-Archive é o WinRAR nativo do PowerShell. Ele permite zipar arquivos e pastas com uma única linha.',
    'Testar o script em partes (bloco por bloco) é a melhor forma de garantir que não haverá surpresas no final.'
  ],
  content: {
    markdown: `
# 🛠️ Mãos ao Código

Chegou a hora de preencher aquele esqueleto que montamos na lição anterior. Vamos usar os comandos vitais para resolver os problemas.

Abra o seu editor (como o VS Code) e vamos codar juntos o coração do nosso projeto!

---

## Passo 1: O "Painel de Controle" (Variáveis)

Sempre comece um script definindo as variáveis que representam pastas ou nomes de arquivos no topo. Assim, se você mudar de PC amanhã, só precisa alterar a primeira linha do script, sem ficar caçando o caminho no meio do código.

\`\`\`powershell
# --- CONFIGURAÇÕES ---
$PastaOrigem = "C:\\Users\\Aluno\\Documents\\Projetos"
$PastaBackup = "C:\\Backups"
$DataFormatada = (Get-Date).ToString("yyyy-MM-dd")
$NomeDoZip = "Backup_Projetos_$DataFormatada.zip"
$CaminhoFinal = "$PastaBackup\\$NomeDoZip"
\`\`\`

---

## Passo 2: Verificando o Espaço do Disco C:

Como verificamos a saúde do disco? Usamos a infraestrutura nativa do Windows (WMI/CIM) para pegar essa métrica, e fazemos uma matemática básica.

\`\`\`powershell
# Extraímos os dados do Disco C
$Disco = Get-CimInstance Win32_LogicalDisk | Where-Object { $_.DeviceID -eq "C:" }

# Convertemos de Bytes para Gigabytes e formatamos a matemática
$EspacoLivreGB = [math]::Round($Disco.FreeSpace / 1GB, 2)
$TamanhoTotalGB = [math]::Round($Disco.Size / 1GB, 2)
$PorcentagemLivre = [math]::Round(($EspacoLivreGB / $TamanhoTotalGB) * 100, 2)

Write-Host "Saúde do Disco C: $PorcentagemLivre% livre ($EspacoLivreGB GB de $TamanhoTotalGB GB)"
\`\`\`
*(Se quiser testar só esse bloco no seu terminal, copie e cole. Ele funciona perfeitamente!)*

---

## Passo 3: O Backup com Try/Catch

Agora vamos para a missão crítica: Zipar a pasta. Se não houver pasta "Projetos", precisamos abortar, por isso o \`-ErrorAction Stop\`.

\`\`\`powershell
try {
    Write-Host "Verificando se a pasta de origem existe..."
    
    # Se a pasta não existir, isso aqui vai acionar o Catch imediatamente!
    $Existe = Test-Path -Path $PastaOrigem
    
    if ($Existe -eq $false) {
        # O "throw" é um comando avançado que serve para FORÇAR um erro
        # Ele atira a gente pro Catch imediatamente
        throw "A pasta de origem ($PastaOrigem) não foi encontrada."
    }

    # Se a pasta destino de Backups não existir, a gente cria!
    if ((Test-Path -Path $PastaBackup) -eq $false) {
        New-Item -Path $PastaBackup -ItemType Directory | Out-Null
    }

    Write-Host "Iniciando compactação... Isso pode levar alguns segundos."
    # O comando que faz a mágica de criar o arquivo .zip
    Compress-Archive -Path "$PastaOrigem\\*" -DestinationPath $CaminhoFinal -Update -ErrorAction Stop
    
    Write-Host "✅ Backup concluído com sucesso em: $CaminhoFinal"

} catch {
    # Se batermos aqui, ou a pasta não existia, ou o Zip deu erro (sem permissão, arquivo aberto, etc)
    Write-Host "❌ ERRO GRAVE DURANTE O BACKUP!"
    Write-Host "Detalhe técnico: $($_.Exception.Message)"
}
\`\`\`

---

## 📝 Resumo Rápido

- Centralizamos caminhos em variáveis para facilitar a manutenção.
- \`Get-CimInstance Win32_LogicalDisk\`: Ferramenta ninja para ler métricas reais do hardware.
- \`[math]::Round()\`: Um atalho para arredondar números feios.
- \`Test-Path\`: O comando oficial para verificar se um arquivo/pasta existe ($true ou $false).
- \`throw\`: Um comando que você usa quando você *quer* forçar um erro para interromper a execução e pular pro bloco Catch.
- \`Compress-Archive\`: Gera arquivos \`.zip\` nativamente.
`
  },
  exercises: [
    {
      id: 'ps-10-02-q1',
      type: 'multiple_choice',
      question: 'Qual é o papel do comando Test-Path no nosso script de backup?',
      options: [
        'Ele testa a velocidade da internet.',
        'Ele cria a pasta de backup se ela não existir.',
        'Ele responde Verdadeiro ($true) ou Falso ($false) verificando se um arquivo ou pasta realmente existe no caminho especificado.',
        'Ele deleta arquivos temporários.'
      ],
      correctAnswer: 2,
      explanation: 'É o radar do PowerShell. Sempre use o Test-Path antes de tentar mover, copiar ou apagar arquivos importantes para garantir que eles estão lá.'
    },
    {
      id: 'ps-10-02-q2',
      type: 'multiple_choice',
      question: 'No código: throw "A pasta não foi encontrada". O que a palavra-chave throw faz?',
      options: [
        'Ele imprime um texto amarelo na tela.',
        'Ele joga o arquivo na lixeira.',
        'Ele cria um "Erro Fatal" artificial. O script entra em pânico imediatamente e pula para dentro do bloco Catch mais próximo.',
        'Ele ignora todos os erros.'
      ],
      correctAnswer: 2,
      explanation: 'O throw é seu botão de pânico manual. Útil para quando o PowerShell acha que está tudo bem, mas a sua lógica de negócios diz que a situação é inaceitável.'
    }
  ]
};
