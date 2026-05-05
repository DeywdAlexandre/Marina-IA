import { Lesson } from '../../../../types/academy';

export const lesson1102: Lesson = {
  id: 'ps-bonus-02',
  title: 'Faxina no HD: Limpando Temporários',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O Windows e os navegadores criam arquivos "Temporários" (Temp) para agilizar as coisas, mas muitas vezes eles esquecem de apagar, lotando o seu disco rígido.',
    'Sempre feche seus navegadores antes de rodar scripts de limpeza, senão os arquivos estarão bloqueados e não poderão ser deletados.'
  ],
  content: {
    markdown: `
# 🧹 A Arte de Limpar o Disco

Sabe aqueles "programas limpadores de PC" que você baixa na internet (e que muitas vezes vêm cheios de propagandas)? Tudo o que eles fazem por debaixo dos panos é apagar o conteúdo de pastas específicas do Windows. 

Você não precisa deles! Você pode criar o seu próprio limpador usando apenas o PowerShell.

As 3 pastas que mais acumulam lixo no Windows são:
1. **Pasta Temp do Windows:** \`C:\\Windows\\Temp\`
2. **Pasta Temp do Usuário:** \`$env:TEMP\` (Esta é uma variável de ambiente que aponta direto para a sua pasta oculta AppData\\Local\\Temp)
3. **Prefetch do Windows:** \`C:\\Windows\\Prefetch\` (Onde o Windows salva rastros de programas para abri-los mais rápido).

---

## 🗑️ O Comando de Limpeza

A lógica de limpeza é simples: entrar na pasta, pegar tudo o que tem lá dentro, e mandar para o triturador.

Lembre-se do nosso Módulo 4 (Arquivos):
\`Get-ChildItem -Path "Pasta\\*" | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\`

Por que usamos tantos parâmetros no final?
- **-Force**: Força a exclusão de arquivos ocultos ou protegidos.
- **-Recurse**: Entra nas subpastas e apaga o que estiver lá dentro também.
- **-ErrorAction SilentlyContinue**: Alguns arquivos temporários estarão em uso pelo sistema naquele exato milissegundo e darão erro (Acesso Negado). Esse parâmetro diz pro PowerShell: "Tudo bem, ignora os que estão travados e foca em apagar o resto em silêncio".

---

## 💻 Montando a Faxina Básica

\`\`\`powershell
# 1. Limpando os temporários gerais do sistema
Write-Host "Limpando C:\\Windows\\Temp..."
Get-ChildItem -Path "C:\\Windows\\Temp\\*" -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

# 2. Limpando os seus arquivos temporários (do usuário atual)
Write-Host "Limpando os temporários do seu usuário..."
Get-ChildItem -Path "$env:TEMP\\*" -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

# 3. Limpando a Lixeira (Requer PowerShell 5+)
Write-Host "Esvaziando a Lixeira..."
Clear-RecycleBin -Force -ErrorAction SilentlyContinue

Write-Host "Faxina concluída! Você acabou de recuperar preciosos Gigabytes."
\`\`\`

> 💡 **Nota de Ouro:** Para que a limpeza do diretório do Windows funcione (\`C:\\Windows\\Temp\` e \`Prefetch\`), você precisará abrir o PowerShell clicando com o botão direito e selecionando **"Executar como Administrador"**.

---

## 📝 Resumo Rápido

- Programas de limpeza comerciais são superestimados. Você consegue fazer a mesma coisa pelo terminal.
- O lixo se acumula principalmente no \`$env:TEMP\` e no \`C:\\Windows\\Temp\`.
- O comando mágico é a junção do \`Get-ChildItem\` (para listar) com o \`Remove-Item -Force -Recurse\` (para triturar).
- Use sempre o \`-ErrorAction SilentlyContinue\` para não poluir sua tela com erros normais de "arquivo em uso".
`
  },
  exercises: [
    {
      id: 'ps-bonus-02-q1',
      type: 'multiple_choice',
      question: 'Ao tentar limpar a pasta Temp, por que frequentemente nos deparamos com o erro "The process cannot access the file because it is being used by another process"?',
      options: [
        'Porque o disco está fisicamente danificado',
        'Porque a pasta Temp é protegida contra gravação para sempre',
        'Porque algum programa (ou o próprio Windows) está com o arquivo aberto e em uso naquele exato momento, bloqueando a exclusão.',
        'Porque você digitou o comando errado'
      ],
      correctAnswer: 2,
      explanation: 'Arquivos em uso não podem ser deletados. Por isso usamos o -ErrorAction SilentlyContinue: para ignorar esses poucos arquivos bloqueados e limpar todo o resto com tranquilidade.'
    },
    {
      id: 'ps-bonus-02-q2',
      type: 'multiple_choice',
      question: 'O que a variável de ambiente $env:TEMP representa no PowerShell?',
      options: [
        'A temperatura atual da placa-mãe (CPU)',
        'O caminho exato para a pasta secreta de arquivos temporários do usuário atual logado (AppData\\Local\\Temp).',
        'Um atalho para desligar o PC',
        'O comando de esvaziar a lixeira'
      ],
      correctAnswer: 1,
      explanation: 'A variável de ambiente $env:TEMP é universal e aponta diretamente para a sua pasta pessoal de lixo temporário. O nome "TEMP" aqui não tem relação com temperatura física.'
    }
  ]
};
