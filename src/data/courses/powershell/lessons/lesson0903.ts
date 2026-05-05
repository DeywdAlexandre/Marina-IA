import { Lesson } from '../../../../types/academy';

export const lesson0903: Lesson = {
  id: 'ps-09-03',
  title: 'Scripts de Automação do Dia a Dia',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'O segredo de um bom script não é a complexidade, mas a consistência. Resolva um problema pequeno de cada vez.',
    'Sempre documente o que seu script faz no cabeçalho. Em 6 meses, nem você vai lembrar o que aquele código maluco fazia.'
  ],
  content: {
    markdown: `
# 🛠️ Juntando Todas as Peças

Você chegou ao final da jornada de conceitos! Neste ponto, você sabe navegar, usar o pipeline, filtrar dados, criar variáveis, fazer loops, montar funções, tratar erros e agendar tarefas.

Agora é a hora de colar esses legos e construir automações que dão orgulho e salvam o seu dia.

Vamos analisar duas das automações mais clássicas e úteis do mundo de TI.

---

## 🧹 Script 1: O Faxineiro de Disco (Limpeza Automática)

Arquivos de log crescem infinitamente. Arquivos temporários lotam o disco. Um script simples agendado para rodar toda sexta-feira à noite pode impedir que seu servidor caia por falta de espaço.

\`\`\`powershell
# Objetivo: Apagar arquivos temporários com mais de 30 dias de idade

$PastaAlvo = "C:\\Windows\\Temp"
$DiasLimite = 30
# Pega a data de hoje e subtrai 30 dias
$DataCorte = (Get-Date).AddDays(-$DiasLimite) 

try {
    Write-Host "Iniciando a faxina na pasta $PastaAlvo..."
    
    # 1. Pega os arquivos
    # 2. Filtra pela Data de Modificação (menor/mais velha que a data de corte)
    # 3. Força a deleção ignorando erros normais
    Get-ChildItem -Path $PastaAlvo -Recurse -File | 
    Where-Object { $_.LastWriteTime -lt $DataCorte } | 
    Remove-Item -Force -ErrorAction SilentlyContinue

    Write-Host "Faxina concluída com sucesso!"
} catch {
    Write-Host "Erro grave ao tentar limpar a pasta. Detalhes: $($_.Exception.Message)"
}
\`\`\`

---

## 🕵️ Script 2: O Vigia Noturno (Monitoramento de Serviço)

Serviços vitais do Windows param de funcionar do nada. Ao invés de você ficar olhando para a tela de Serviços, deixe o PowerShell vigiar para você.

\`\`\`powershell
# Objetivo: Verificar se o serviço de Impressão (Spooler) está rodando. 
# Se estiver parado, reinicie e grave a falha em um arquivo de texto.

$NomeDoServico = "Spooler"
$ArquivoLog = "C:\\Logs\\Monitoramento.txt"

# Usamos Get-Service para checar o status
$Servico = Get-Service -Name $NomeDoServico

if ($Servico.Status -eq "Stopped") {
    
    Write-Host "Alerta: O serviço $NomeDoServico parou! Tentando reiniciar..."
    Start-Service -Name $NomeDoServico
    
    # Guarda a evidência no arquivo de texto
    $Mensagem = "$(Get-Date): O serviço $NomeDoServico foi reiniciado automaticamente."
    $Mensagem | Out-File -FilePath $ArquivoLog -Append
    
} else {
    Write-Host "O serviço $NomeDoServico está rodando perfeitamente."
}
\`\`\`

---

## 📝 Resumo Rápido

- Comece definindo suas **Variáveis no topo** do script (facilita alterar configurações no futuro sem fuçar no meio do código).
- Use **Comentários (\`#\`)** para explicar o "PORQUÊ" você fez algo, não "O QUÊ" (o código já diz o quê).
- Use o **Pipeline** para evitar a criação de centenas de variáveis desnecessárias.
- **Teste com \`-WhatIf\`** antes de colocar qualquer script destrutivo em produção.
`
  },
  exercises: [
    {
      id: 'ps-09-03-q1',
      type: 'multiple_choice',
      question: 'No "Script 1: O Faxineiro de Disco", como o script descobre quais arquivos apagar?',
      options: [
        'Ele tenta apagar tudo e conta com a sorte',
        'Ele usa a lógica de diminuir a Data de Hoje em 30 dias (.AddDays(-30)) e usa o Where-Object para achar arquivos cuja última alteração (-lt) seja mais velha do que essa data de corte.',
        'Ele lê o tamanho do arquivo em bytes',
        'Ele usa o comando Delete-OldFiles nativo do Windows'
      ],
      correctAnswer: 1,
      explanation: 'A matemática de datas (Get-Date).AddDays() aliada ao Where-Object filtrando propriedades é o padrão universal para retenção de logs/backups no PowerShell.'
    },
    {
      id: 'ps-09-03-q2',
      type: 'multiple_choice',
      question: 'No "Script 2: O Vigia Noturno", por que usamos o comando Out-File com o parâmetro -Append?',
      options: [
        'Para enviar a mensagem para o pendrive',
        'Para deletar o arquivo',
        'Para adicionar a nova linha de log NO FINAL do arquivo existente, em vez de sobrescrever e destruir o histórico antigo.',
        'Para escrever na tela'
      ],
      correctAnswer: 2,
      explanation: 'Sem o -Append, o Out-File ou o redirecionador > sobrescrevem o arquivo totalmente a cada rodada. O -Append garante que seu arquivo de logs cresça preservando as informações antigas.'
    }
  ]
};
