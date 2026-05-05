import { Lesson } from '../../../../types/academy';

export const lesson0303: Lesson = {
  id: 'git-03-03',
  title: 'Desfazer Seguro (revert)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O revert não apaga a história, ele CRIA uma nova página dizendo: "Estou desfazendo o que foi feito na página X".',
    'É o comando preferido para trabalhar em equipe, pois não causa confusão nos computadores dos colegas.'
  ],
  content: {
    markdown: `
# 🛡️ Git Revert: O Jeito Profissional

O \`reset\` que vimos na aula anterior tem um problema: ele "apaga" páginas do diário. Se você já enviou o seu código para o GitHub e outras pessoas baixaram, apagar a história pode causar um caos técnico.

Para esses casos, usamos o **\`git revert\`**.

---

## 🔄 Como funciona o Revert?

Imagine que o commit \`a1b2c3d\` adicionou um botão que quebrou o site. 
Em vez de "apagar" esse commit da história, o \`revert\` cria um **NOVO commit** que faz exatamente o oposto do que o commit problemático fez.

Se o commit original adicionou 10 linhas, o commit de revert vai excluir as mesmas 10 linhas.

\`\`\`bash
# Desfaz as alterações do commit a1b2c3d criando um novo commit de "estorno"
git revert a1b2c3d
\`\`\`

---

## 📊 Reset vs Revert: A Batalha Final

| Comando | O que faz com a História? | Uso Recomendado |
|---------|---------------------------|-----------------|
| **Reset** | **Apaga** ou reescreve o passado. | Quando você está trabalhando sozinho e ainda não enviou pro GitHub. |
| **Revert** | **Adiciona** um novo capítulo desfazendo o erro. | Quando o código já está no GitHub ou você trabalha em equipe. |

> 💡 **Dica de Ouro:** Na dúvida, prefira sempre o \`revert\`. Ele é muito mais seguro e mantém o histórico íntegro para auditorias futuras.
`
  },
  exercises: [
    {
      id: 'git-03-03-q1',
      type: 'multiple_choice',
      question: 'Por que o "git revert" é considerado mais seguro que o "git reset" para projetos em equipe?',
      options: [
        'Porque ele é mais rápido.',
        'Porque o reset exige senha e o revert não.',
        'Porque o revert não apaga commits antigos; ele cria um novo commit que desfaz as alterações indesejadas, mantendo o histórico de todos os colaboradores sincronizado.',
        'Porque o revert limpa o cache do computador.'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! Reescrever o passado com Reset em um projeto compartilhado é a receita certa para dar conflitos no computador dos seus colegas.'
    },
    {
      id: 'git-03-03-q2',
      type: 'multiple_choice',
      question: 'Qual o resultado final de um comando "git revert"?',
      options: [
        'O repositório é deletado.',
        'Um novo commit é gerado no topo da história, revertendo as mudanças do commit alvo.',
        'O terminal fecha sozinho.',
        'O arquivo .gitignore é ignorado.'
      ],
      correctAnswer: 1,
      explanation: 'O Revert é um "Commit de Desfazer". Ele deixa registrado: "Houve um erro no commit X e aqui está o commit Y consertando ele".'
    }
  ]
};
