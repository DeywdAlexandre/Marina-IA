import { Lesson } from '../../../../types/academy';

export const lesson0703: Lesson = {
  id: 'ps-07-03',
  title: 'Escrevendo seu Primeiro Script (.ps1)',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Um script nada mais é do que um arquivo de texto onde você cola todos os comandos que executaria na tela preta, mas na ordem em que quer que o computador rode.',
    'A "Execution Policy" do Windows bloqueia scripts desconhecidos por padrão. É uma trava de segurança da Microsoft.'
  ],
  content: {
    markdown: `
# 📜 O que é um Script?

Até agora, você digitava um comando no terminal e apertava Enter. Mas e se você quiser rodar 50 comandos de uma vez, criar pastas, copiar arquivos, criar funções... tudo com um clique só?

Para isso, salvamos todos esses comandos em um arquivo de texto normal, mas no lugar da extensão \`.txt\`, usamos a extensão oficial do PowerShell: **\`.ps1\`**. Isso é um Script!

---

## 🛑 O Bloqueio de Segurança (Execution Policy)

A primeira vez que você tentar rodar um arquivo \`.ps1\` no Windows, provavelmente receberá uma mensagem vermelha gigante de erro de segurança.

A Microsoft faz isso de propósito para impedir que vírus de script rodem sozinhos na máquina do usuário comum. Essa trava se chama **Execution Policy**.

Para nós (desenvolvedores/admins), precisamos abrir uma "exceção" para rodar os scripts que **nós mesmos** criamos na máquina.

**Como liberar?**
Abra o PowerShell como **Administrador** e digite:
\`\`\`powershell
Set-ExecutionPolicy RemoteSigned
\`\`\`
*(O PowerShell vai perguntar se você tem certeza. Digite \`Y\` ou \`S\` para confirmar).*

A opção \`RemoteSigned\` permite que scripts locais rodem livremente, mas exige que scripts baixados da internet venham assinados digitalmente. É o cenário ideal e seguro para 99% dos casos.

---

## ✍️ Criando e Rodando seu Script

1. Abra qualquer editor de texto (Bloco de Notas ou, de preferência, o **Visual Studio Code**).
2. Escreva seus comandos. Exemplo:

\`\`\`powershell
# Este é o arquivo meu_primeiro_script.ps1
Write-Host "Iniciando limpeza do sistema..."
Get-Date
Write-Host "Tudo pronto!"
\`\`\`

3. Salve o arquivo na sua pasta Documentos com o nome \`meu_primeiro_script.ps1\`.

### 🏃 Como executar?

No terminal do PowerShell, você não pode simplesmente digitar o nome do script (isso é mais uma medida de segurança para que você não rode um script acidentalmente quando queria chamar um comando).

Você **obrigatoriamente** precisa dizer o caminho do script. Se você já estiver na mesma pasta que ele, use o atalho de diretório atual \`.\\\` (ponto e barra invertida):

\`\`\`powershell
# Estando na pasta Documentos:
.\\meu_primeiro_script.ps1

# Ou informando o caminho completo:
C:\\Users\\Aluno\\Documents\\meu_primeiro_script.ps1
\`\`\`

---

## 📝 Resumo Rápido

- Scripts PowerShell têm a extensão **\`.ps1\`**.
- O Windows bloqueia scripts por padrão. Você precisa rodar o \`Set-ExecutionPolicy RemoteSigned\` como Administrador uma única vez na vida.
- Para rodar o script no terminal, obrigatoriamente você precisa informar o caminho (mesmo que seja apenas \`.\\\` para indicar a pasta atual).
`
  },
  exercises: [
    {
      id: 'ps-07-03-q1',
      type: 'multiple_choice',
      question: 'Qual é o comando necessário para resolver o erro "cannot be loaded because running scripts is disabled on this system"?',
      options: [
        'Unlock-Script -Force',
        'Set-ExecutionPolicy RemoteSigned',
        'Get-ExecutionPolicy Unrestricted',
        'Enable-PS1Files'
      ],
      correctAnswer: 1,
      explanation: 'Set-ExecutionPolicy RemoteSigned é o padrão da indústria para liberar máquinas de desenvolvimento/operação sem escancarar totalmente o sistema de segurança.'
    },
    {
      id: 'ps-07-03-q2',
      type: 'multiple_choice',
      question: 'Você está no terminal, dentro da pasta C:\\Scripts, e digita apenas "meuscript.ps1" e aperta Enter. O que acontece?',
      options: [
        'O script executa com sucesso.',
        'O script é deletado.',
        'O PowerShell dá um erro dizendo que o termo não foi reconhecido como um nome de cmdlet ou função.',
        'Abre o Bloco de Notas.'
      ],
      correctAnswer: 2,
      explanation: 'Ao contrário do antigo CMD (que rodava .bat diretamente), o PowerShell OBRIGA você a informar o caminho. Você deve digitar ".\\meuscript.ps1" (repare no ponto-barra informando o diretório).'
    }
  ]
};
