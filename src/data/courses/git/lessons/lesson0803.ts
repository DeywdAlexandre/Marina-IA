import { Lesson } from '../../../../types/academy';

export const lesson0803: Lesson = {
  id: 'git-08-03',
  title: '🎓 Exame de Formatura: O Ninja do Versão',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Este é o teste final. Responda com calma. Releia as lições anteriores se precisar.',
    'Um Ninja não é aquele que nunca erra, mas aquele que sabe usar o Git para consertar qualquer erro.'
  ],
  content: {
    markdown: `
# 🎓 Parabéns, Recruta!

Você chegou ao final da trilha **"Git e GitHub: O Ninja do Versão"**. 

Nesta jornada, nós cobrimos:
- **Fundamentos:** Init, Add, Commit.
- **Histórico:** Log, Status, Diff, Show.
- **Segurança:** .gitignore.
- **Reversão:** Restore, Reset, Revert.
- **Trabalho em Equipe:** Branches, Merge, Conflicts.
- **Nuvem:** Push, Pull, Clone, Fork, PRs.
- **Avançado:** Stash, Cherry-pick, Rebase.
- **Deploy:** GitHub Pages.

Este exame final vai testar se você está pronto para encarar um projeto real em uma empresa de tecnologia. Se você passar com mais de 70%, receberá o selo de **Ninja do Versão** na Marina Academy!

---

## 🏆 O Desafio Final

Responda às questões abaixo para provar o seu valor. Boa sorte!
`
  },
  exercises: [
    {
      id: 'git-08-03-q1',
      type: 'multiple_choice',
      question: 'Um desenvolvedor sênior te pede para "limpar o histórico da sua branch local antes do merge para que fique linear". Qual comando ele espera que você use?',
      options: [
        'git merge --clean',
        'git rebase master',
        'git checkout master',
        'git reset --hard'
      ],
      correctAnswer: 1,
      explanation: 'O Rebase é a ferramenta por excelência para criar históricos lineares e limpos.'
    },
    {
      id: 'git-08-03-q2',
      type: 'multiple_choice',
      question: 'Qual o fluxo COMPLETO e correto para contribuir com um projeto Open Source de terceiros?',
      options: [
        'Clone -> Edit -> Push',
        'Fork -> Clone -> Branch -> Commit -> Push -> Pull Request',
        'Download ZIP -> Edit -> Email para o dono',
        'Git init -> Git remote add -> Git push'
      ],
      correctAnswer: 1,
      explanation: 'Este é o "Caminho do Guerreiro" no GitHub. Fork para copiar, PR para sugerir.'
    },
    {
      id: 'git-08-03-q3',
      type: 'multiple_choice',
      question: 'Se você deletar a pasta oculta ".git" do seu projeto, o que acontece?',
      options: [
        'O código é deletado.',
        'O site sai do ar.',
        'O projeto deixa de ser um repositório Git e todo o histórico de versões e commits é perdido para sempre (mas os arquivos atuais permanecem).',
        'O Git faz um backup automático.'
      ],
      correctAnswer: 2,
      explanation: 'A pasta .git É o cérebro do repositório. Sem ela, o Git não lembra de nada do passado.'
    },
    {
      id: 'git-08-03-q4',
      type: 'multiple_choice',
      question: 'Qual o comando usado para ver quem escreveu cada linha de um arquivo e quando foi feito?',
      options: [
        'git log --author',
        'git blame <arquivo>',
        'git show --lines',
        'git status --detail'
      ],
      correctAnswer: 1,
      explanation: 'Embora o nome pareça agressivo ("culpar"), o git blame é essencial para entender o contexto e a autoria de cada linha de código.'
    },
    {
      id: 'git-08-03-q5',
      type: 'multiple_choice',
      question: 'Qual a diferença entre a Staging Area e o Working Directory?',
      options: [
        'Não há diferença.',
        'Working Directory é onde você digita o código; Staging Area (Palco) é onde você seleciona quais mudanças entrarão na próxima foto (commit).',
        'Staging Area é o GitHub; Working Directory é o seu PC.',
        'Staging Area é para arquivos grandes.'
      ],
      correctAnswer: 1,
      explanation: 'O palco permite que você selecione exatamente o que quer salvar, dando flexibilidade ao seu trabalho.'
    }
  ]
};
