import { Lesson } from '../../../../types/academy';

export const lesson0202: Lesson = {
  id: 'shell-02-02',
  title: 'O que tem aqui? O comando ls',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Sem o mouse, você não pode "ver" as pastas. Você precisa pedir para o terminal listá-las para você.',
    'ls significa "List" (Listar).'
  ],
  content: {
    markdown: `
# 👁️ Dando Olhos ao Terminal

Agora você já sabe usar o \`pwd\` para descobrir **onde** você está. Mas como você descobre **o que existe** dentro dessa pasta?
Se você estivesse no Windows, bastaria olhar para a tela para ver as pastinhas amarelas. No Terminal, nós usamos o comando **\`ls\`** (List).

---

## 1. O \`ls\` Básico

Digite no terminal:
\`\`\`bash
ls
\`\`\`

A resposta será uma lista simples de nomes de arquivos e pastas que estão dentro do seu diretório atual. Simples e direto.

---

## 2. A Lista Detalhada: \`ls -l\`

Apenas os nomes dos arquivos não dizem muita coisa. Quando foi criado? Qual o tamanho? É um arquivo ou uma pasta?

No Terminal Unix/Bash, você pode usar os chamados "Argumentos" ou "Flags" (sinalizadores) para alterar o comportamento de um comando. Eles geralmente começam com um hífen \`-\`.

O \`-l\` significa **Long Format** (Formato Longo).

\`\`\`bash
ls -l
\`\`\`

O resultado será algo parecido com isso:
> \`-rw-r--r--  1 marina marina  2048 Mai 04 14:00 relatorio.pdf\`
> \`drwxr-xr-x  2 marina marina  4096 Mai 04 15:30 Fotos\`

O que você deve saber ler dessa sopa de letrinhas (da esquerda para a direita)?
- Se a primeira letra for **\`d\`** (Directory), é uma pasta (como "Fotos"). Se for **\`-\`**, é um arquivo comum.
- Em seguida temos o dono do arquivo (marina).
- Depois, o tamanho em bytes (2048 = 2KB).
- A data da última modificação.
- O nome final do arquivo.

---

## 3. O Mundo Secreto: \`ls -a\`

Sabe quando os hackers de filmes encontram "arquivos ocultos"? 
No mundo Unix (Mac/Linux), qualquer arquivo ou pasta que comece com um **Ponto** (exemplo: \`.senha\`) é invisível por padrão. O comando \`ls\` normal vai fingir que ele não existe.

Para listar absolutamente **Tudo** (All), incluindo os arquivos ocultos, usamos a flag \`-a\`.

\`\`\`bash
ls -a
\`\`\`

*(Nota: Você pode até juntar as flags! Se digitar \`ls -la\`, ele mostrará a lista detalhada E os arquivos ocultos juntos!)*

---

## 📝 Resumo Rápido

- **\`ls\`**: Lista os itens visíveis.
- **\`ls -l\`**: Lista no formato longo (com datas e tamanhos).
- **\`ls -a\`**: Mostra até os arquivos ocultos (os que começam com ponto).
`
  },
  exercises: [
    {
      id: 'shell-02-02-q1',
      type: 'multiple_choice',
      question: 'Ao digitar "ls -l" no terminal, a primeira linha retorna "drwxr-xr-x" para o nome "Downloads". O que a primeira letra "d" indica?',
      options: [
        'Document (Documento do Word)',
        'Deleted (Arquivo que foi para a lixeira)',
        'Directory (Isso não é um arquivo solto, é uma Pasta/Diretório).',
        'Downloadable (Pode ser baixado)'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! A letra "d" na primeira posição do formato longo avisa que aquele item é um diretório (pasta) onde você pode entrar.'
    },
    {
      id: 'shell-02-02-q2',
      type: 'multiple_choice',
      question: 'Seu amigo disse que escondeu um arquivo chamado ".diario_secreto.txt" na pasta. Você digita "ls", mas não vê nada. O que você deve digitar para enxergar o arquivo?',
      options: [
        'ls -secret',
        'ls -l',
        'ls -a',
        'find diary'
      ],
      correctAnswer: 2,
      explanation: 'Arquivos que começam com um ponto (.) são ocultos no sistema Unix. O parâmetro -a (All/Tudo) é a única forma de o "ls" mostrá-los.'
    }
  ]
};
