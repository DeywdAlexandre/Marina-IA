import { Lesson } from '../../../../types/academy';

export const lesson1003: Lesson = {
  id: 'ps-10-03',
  title: 'Finalizando: Adicionando o Log e Empacotando',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O código final de um script profissional deve ser limpo e previsível.',
    'Nunca confie na sua memória. Um bom Log é a diferença entre um final de semana tranquilo e ser acordado às 3 da manhã para "adivinhar o que quebrou".'
  ],
  content: {
    markdown: `
# 📦 A Cereja do Bolo: O Sistema de Log

Na Lição 10.2 o nosso script verificou o disco, zipou a pasta e até fez um tratamento de erros. Mas todas as mensagens (o famoso \`Write-Host\`) ficaram na tela do terminal.

Se esse script for agendado para rodar de madrugada invisível (\`-WindowStyle Hidden\`), como vamos saber amanhã se ele funcionou? 

Precisamos que ele escreva num arquivo de Log usando o **\`Out-File -Append\`**.

---

## O Código Final do Projeto

Aqui está o código completo do projeto \`MarinaHealthCheck.ps1\`. Nós criamos uma função simples de Logger no topo para facilitar a escrita no arquivo!

\`\`\`powershell
# ==============================================================
# SCRIPT: Marina Health Check & Backup
# DESCRIÇÃO: Monitora espaço em disco e faz backup em ZIP.
# ==============================================================

# --- CONFIGURAÇÕES GERAIS ---
$PastaOrigem = "C:\\Users\\Aluno\\Documents\\Projetos"
$PastaBackup = "C:\\Backups"
$ArquivoLog  = "C:\\Backups\\HealthCheck_Logs.txt"

$DataAtual = (Get-Date).ToString("yyyy-MM-dd")
$NomeDoZip = "Backup_Projetos_$DataAtual.zip"
$CaminhoFinal = "$PastaBackup\\$NomeDoZip"

# --- FUNÇÃO DE APOIO (LOGGER) ---
# Em vez de repetir Get-Date toda hora, usamos essa função
function Escrever-Log {
    param([string]$Mensagem)
    $Timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    $TextoFinal = "[$Timestamp] $Mensagem"
    
    # Imprime na tela pra gente ver (opcional)
    Write-Host $TextoFinal 
    
    # Adiciona a mensagem no final do arquivo de log (.txt)
    $TextoFinal | Out-File -FilePath $ArquivoLog -Append
}

# --- INÍCIO DA EXECUÇÃO ---

# 0. Garante que a pasta de destino do Backup/Log existe
if ((Test-Path -Path $PastaBackup) -eq $false) {
    New-Item -Path $PastaBackup -ItemType Directory | Out-Null
}

Escrever-Log "--- Iniciando Rotina Diária ---"

# 1. VERIFICAR DISCO
try {
    $Disco = Get-CimInstance Win32_LogicalDisk | Where-Object { $_.DeviceID -eq "C:" }
    $EspacoLivreGB = [math]::Round($Disco.FreeSpace / 1GB, 2)
    $PorcentagemLivre = [math]::Round(($EspacoLivreGB / ([math]::Round($Disco.Size / 1GB, 2))) * 100, 2)
    
    Escrever-Log "STATUS DISCO C: $PorcentagemLivre% livre ($EspacoLivreGB GB)."
    
    if ($PorcentagemLivre -lt 10) {
        Escrever-Log "ALERTA: O Disco C: está com menos de 10% de espaço!"
    }
} catch {
    Escrever-Log "ERRO ao tentar ler informações do disco: $($_.Exception.Message)"
}

# 2. FAZER O BACKUP
try {
    if ((Test-Path -Path $PastaOrigem) -eq $false) {
        throw "Pasta de origem ($PastaOrigem) não encontrada."
    }

    Escrever-Log "Compactando a pasta de Projetos..."
    Compress-Archive -Path "$PastaOrigem\\*" -DestinationPath $CaminhoFinal -Update -ErrorAction Stop
    
    Escrever-Log "SUCESSO! Backup salvo em: $CaminhoFinal"

} catch {
    Escrever-Log "FALHA GRAVE no Backup: $($_.Exception.Message)"
}

Escrever-Log "--- Rotina Finalizada ---"
Write-Host ""
\`\`\`

---

## 🏃 Como usar isso na Vida Real

1. Crie uma pasta chamada \`C:\\Backups\` no seu computador.
2. Crie uma pasta chamada \`C:\\Users\\Aluno\\Documents\\Projetos\` e coloque 2 arquivos nela só para testar. *(Altere o "Aluno" para o seu usuário do Windows).*
3. Abra o **Visual Studio Code** ou o Bloco de Notas.
4. Copie o código inteiro acima e salve como **\`MarinaHealthCheck.ps1\`**.
5. Clique com botão direito no arquivo e vá em **Executar com o PowerShell**.

**O que vai acontecer:**
A tela preta piscará e em instantes você verá um arquivo \`.zip\` prontinho dentro de \`C:\\Backups\`. E mais importante: você verá o arquivo de texto **\`HealthCheck_Logs.txt\`** com o carimbo de tempo (Timestamp) e o diagnóstico do seu computador!

Você acaba de criar o seu primeiro **Agente de TI Automático**! 🎉

---

## 📝 Resumo Rápido

- Criar funções de apoio (como o \`Escrever-Log\`) ajuda a manter o código principal limpo e legível.
- Agrupar ações lógicas em blocos \`try/catch\` isolados impede que o erro no Backup quebre a leitura do Disco (e vice-versa).
- O projeto final consolida: Variáveis, Funções, Testes Lógicos (IF), Objetos Avançados, Tratamento de Erros e Saída para Arquivos. Você zerou a fundação do PowerShell!
`
  },
  exercises: [
    {
      id: 'ps-10-03-q1',
      type: 'multiple_choice',
      question: 'Na função Escrever-Log que criamos no script final, por que adicionamos o (Get-Date).ToString("yyyy-MM-dd HH:mm:ss") antes de gravar o arquivo?',
      options: [
        'Para saber a validade do arquivo ZIP',
        'Porque é obrigatório para o Out-File funcionar',
        'Para criar um Timestamp. Saber a data e a exata HORA/MINUTO/SEGUNDO em que a ação ocorreu ou em que o erro aconteceu é vital para a auditoria de logs.',
        'Apenas para deixar o texto mais bonito'
      ],
      correctAnswer: 2,
      explanation: 'Registros de log sem data/hora são inúteis. Se um erro aconteceu, você precisa cruzar o horário do erro com outros eventos do sistema para descobrir o que causou.'
    },
    {
      id: 'ps-10-03-q2',
      type: 'multiple_choice',
      question: 'No script final, nós usamos DOIS blocos "try/catch" separados (um pro disco, outro pro backup). Por que não colocar o script inteiro dentro de um gigantesco Try/Catch único?',
      options: [
        'Pode colocar, tanto faz',
        'Se você usar um único Try para tudo, assim que der o primeiro erro (ex: falha ao ler o disco), ele pula pro Catch e ABORTA todo o resto do script (o backup não será nem tentado).',
        'Porque o PowerShell tem um limite de 10 linhas por Try',
        'Para o arquivo de log ficar menor'
      ],
      correctAnswer: 1,
      explanation: 'Isolamento de Falhas. Ao usar vários blocos try/catch, você garante que se a etapa A falhar gravemente, a etapa B ainda será executada normalmente e de forma independente.'
    }
  ]
};
