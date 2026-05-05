import { Lesson } from '../../../../types/academy';

export const lesson1103: Lesson = {
  id: 'ps-bonus-03',
  title: 'O Script Definitivo de Otimização',
  type: 'mixed',
  estimatedMinutes: 25,
  tips: [
    'Scripts de otimização devem ser rodados como Administrador, pois tocam em pastas de sistema e serviços que exigem privilégios elevados.',
    'Nunca limpe a pasta Temp se você estiver instalando um programa no momento (ex: instalando um jogo ou atualização do Windows).'
  ],
  content: {
    markdown: `
# 🚀 A Poção Mágica de Velocidade

Você já sabe fechar processos gulosos e sabe apagar arquivos temporários. Agora, vamos adicionar algumas especiarias do PowerShell para criar o "Script de Formatura" desta academia: **O Otimizador de Windows**.

Além das limpezas, nós vamos usar comandos poderosos para corrigir pequenos danos no sistema e limpar o cache secreto dos servidores DNS que o Windows usa para acessar a internet.

---

## 🔧 O Código Final

Crie um arquivo chamado \`PC-Turbo.ps1\`, clique com botão direito e mande **Executar como Administrador**.

Aviso: Esse script é real! Se você rodar na sua máquina, ele realmente fará uma faxina intensa.

\`\`\`powershell
# ==============================================================
# SCRIPT: OTIMIZADOR DE PC TURBO
# DESCRIÇÃO: Limpa disco, reseta redes e otimiza memória.
# ==============================================================

Write-Host "Iniciando a Manutenção do Sistema..." -ForegroundColor Cyan

# 1. FECHANDO PROGRAMAS INÚTEIS DA MEMÓRIA
Write-Host "[1/4] Limpando processos gulosos (Fechando Edge e Chrome ocultos)..."
# Os navegadores costumam deixar dezenas de "processos fantasmas" consumindo RAM mesmo após fechados
Get-Process -Name "msedge", "chrome" -ErrorAction SilentlyContinue | Stop-Process -Force

# 2. LIMPANDO ARQUIVOS TEMPORÁRIOS
Write-Host "[2/4] Esvaziando Lixeiras e Pastas Temp..."
# Apaga as Lixeiras de todos os discos sem perguntar nada
Clear-RecycleBin -Force -ErrorAction SilentlyContinue

# Array com as piores pastas do sistema
$Lixeiras = @(
    "C:\\Windows\\Temp\\*",
    "C:\\Windows\\Prefetch\\*",
    "$env:TEMP\\*"
)

foreach ($Pasta in $Lixeiras) {
    # Remove-Item é agressivo: Force pega arquivos ocultos, Recurse entra nas pastas filhas
    Get-ChildItem -Path $Pasta -Recurse -ErrorAction SilentlyContinue | 
        Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
}

# 3. LIMPANDO O CACHE DE DNS (MELHORA A INTERNET)
Write-Host "[3/4] Resetando conexões de rede e DNS..."
# Resolve o famoso "não consigo acessar esse site, mas meu amigo consegue"
ipconfig /flushdns | Out-Null

# 4. LIBERANDO MEMÓRIA STANDBY
# Quando você fecha programas pesados (como um jogo), o Windows mantém parte da RAM reservada. 
# Podemos pedir pro coletor de lixo forçar a limpeza.
Write-Host "[4/4] Otimizando a Memória RAM Livre..."
[GC]::Collect()

Write-Host "===============================================" -ForegroundColor Green
Write-Host "✅ Manutenção Concluída! O seu PC está voando!" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green
Start-Sleep -Seconds 5
\`\`\`

---

## 🎁 Parabéns! Você é um Scripting Ninja!

Você começou não sabendo o que era uma tela preta de terminal. E agora, você domina o pipeline, a orientação a objetos, as laços de repetição, lida com erros profissionalmente e escreve scripts reais de automação de sistemas!

Abrace o PowerShell no seu dia a dia de trabalho. A regra de ouro é: **Se você tem que clicar no mesmo botão todo dia... o PowerShell pode fazer isso por você.**

*Vá em paz e automatize o mundo!*
`
  },
  exercises: [
    {
      id: 'ps-bonus-03-q1',
      type: 'multiple_choice',
      question: 'No passo 3 do Script Turbo, usamos o comando "ipconfig /flushdns". O que ele faz no seu computador?',
      options: [
        'Aumenta a velocidade máxima da sua placa de rede em megabytes.',
        'Limpa a tabela de rotas do Windows e os endereços memorizados de sites (Cache DNS), resolvendo vários problemas esquisitos onde uma página web não carrega para você.',
        'Desinstala o seu navegador padrão.',
        'Muda sua senha do Wi-Fi.'
      ],
      correctAnswer: 1,
      explanation: 'Sempre que você tem um erro de "Site não encontrado" em uma rede onde a internet funciona para os outros, um ipconfig /flushdns é a cura mágica.'
    },
    {
      id: 'ps-bonus-03-q2',
      type: 'multiple_choice',
      question: 'O script final usa o comando "[GC]::Collect()". Qual o papel do GC (Garbage Collector) na computação?',
      options: [
        'Esvaziar a lixeira do Windows na área de trabalho',
        'Deletar a pasta Temp',
        'Coletar e varrer a memória RAM, limpando o "lixo eletrônico" (variáveis e dados órfãos) deixados para trás por programas que já fecharam, liberando assim espaço físico na memória RAM.',
        'Apagar o histórico de navegação'
      ],
      correctAnswer: 2,
      explanation: 'Essa é uma técnica avançada do framework .NET. Forçar o Garbage Collector recolhe objetos mortos da memória, devolvendo os Megabytes preciosos para que outros programas respirem.'
    }
  ]
};
