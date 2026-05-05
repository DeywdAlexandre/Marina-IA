import { Lesson } from '../../../../types/academy';

export const lesson0302: Lesson = {
  id: 'shell-03-02',
  title: 'Copiando, Movendo e Renomeando',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Copiar não apaga o arquivo original. Mover apaga.',
    'No mundo dos terminais, não existe um comando específico chamado "renomear". Nós usamos o truque de Mover o arquivo para o mesmo lugar com um nome novo!'
  ],
  content: {
    markdown: `
# 📦 Copiar e Mover: A Lógica de Dois Passos

Quando você arrasta um arquivo com o mouse no Windows, você precisa saber de duas coisas: de onde o arquivo está saindo e para onde ele vai.

No terminal, a lógica é idêntica: você digita a \`Ação\`, depois a \`Origem\` e, por fim, o \`Destino\`.

### 1. Copiando com \`cp\` (Copy)

O comando **\`cp\`** copia um arquivo. Ele preserva o arquivo original intacto e cria um clone no destino.

\`\`\`bash
# Copiando a "foto.jpg" para dentro da pasta "Projetos"
cp foto.jpg Projetos/

# Copiando o arquivo e mudando o nome do clone:
cp arquivo_velho.txt arquivo_novo.txt
\`\`\`

*(Nota: Se você tentar copiar uma PASTA inteira usando apenas o \`cp\`, vai dar erro. Para copiar pastas que têm arquivos dentro, você precisa usar a flag Recursiva \`cp -r pasta_origem pasta_destino\`)*.

---

### 2. Movendo com \`mv\` (Move)

O comando **\`mv\`** recorta o arquivo (ou pasta) de um lugar e cola no outro. O original desaparece.

\`\`\`bash
# Movendo o relatorio.pdf para dentro da pasta Documentos
mv relatorio.pdf Documentos/
\`\`\`
*(Uma grande vantagem do \`mv\` é que ele move pastas inteiras sem precisar daquela flag "Recursiva" que o \`cp\` exige).*

---

## 🏷️ O Truque Ninja: Renomear Arquivos

Se você procurar no manual do Unix, não achará um comando simples "rename". Os deuses do terminal foram muito práticos e decidiram que "Renomear é apenas Mover um arquivo para a mesma pasta, mas com um nome diferente".

Para renomear qualquer coisa, usamos o próprio comando **\`mv\`**.

\`\`\`bash
# "Movendo" foto.jpg para o mesmo local, mas mudando o nome para perfil.jpg
mv foto.jpg perfil.jpg
\`\`\`
É elegante, rápido e funciona para pastas e arquivos!

---

## 📝 Resumo Rápido

- A estrutura sagrada é: **\`Comando\`** \`Origem\` \`Destino\`
- **\`cp\`** (Copy): Faz um clone. Use \`cp -r\` se quiser copiar pastas.
- **\`mv\`** (Move): Recorta do local original.
- **Renomear**: O Terminal usa o \`mv arquivo_antigo novo_nome\` para trocar o nome de qualquer coisa.
`
  },
  exercises: [
    {
      id: 'shell-03-02-q1',
      type: 'multiple_choice',
      question: 'Você tentou digitar "cp pasta_cheia_de_fotos /bkp" e o terminal deu um erro dizendo que não vai copiar. O que faltou?',
      options: [
        'A pasta de destino não existe',
        'Faltou colocar .zip no final',
        'O comando "cp" por padrão só copia arquivos soltos. Para copiar uma pasta com itens dentro, você OBRIGATORIAMENTE precisa adicionar a flag -r (recursivo).',
        'Não se pode copiar pastas no Linux'
      ],
      correctAnswer: 2,
      explanation: 'O -r (Recursivo) diz ao terminal para "mergulhar" na pasta e copiar tudo o que estiver ali dentro. Sem ele, o "cp" se recusa a agir sobre diretórios.'
    },
    {
      id: 'shell-03-02-q2',
      type: 'multiple_choice',
      question: 'Como você faz para renomear um arquivo de "planilha1.csv" para "vendas.csv" usando o terminal Linux/Mac?',
      options: [
        'rename planilha1.csv vendas.csv',
        'mv planilha1.csv vendas.csv',
        'cp planilha1.csv vendas.csv',
        'edit-name planilha1.csv vendas.csv'
      ],
      correctAnswer: 1,
      explanation: 'No mundo Unix, Mover e Renomear são executados pelo mesmo motor (o "mv"). Você está apenas movendo o arquivo para a mesma pasta, mas trocando a etiqueta dele.'
    }
  ]
};
