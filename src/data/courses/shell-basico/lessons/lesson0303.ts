import { Lesson } from '../../../../types/academy';

export const lesson0303: Lesson = {
  id: 'shell-03-03',
  title: 'Destruição Segura (O perigoso rm)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O terminal NÃO TEM LIXEIRA. Se você apagar um arquivo por aqui, ele desaparece para sempre e não pode ser recuperado com Ctrl+Z.',
    'Aprenda a odiar o "rm". Use-o apenas quando tiver 100% de certeza do que está fazendo.'
  ],
  content: {
    markdown: `
# ⚠️ O Botão Vermelho

O mundo Unix possui uma filosofia clara: "Assumimos que o usuário sabe o que está fazendo".
Por causa dessa filosofia, a exclusão de arquivos no terminal é brutal. Não há janela perguntando "Tem certeza?". Não há Lixeira de Reciclagem. E não há como desfazer.

O comando de exclusão é o **\`rm\`** (ReMove).

### 1. Apagando Arquivos

Para deletar um arquivo (ou vários), basta passar o nome dele para o comando:

\`\`\`bash
# Apaga o relatorio.pdf para sempre (não vai para a lixeira!)
rm relatorio.pdf

# Apagando três arquivos de uma vez:
rm foto1.jpg foto2.jpg foto3.jpg
\`\`\`

---

### 2. O Erro da Pasta Cheia

O terminal tem uma trava de segurança embutida. Se você tentar apagar uma pasta usando apenas o \`rm\`, ele vai se recusar e mostrar o erro:
> \`rm: cannot remove 'MinhasFotos': Is a directory\`

Para o \`rm\` conseguir deletar uma pasta, você precisa passar a mesma flag "Recursiva" que usamos no comando de copiar (\`-r\` ou \`-R\`). Isso diz a ele: *"Sim, eu sei que é uma pasta. Mergulhe nela, apague todos os arquivos lá dentro e depois apague a pasta em si"*.

\`\`\`bash
# Apaga a pasta MinhasFotos e TODO o seu conteúdo.
rm -r MinhasFotos
\`\`\`

---

## ☠️ O Comando Mais Famoso do Mundo: rm -rf

Em memes de TI, é muito comum ver a piada do comando \`rm -rf /\`.
O que é isso?
- O \`rm\` apaga arquivos.
- A flag \`-r\` (Recursivo) faz ele entrar nas pastas e apagar tudo dentro.
- A flag \`-f\` (Force) desliga todas as travas de segurança e todos os avisos do sistema.
- O \`/\` representa a "Raiz" do disco inteiro (como o \`C:\\\` do Windows).

Se você rodar \`rm -rf /\` como administrador no Linux, ele vai apagar o disco rígido inteiro, deletando o próprio sistema operacional, sem parar para te perguntar absolutamente nada, até o computador morrer.

NUNCA digite esse comando!

---

## 📝 Resumo Rápido

- O terminal não tem Lixeira.
- **\`rm arquivo\`**: Apaga um arquivo comum silenciosamente.
- **\`rm -r pasta\`**: Necessário para apagar pastas (diretórios).
- A flag \`-f\` força a exclusão sem avisos e ignora erros. Cuidado ao usar o infame \`rm -rf\`.
`
  },
  exercises: [
    {
      id: 'shell-03-03-q1',
      type: 'multiple_choice',
      question: 'Você apagou acidentalmente a sua tese de mestrado usando o comando "rm tese.docx" no terminal. Como você recupera o arquivo?',
      options: [
        'Apertando Ctrl + Z no teclado',
        'Abrindo a Lixeira do sistema e clicando em "Restaurar"',
        'Infelizmente você não recupera. O comando "rm" não move os arquivos para a lixeira, ele destrói os dados no disco de forma permanente e irreversível.',
        'Digitando o comando un-rm tese.docx'
      ],
      correctAnswer: 2,
      explanation: 'É exatamente por isso que o terminal é perigoso para iniciantes. A filosofia do Unix é "se você mandou deletar, é porque você quer deletar agora".'
    },
    {
      id: 'shell-03-03-q2',
      type: 'multiple_choice',
      question: 'O que você precisa adicionar ao comando "rm" se quiser apagar uma pasta inteira chamada "Backup" e todos os 500 arquivos dentro dela?',
      options: [
        'rm Backup',
        'rm -all Backup',
        'rm -folder Backup',
        'rm -r Backup'
      ],
      correctAnswer: 3,
      explanation: 'Sem a flag -r (recursivo), o rm irá apenas dizer "Is a directory" e se recusar a executar a exclusão, protegendo a sua pasta de exclusões acidentais.'
    }
  ]
};
