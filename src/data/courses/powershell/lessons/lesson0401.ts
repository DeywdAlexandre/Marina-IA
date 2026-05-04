import { Lesson } from '../../../../types/academy';

export const lesson0401: Lesson = {
  id: 'ps-04-01',
  title: 'Navegando entre Pastas',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O PowerShell vê tudo como "Itens". Uma pasta é um item, um arquivo também é.',
    'Você pode usar os atalhos do Linux (ls, cd) ou do Windows (dir) graças aos Aliases.'
  ],
  content: {
    markdown: `
# 🗺️ Onde estou? (Get-Location)

A primeira regra de navegação é saber onde você está. No PowerShell, você usa o comando \`Get-Location\`.

Se você vem de outros sistemas, deve conhecer seus famosos **aliases**:
- \`pwd\` (Linux/Mac)
- \`cd\` (quando digitado sozinho no CMD do Windows)

\`\`\`powershell
Get-Location
\`\`\`

> 💡 O PowerShell sempre mostra o caminho completo (ex: \`C:\\Users\\Aluno\`).

---

## 📂 O que tem aqui? (Get-ChildItem)

Para ver os arquivos e pastas no diretório atual, usamos o \`Get-ChildItem\`.

Ele é equivalente aos comandos:
- \`ls\` (Linux/Mac)
- \`dir\` (Windows CMD)

\`\`\`powershell
Get-ChildItem
\`\`\`

A saída padrão mostra:
- **Mode**: Permissões (d = diretório/pasta, a = arquivo)
- **LastWriteTime**: Data da última modificação
- **Length**: Tamanho (para arquivos)
- **Name**: Nome do item

---

## 🚶 Como eu ando? (Set-Location)

Para entrar em uma pasta ou mudar de diretório, o comando oficial é o \`Set-Location\`. 
Mas quase todo mundo usa o seu alias mais universal: \`cd\` (Change Directory).

### Navegação Absoluta vs Relativa

**Absoluta** (caminho completo):
\`\`\`powershell
Set-Location -Path "C:\\Windows\\System32"
\`\`\`

**Relativa** (a partir de onde estou):
Se estou em \`C:\\Users\` e quero entrar na pasta \`Aluno\`:
\`\`\`powershell
cd Aluno
\`\`\`

> 💡 **Dica de Ouro:** Use a tecla \`TAB\`! Digite \`cd Al\` e pressione \`TAB\`, o PowerShell autocompleta para \`cd .\\Aluno\\\`.

---

## 🔙 Caminhos Especiais

Existem três atalhos vitais para navegação:

| Atalho | O que significa | Exemplo de Uso |
|--------|-----------------|----------------|
| \`.\` (ponto) | O diretório atual | \`.\\script.ps1\` (Roda um script na pasta atual) |
| \`..\` (ponto duplo) | O diretório "pai" (um nível acima) | \`cd ..\` (Volta uma pasta) |
| \`~\` (til) | Seu diretório de usuário (\`C:\\Users\\SeuNome\`) | \`cd ~\` (Vai direto para casa) |

Se você estiver em \`C:\\Users\\Aluno\\Documents\` e digitar \`cd ..\`, você voltará para \`C:\\Users\\Aluno\`.

---

## 📝 Resumo

- **Get-Location (pwd)**: Descobrir onde estou.
- **Get-ChildItem (ls/dir)**: Listar arquivos e pastas.
- **Set-Location (cd)**: Mudar de diretório.
- **cd ..**: Voltar uma pasta.
- **cd ~**: Voltar para o diretório raiz do usuário.
`
  },
  exercises: [
    {
      id: 'ps-04-01-q1',
      type: 'multiple_choice',
      question: 'Se você está na pasta "C:\\Windows\\System32" e digita "cd ..", para onde você vai?',
      options: [
        'C:\\',
        'C:\\Windows',
        'C:\\Users',
        'Vai dar erro'
      ],
      correctAnswer: 1,
      explanation: 'O comando "cd .." volta exatamente um nível na árvore de diretórios. O "pai" de System32 é Windows.'
    },
    {
      id: 'ps-04-01-code1',
      type: 'code_challenge',
      question: 'Descubra onde você está e liste os arquivos',
      codePrompt: 'No terminal, execute o comando (ou seu alias) que lista os arquivos e pastas do diretório atual.',
      expectedOutput: 'Name',
      hint: 'Você pode usar Get-ChildItem, ls ou dir.',
      starterCode: '# Liste os itens do diretório atual\n'
    }
  ]
};
