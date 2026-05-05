import { Lesson } from '../../../../types/academy';

export const lesson0902: Lesson = {
  id: 'ps-09-02',
  title: 'Agendamento de Tarefas',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Scripts que dependem de um humano para apertar Enter todo dia de manhã não são uma automação de verdade!',
    'O Agendador de Tarefas do Windows (Task Scheduler) é seu melhor amigo para criar automações invisíveis e pontuais.'
  ],
  content: {
    markdown: `
# ⏱️ Transformando Scripts em Robôs

Você criou um script maravilhoso que faz backup do seu banco de dados, limpa os arquivos temporários e envia um e-mail com o relatório. Lindo! Mas se todo dia às 23h você tiver que logar no servidor só para apertar Enter, você se tornou o robô.

A verdadeira automação acontece quando agendamos o script para rodar sozinho.

No Windows, fazemos isso criando uma **Scheduled Task** (Tarefa Agendada).

---

## 🛠️ Como Agendar um Script (Via Interface Gráfica)

1. Abra o menu Iniciar e digite **Agendador de Tarefas** (Task Scheduler).
2. Clique em **Criar Tarefa Básica**.
3. **Gatilho (Triggers):** Escolha quando deve rodar (Diariamente, ao iniciar o PC, etc).
4. **Ação (Actions):** Aqui está o segredo! Você não vai selecionar o seu arquivo \`.ps1\` diretamente!

**A configuração correta da Ação é:**
- **Programa/script:** \`powershell.exe\`
- **Adicionar argumentos:** \`-ExecutionPolicy Bypass -WindowStyle Hidden -File "C:\\Caminhos\\SeuScript.ps1"\`

**Por que fazemos assim?**
- \`-ExecutionPolicy Bypass\`: Garante que a trava de segurança não atrapalhe a automação no meio da noite.
- \`-WindowStyle Hidden\`: Impede que a tela azul do PowerShell pisque na cara do usuário atrapalhando quem estiver usando o PC.
- \`-File\`: Indica o caminho do seu script.

---

## 💻 Como Agendar via PowerShell (Avançado)

Se você quiser ser um mago da automação, pode criar o agendamento através do próprio terminal usando o módulo nativo do Windows:

\`\`\`powershell
# 1. Cria a ação que vai ser executada
$Acao = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -File C:\\MeusScripts\\Backup.ps1"

# 2. Cria o Gatilho (Trigger): Todo dia às 23:00
$Gatilho = New-ScheduledTaskTrigger -Daily -At 23:00

# 3. Junta tudo e registra a tarefa no Windows
Register-ScheduledTask -TaskName "BackupNoturno" -Action $Acao -Trigger $Gatilho -User "SYSTEM"
\`\`\`
*(Rodar como usuário "SYSTEM" permite que a tarefa rode em segundo plano mesmo que nenhum usuário esteja logado fisicamente no Windows!)*

---

## 📝 Resumo Rápido

- A verdadeira automação roda sozinha através do Agendador de Tarefas do Windows.
- O programa executável deve ser sempre o **\`powershell.exe\`**. O seu script entra como **argumento**.
- Use \`-WindowStyle Hidden\` para criar "Scripts Ninjas" que rodam sem piscar telas.
- Use \`-ExecutionPolicy Bypass\` para evitar que prompts de segurança travem o script agendado.
`
  },
  exercises: [
    {
      id: 'ps-09-02-q1',
      type: 'multiple_choice',
      question: 'Ao configurar uma ação no Agendador de Tarefas do Windows, qual o jeito CORRETO de mandar rodar seu script?',
      options: [
        'Programa: C:\\MeuScript.ps1',
        'Programa: notepad.exe / Argumentos: C:\\MeuScript.ps1',
        'Programa: powershell.exe / Argumentos: -File "C:\\MeuScript.ps1"',
        'Você não pode agendar scripts do PowerShell, apenas do antigo CMD (.bat).'
      ],
      correctAnswer: 2,
      explanation: 'O programa a ser chamado é o "Motor" (powershell.exe). O "Combustível" (seu script) é passado via argumento usando a flag -File.'
    },
    {
      id: 'ps-09-02-q2',
      type: 'multiple_choice',
      question: 'O que a flag "-WindowStyle Hidden" faz?',
      options: [
        'Esconde o script de antivírus',
        'Faz o script rodar de forma invisível, sem piscar a janela do console na tela do usuário',
        'Apaga o script após a execução',
        'Coloca a janela em tela cheia'
      ],
      correctAnswer: 1,
      explanation: 'Hidden (Oculto) executa o processo em background total. Muito útil para automações em computadores que estão sendo ativamente usados por pessoas durante o dia.'
    }
  ]
};
