import { Lesson } from '../../../../types/academy';

export const lesson0203: Lesson = {
  id: 'git-02-03',
  title: 'Ignorando o Lixo (.gitignore)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Arquivos de senha e bancos de dados NUNCA devem ser salvos no Git. Se eles caírem no GitHub, o mundo inteiro poderá hackear a sua aplicação.',
    'O arquivo .gitignore tem um ponto na frente do nome. Isso significa que ele é um arquivo "oculto" nos sistemas Mac e Linux.'
  ],
  content: {
    markdown: `
# 🗑️ O Filtro Invisível

Imagine que você está tirando uma foto profissional do seu quarto. Você quer que a câmera capture o seu computador, a cama arrumada e os seus livros. Mas você não quer que a câmera registre a lixeira que está no canto.

Quando usamos o atalho **\`git add .\`**, ele é cego. Ele pega ABSOLUTAMENTE TUDO o que estiver na pasta e joga no palco para a foto. Isso é um perigo se você tiver arquivos de configuração com as senhas do seu banco de dados ou pastas de lixo geradas pelo sistema operacional (como a infame \`.DS_Store\` do Mac).

Para ensinar o Git a "ignorar" arquivos específicos, criamos o **\`.gitignore\`**.

---

## 🚫 Como usar o .gitignore

Para usá-lo, você só precisa criar um arquivo de texto comum, na raiz do seu projeto, e dar o nome exato de \`.gitignore\`.

Dentro desse arquivo, você digita os nomes dos arquivos ou pastas que o Git deve fingir que não existem.

\`\`\`text
# Exemplo do que escrever dentro do .gitignore

# Ignora um arquivo específico:
senhas.txt

# Ignora arquivos de sistema do Mac:
.DS_Store

# Ignora todas as imagens JPG (o asterisco é um coringa):
*.jpg

# Ignora uma pasta inteira de arquivos temporários:
temp/
\`\`\`

Assim que você salvar o \`.gitignore\`, se você rodar um \`git status\`, vai perceber que o Git parou de mostrar as senhas e as imagens na lista de arquivos "Untracked". Elas ficaram invisíveis para ele.

---

## ⚠️ A Regra de Ouro

O \`.gitignore\` só funciona para arquivos que **AINDA NÃO FORAM SALVOS** (commitados). 
Se você acidentalmente fez um commit de um arquivo de senha na semana passada e só colocar o nome dele no \`.gitignore\` hoje, o Git não vai conseguir ignorá-lo retroativamente. 

> 💡 Se o arquivo já está na foto (no histórico), não tem como fingir que ele não estava lá no passado!
`
  },
  exercises: [
    {
      id: 'git-02-03-q1',
      type: 'multiple_choice',
      question: 'Para que serve o arquivo .gitignore?',
      options: [
        'Para deletar arquivos inúteis do HD do computador para economizar espaço.',
        'Para ensinar o Git a ficar "cego" e nunca colocar no palco (staging area) arquivos temporários, sigilosos ou irrelevantes para o projeto de código.',
        'Para esconder o seu projeto de outros usuários do GitHub.',
        'Para recuperar senhas perdidas.'
      ],
      correctAnswer: 1,
      explanation: 'O .gitignore é a sua proteção. Ele garante que um "git add ." desavisado não capture e publique acidentalmente a pasta com as fotos do seu cachorro ou as senhas do banco de dados.'
    },
    {
      id: 'git-02-03-q2',
      type: 'multiple_choice',
      question: 'Você fez um commit ontem contendo um arquivo chamado "senha_do_banco.txt". Hoje você percebeu o erro, criou o arquivo ".gitignore" e colocou o nome da senha lá dentro. O que acontece?',
      options: [
        'O Git vai entrar no histórico e apagar o arquivo das fotos antigas automaticamente.',
        'O Git explode.',
        'O arquivo "senha_do_banco.txt" será escondido de imediato do histórico antigo.',
        'O .gitignore não vai funcionar. Ele só ignora arquivos "frescos" que ainda não foram monitorados. Se o arquivo já está cravado no histórico (foi commitado ontem), o Git continuará monitorando ele, e o segredo já vazou.'
      ],
      correctAnswer: 3,
      explanation: 'Isso é uma dor de cabeça clássica de iniciantes. O .gitignore é preventivo, não corretivo. Se a foto já foi tirada e revelada, não adianta pedir pra câmera ignorar agora.'
    }
  ]
};
