import { Lesson } from '../../../../types/academy';

export const lesson0802: Lesson = {
  id: 'git-08-02',
  title: 'Seu Primeiro Site no Ar',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O arquivo principal do seu site DEVE se chamar index.html (tudo em minúsculo).',
    'Toda vez que você der um "git push", o seu site na internet será atualizado automaticamente em alguns minutos.'
  ],
  content: {
    markdown: `
# 🚀 Decolagem Concluída

Agora que você ativou o GitHub Pages, você tem um superpoder: o **CI/CD** (Integração e Entrega Contínua) básico.

---

## 🔄 O Ciclo de Atualização

Sempre que você quiser mudar algo no seu site ao vivo:
1. Altere o código no seu computador.
2. Dê um \`git add .\`
3. Dê um \`git commit -m "Melhora o design do cabeçalho"\`
4. Dê um \`git push\`

**BOOM!** O GitHub vai perceber que o código mudou, vai rodar um robozinho (GitHub Actions) e atualizar o seu site na internet sem que você precise mexer em nenhuma configuração de servidor.

---

## 🎨 Dicas para o seu Portfólio

- Use o GitHub Pages para hospedar seus exercícios de HTML/CSS.
- Crie um repositório chamado \`usuario.github.io\` (substituindo pelo seu nome de usuário) para ter um site com link curto e profissional.
- Lembre-se: nada de pastas com nomes estranhos. O \`index.html\` precisa estar na "cara do gol" (na raiz da pasta).

---

## 🎓 Conclusão da Jornada Prática

Você saiu do zero, aprendeu a bater fotos do código, viajou no tempo, enfrentou conflitos e agora tem um site no ar. Você não é mais um curioso, você agora entende a ferramenta que move a internet. 

Prepare-se para o **Quiz de Formatura** na próxima lição!
`
  },
  exercises: [
    {
      id: 'git-08-02-q1',
      type: 'multiple_choice',
      question: 'Após ativar o GitHub Pages, o que você precisa fazer para que uma alteração feita no seu PC apareça no site online?',
      options: [
        'Precisa desativar e ativar o Pages de novo.',
        'Precisa pagar uma taxa de atualização.',
        'Basta realizar o fluxo normal de Git (add, commit e push). O GitHub atualizará o site automaticamente ao receber os novos arquivos.',
        'Precisa mandar um e-mail para o suporte do GitHub.'
      ],
      correctAnswer: 2,
      explanation: 'Essa é a beleza do Git + GitHub: o seu repositório vira o controle remoto do seu servidor.'
    }
  ]
};
