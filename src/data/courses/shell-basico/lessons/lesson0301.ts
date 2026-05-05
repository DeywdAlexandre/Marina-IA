import { Lesson } from '../../../../types/academy';

export const lesson0301: Lesson = {
  id: 'shell-03-01',
  title: 'Criando do Zero: mkdir e touch',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'No mundo da interface gráfica (mouse), você clica com o botão direito para criar uma pasta. No terminal, você usa a palavra mágica "mkdir".',
    'Você pode criar 10 pastas de uma vez só apenas digitando os 10 nomes na mesma linha!'
  ],
  content: {
    markdown: `
# 🏗️ O Arquiteto de Pastas

Até agora você só "olhou" para o sistema. Você listou arquivos (\`ls\`) e andou pelas pastas (\`cd\`). Chegou a hora de alterar o mundo ao seu redor!

O primeiro poder que todo usuário de terminal aprende é criar novas pastas.

O comando para isso é o **\`mkdir\`** (abreviação de **M**a**K**e **DIR**ectory / Fazer Diretório).

\`\`\`bash
# Cria uma pasta chamada Projetos
mkdir Projetos

# Cria 3 pastas ao mesmo tempo!
mkdir Fotos Musicas Documentos
\`\`\`

> ⚠️ **Atenção:** Se você quiser criar uma pasta com um nome que tenha espaços (ex: "Minhas Fotos"), você **obrigatoriamente** precisa usar aspas: \`mkdir "Minhas Fotos"\`. Se não usar aspas, o terminal vai achar que você quer criar duas pastas separadas: uma chamada "Minhas" e outra "Fotos".

---

## 📄 O Toque Mágico para Arquivos

O \`mkdir\` cria pastas (gavetas). Mas e se você quiser criar um arquivo em branco de texto para escrever nele depois? 

O comando clássico do Linux/Mac para isso é o **\`touch\`** (tocar). Ele "toca" no disco rígido e deixa um arquivo vazio lá.

\`\`\`bash
# Cria um arquivo de texto vazio chamado relatorio
touch relatorio.txt

# Você pode criar vários arquivos de uma vez:
touch index.html style.css script.js
\`\`\`

Esse comando é incrivelmente útil para desenvolvedores (programadores) que precisam criar a estrutura de um projeto novo rapidamente sem abrir o editor de código.

---

## 📝 Resumo Rápido

- **\`mkdir Nomedapasta\`**: Cria uma nova pasta. Use aspas se o nome tiver espaços.
- **\`touch nomedoarquivo.txt\`**: Cria arquivos vazios de qualquer tipo (.txt, .pdf, .csv).
- Você pode separar os nomes por espaço para criar múltiplos arquivos/pastas com um único comando.
`
  },
  exercises: [
    {
      id: 'shell-03-01-q1',
      type: 'multiple_choice',
      question: 'O que acontece se você digitar o comando "mkdir Pasta Nova" e apertar Enter?',
      options: [
        'Dá um erro.',
        'O computador desliga.',
        'O terminal ignora o espaço e cria uma pasta chamada "PastaNova".',
        'Ele vai criar DUAS pastas distintas. Uma chamada "Pasta" e outra chamada "Nova".'
      ],
      correctAnswer: 3,
      explanation: 'O terminal usa o espaço vazio para separar argumentos. Para que ele entenda que é um nome só, você deve sempre "Envolver o Nome Entre Aspas" ou usar um underline (Pasta_Nova).'
    },
    {
      id: 'shell-03-01-q2',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre os comandos mkdir e touch?',
      options: [
        'O mkdir cria pastas invisíveis, o touch cria arquivos visíveis.',
        'O mkdir cria diretórios (pastas/gavetas), o touch cria arquivos em branco (papéis vazios).',
        'São a mesma coisa.',
        'O mkdir exclui pastas, o touch cria pastas.'
      ],
      correctAnswer: 1,
      explanation: 'Make Directory (mkdir) é o construtor oficial de gavetas organizacionais. O touch simplesmente cria arquivos ocos que ocuparão 0 bytes no HD.'
    }
  ]
};
