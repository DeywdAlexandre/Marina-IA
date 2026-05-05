import { Lesson } from '../../../../types/academy';

export const lesson0901: Lesson = {
  id: 'git-09-01',
  title: 'O Perfil Magnético (README Especial)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Para criar esse README, você deve criar um repositório com o EXATO mesmo nome do seu usuário do GitHub.',
    'Você pode usar ferramentas como o "GitHub Profile Readme Generator" para criar designs incríveis sem saber nada de design.'
  ],
  content: {
    markdown: `
# 🎨 Seu Cartão de Visitas Mundial

Você sabia que o GitHub permite que você crie uma "capa" personalizada para o seu perfil? É o primeiro lugar onde um recrutador ou outro desenvolvedor olha quando visita sua conta.

Se você criar um repositório com o **exato mesmo nome do seu usuário**, o GitHub vai exibir o \`README.md\` desse projeto diretamente na sua página de perfil.

---

## 🔥 O que colocar no seu README?

1. **Apresentação:** "Olá, eu sou a Marina, desenvolvedora Full Stack apaixonada por IA."
2. **Tecnologias:** Use ícones (badges) para mostrar o que você sabe (React, Node, Python, Git).
3. **Estatísticas:** Existem serviços gratuitos que geram gráficos automáticos dos seus commits e linguagens mais usadas.
4. **Links:** Seus contatos, LinkedIn e portfólio.

---

## 🛠️ Como fazer?

1. No GitHub, clique em **New Repository**.
2. No nome, digite o seu **username** (Ex: se seu usuário é \`marina-dev\`, o nome do projeto deve ser \`marina-dev\`).
3. O GitHub vai mostrar uma mensagem: *"You found a secret!"*.
4. Marque a opção **"Add a README file"**.
5. Edite o arquivo e veja a mágica acontecer no seu perfil!
`
  },
  exercises: [
    {
      id: 'git-09-01-q1',
      type: 'multiple_choice',
      question: 'Qual o "segredo" para ativar o README especial no perfil do GitHub?',
      options: [
        'Pagar o GitHub Pro.',
        'Criar um repositório público com o nome exatamente igual ao seu nome de usuário do GitHub.',
        'Mandar um e-mail para o suporte.',
        'Dar 100 estrelas em outros projetos.'
      ],
      correctAnswer: 1,
      explanation: 'Este é o famoso "Profile README". Uma funcionalidade que transforma seu perfil em um portfólio dinâmico.'
    }
  ]
};
