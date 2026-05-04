import { Lesson } from '../../../../types/academy';

export const lesson0402: Lesson = {
  id: 'ps-04-02',
  title: 'Criando e Movendo Arquivos',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Os verbos do PowerShell são muito lógicos: New (Novo), Copy (Copiar), Move (Mover), Remove (Remover).',
    'O substantivo principal para arquivos e pastas é "Item".'
  ],
  content: {
    markdown: `
# 🛠️ Criando Coisas Novas (New-Item)

Para criar um novo arquivo ou uma nova pasta, usamos o **\`New-Item\`**. 

Como o PowerShell trata arquivos e pastas de forma parecida (ambos são "itens"), precisamos especificar o \`-ItemType\` (tipo de item).

**Criar um arquivo vazio:**
\`\`\`powershell
New-Item -Path "relatorio.txt" -ItemType File
\`\`\`

**Criar uma pasta nova:**
\`\`\`powershell
New-Item -Path "Projetos" -ItemType Directory
\`\`\`

> 💡 **Atalho Prático:** O famoso comando \`mkdir\` também funciona no PowerShell! Ele é essencialmente um alias inteligente para \`New-Item -ItemType Directory\`.

---

## 📋 Copiando (Copy-Item)

Precisa fazer um backup rápido? O **\`Copy-Item\`** (ou seu alias **\`cp\`**) é o que você precisa.

\`\`\`powershell
Copy-Item -Path "relatorio.txt" -Destination "relatorio_backup.txt"
\`\`\`

Se quiser copiar uma pasta **inteira** com todo o seu conteúdo dentro, você deve adicionar o parâmetro \`-Recurse\` (recursivo):
\`\`\`powershell
Copy-Item -Path ".\\MeusDocs" -Destination ".\\BackupDocs" -Recurse
\`\`\`

---

## 🚚 Movendo e Renomeando (Move-Item / Rename-Item)

Para mover um arquivo de uma pasta para outra, use o **\`Move-Item\`** (alias **\`mv\`**).

\`\`\`powershell
# Move o arquivo para dentro da pasta Projetos
Move-Item -Path "relatorio.txt" -Destination ".\\Projetos\\"
\`\`\`

No PowerShell (assim como no Linux), **mover e renomear são operações muito parecidas**. Você pode usar \`Move-Item\` para mudar o nome de um arquivo no mesmo lugar, mas existe um cmdlet específico e mais seguro para isso: o **\`Rename-Item\`**.

\`\`\`powershell
Rename-Item -Path "relatorio.txt" -NewName "relatorio_final.txt"
\`\`\`

---

## 🗑️ Apagando (Remove-Item)

Quando algo não for mais necessário, use o **\`Remove-Item\`** (alias **\`rm\`** ou **\`del\`**).

\`\`\`powershell
Remove-Item -Path "relatorio_velho.txt"
\`\`\`

**CUIDADO!** ⚠️
Se você tentar apagar uma pasta que não está vazia, o PowerShell vai pedir uma confirmação. Para forçar a exclusão da pasta e de TUDO que tem dentro (use com sabedoria!), use \`-Recurse -Force\`:
\`\`\`powershell
Remove-Item -Path "PastaAntiga" -Recurse -Force
\`\`\`

---

## 📝 Resumo Rápido

- \`New-Item\`: Cria arquivos (\`File\`) ou pastas (\`Directory\`).
- \`mkdir\`: Atalho exclusivo para criar pastas.
- \`Copy-Item (cp)\`: Copia. Use \`-Recurse\` para pastas cheias.
- \`Move-Item (mv)\`: Move itens de lugar.
- \`Rename-Item\`: Renomeia um item.
- \`Remove-Item (rm)\`: Deleta arquivos ou pastas.
`
  },
  exercises: [
    {
      id: 'ps-04-02-q1',
      type: 'multiple_choice',
      question: 'Qual a forma correta de copiar uma pasta que contém dezenas de arquivos e subpastas dentro dela?',
      options: [
        'Copy-Item -Path "Pasta" -Destination "Copia"',
        'Copy-Item -Path "Pasta" -Destination "Copia" -Recurse',
        'Move-Item -Path "Pasta" -Destination "Copia"',
        'Copy-Item -Path "Pasta" -AllFiles'
      ],
      correctAnswer: 1,
      explanation: 'Sempre que for manipular pastas não-vazias (seja para copiar ou apagar), você precisa do parâmetro -Recurse (recursivo) para instruir o PowerShell a entrar em todos os subdiretórios.'
    },
    {
      id: 'ps-04-02-q2',
      type: 'multiple_choice',
      question: 'O alias "mkdir" por baixo dos panos faz a exata mesma coisa que qual comando?',
      options: [
        'New-Item -ItemType File',
        'New-Folder',
        'New-Item -ItemType Directory',
        'Make-Directory'
      ],
      correctAnswer: 2,
      explanation: 'mkdir chama o cmdlet New-Item já preenchendo o parâmetro -ItemType com o valor "Directory".'
    }
  ]
};
