import { Lesson } from '../../../../types/academy';

export const lesson0403: Lesson = {
  id: 'git-04-03',
  title: 'Quando Universos Colidem (Conflitos)',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Conflitos não são erros do Git. Eles são avisos de que o Git não quer apagar o seu trabalho ou o de outra pessoa sem perguntar primeiro.',
    'Respire fundo. Resolver um conflito é apenas decidir qual texto deve ficar no arquivo.'
  ],
  content: {
    markdown: `
# ⚔️ O Terror dos Iniciantes: Merge Conflicts

O Git é inteligente, mas ele não lê mentes. 
Imagine que na branch **master**, o título do site é "Olá Mundo".
Você cria uma branch e muda para "Bem-vindo". 
Enquanto isso, seu colega muda na master para "Hello World".

Quando você tentar dar o \`merge\`, o Git vai entrar em pânico: *"Socorro! Duas pessoas mudaram a mesma linha de formas diferentes. Qual delas eu devo manter?"*

Isso é um **Conflito de Merge**.

---

## 🚩 Identificando o Conflito

Quando o conflito acontece, o Git para tudo e deixa o arquivo marcado assim:

\`\`\`html
<<<<<<< HEAD
<h1>Hello World</h1> (O que está na master agora)
=======
<h1>Bem-vindo</h1> (O que você quer trazer da sua branch)
>>>>>>> sua-branch-de-teste
\`\`\`

- **<<<<<<< HEAD:** Início do conflito (o que já existe aqui).
- **=======:** A fronteira entre as duas versões.
- **>>>>>>> sua-branch:** Fim do conflito (o que está vindo de fora).

---

## 🛠️ Como resolver?

1. **Abra o arquivo:** Você verá aquelas marcas estranhas de \`<<<<\`, \`====\` e \`>>>>\`.
2. **Edite manualmente:** Apague as marcas do Git e escolha qual texto deve ficar. Ou, se preferir, misture os dois!
3. **Salve o arquivo:** Deixe o código limpo, sem as marcas.
4. **Finalize:** Avise ao Git que o conflito acabou.
   \`\`\`bash
   git add index.html
   git commit -m "Resolve conflito de merge no título"
   \`\`\`

Pronto! Você sobreviveu ao maior medo de todo programador júnior. Resolver conflitos faz parte do dia a dia e, com o tempo, você fará isso em segundos.
`
  },
  exercises: [
    {
      id: 'git-04-03-q1',
      type: 'multiple_choice',
      question: 'O que causa um "Merge Conflict" no Git?',
      options: [
        'Falta de internet durante o comando merge.',
        'Quando o Git detecta que a mesma linha de um mesmo arquivo foi alterada de formas diferentes em duas branches diferentes que estão sendo mescladas.',
        'Quando você esquece de dar commit.',
        'Quando o arquivo é muito grande.'
      ],
      correctAnswer: 1,
      explanation: 'O Git consegue juntar alterações em linhas diferentes sozinho. Ele só trava quando duas alterações batem de frente no mesmo exato lugar.'
    },
    {
      id: 'git-04-03-q2',
      type: 'multiple_choice',
      question: 'Após editar manualmente os arquivos para resolver os conflitos (apagando as marcas <<<<< e >>>>>), qual o procedimento para finalizar o merge?',
      options: [
        'Basta salvar o arquivo e fechar o terminal.',
        'Rodar "git status" e esperar.',
        'Adicionar os arquivos corrigidos ao palco (git add .) e realizar um novo commit para selar a paz.',
        'Reiniciar o computador.'
      ],
      correctAnswer: 2,
      explanation: 'O commit final é o que diz ao Git: "A disputa acabou, este é o resultado final que eu escolhi".'
    }
  ]
};
