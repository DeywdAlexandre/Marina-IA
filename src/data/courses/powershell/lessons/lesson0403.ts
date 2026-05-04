import { Lesson } from '../../../../types/academy';

export const lesson0403: Lesson = {
  id: 'ps-04-03',
  title: 'Lendo e Escrevendo em Arquivos',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Redirecionadores (> e >>) são atalhos super rápidos para o comando Out-File.',
    'Sempre que for "escrever", lembre da diferença entre sobrescrever (apagar o que tinha antes) e adicionar (colocar no final).'
  ],
  content: {
    markdown: `
# 📖 Lendo Arquivos (Get-Content)

Para ver o conteúdo de um arquivo de texto diretamente no terminal (sem precisar abrir o Bloco de Notas ou o VS Code), usamos o comando **\`Get-Content\`**.

O seu alias mais famoso vem do mundo Linux: **\`cat\`** (concatenate).

\`\`\`powershell
Get-Content -Path "C:\\Logs\\erro.log"
\`\`\`

> 💡 **Dica PRO:** Se o arquivo for gigante (como um log de milhares de linhas) e você só quiser ver as últimas atualizações, use o parâmetro \`-Tail\`:
> \`Get-Content erro.log -Tail 10\` (mostra apenas as últimas 10 linhas).

---

## ✍️ Escrevendo em Arquivos (Out-File)

Na lição anterior aprendemos a usar o pipeline (\`|\`) para enviar dados de um comando para outro. E se a gente quiser enviar a saída de um comando para um ARQUIVO em vez da tela?

Usamos o **\`Out-File\`**!

\`\`\`powershell
# Pega todos os processos rodando e salva a lista num arquivo TXT
Get-Process | Out-File -FilePath "processos_rodando.txt"
\`\`\`

**Atenção:** Por padrão, o \`Out-File\` **sobrescreve** o arquivo se ele já existir. Tudo que estava lá antes será apagado.

Se você quiser **adicionar** conteúdo no final do arquivo sem apagar o resto, use o parâmetro \`-Append\`:
\`\`\`powershell
Get-Date | Out-File -FilePath "registro.txt" -Append
\`\`\`

---

## ⏩ Os Atalhos Ninja: Redirecionadores (> e >>)

Digitar \`| Out-File\` toda hora cansa. O PowerShell herda do MS-DOS e do Linux os operadores de redirecionamento que são atalhos para o Out-File.

- **\`>\` (Maior que)** = Sobrescreve (equivale ao \`Out-File\`)
- **\`>>\` (Maior que duplo)** = Adiciona ao final (equivale ao \`Out-File -Append\`)

**Exemplo de Sobrescrever (\`>\`)**:
\`\`\`powershell
# Cria um arquivo novo ou apaga o conteúdo do existente e escreve "Olá"
"Olá Mundo!" > saudacao.txt
\`\`\`

**Exemplo de Adicionar (\`>>\`)**:
\`\`\`powershell
# Adiciona a data e hora atual na linha de baixo do arquivo
Get-Date >> saudacao.txt
\`\`\`

---

## 📝 Resumo Rápido

- **Get-Content (cat)**: Lê e exibe o conteúdo de um arquivo.
- **-Tail**: Lê apenas as últimas linhas de um arquivo.
- **Out-File**: Salva o resultado de um comando em um arquivo.
- **>**: Atalho para sobrescrever um arquivo.
- **>>**: Atalho para adicionar texto ao final de um arquivo.
`
  },
  exercises: [
    {
      id: 'ps-04-03-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre os operadores > e >> ?',
      options: [
        'O > lê um arquivo e o >> escreve',
        'O > escreve sobrescrevendo o arquivo, enquanto o >> adiciona ao final do arquivo',
        'O > é para arquivos pequenos e o >> para grandes',
        'Não existe >> no PowerShell'
      ],
      correctAnswer: 1,
      explanation: 'O ">" apaga o que tinha antes e coloca o novo conteúdo (sobrescreve). O ">>" preserva o que já existia e insere o novo conteúdo na próxima linha vazia (adiciona/append).'
    },
    {
      id: 'ps-04-03-q2',
      type: 'multiple_choice',
      question: 'Como você leria apenas as últimas 5 linhas de um log chamado "app.log"?',
      options: [
        'Get-Content app.log -Last 5',
        'Read-File app.log -Lines 5',
        'Get-Content app.log -Tail 5',
        'cat app.log > 5'
      ],
      correctAnswer: 2,
      explanation: 'O parâmetro correto do Get-Content para visualizar o final do arquivo é o -Tail (cauda, em inglês).'
    }
  ]
};
