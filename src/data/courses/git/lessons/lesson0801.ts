import { Lesson } from '../../../../types/academy';

export const lesson0801: Lesson = {
  id: 'git-08-01',
  title: 'Hospedagem Gratuita (GitHub Pages)',
  type: 'mixed',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=FmS_fS6L68Q',
  videoTitle: 'Colocando seu site no ar com GitHub Pages (Aula 11) - Curso em Vídeo',
  tips: [
    'O GitHub Pages só funciona para sites estáticos (HTML, CSS e JavaScript).',
    'Seu site ficará disponível em um endereço como: https://seu-usuario.github.io/seu-repositorio/'
  ],
  content: {
    markdown: `
# 🌍 O Mundo vai ver seu Código

Você aprendeu a versionar, a salvar na nuvem e a trabalhar em equipe. Mas o seu site ainda é apenas um monte de arquivos de texto que só você vê. E se você pudesse mandar um link para sua mãe, seu amigo ou um recrutador e eles vissem o site funcionando de verdade?

O **GitHub Pages** é um serviço gratuito que transforma o seu repositório Git em um site de verdade hospedado na internet.

---

## 🏗️ Como o GitHub lê o seu site?

O segredo está em uma branch especial chamada **\`gh-pages\`**.
Quando o GitHub vê uma branch com esse nome (ou quando você configura a master para isso), ele entende que deve pegar o arquivo \`index.html\` e transformá-lo na página inicial do seu site.

---

## ⚙️ Configurando em 3 Cliques

Você não precisa de nenhum comando de terminal complexo para ativar o básico:
1. Vá nas **Settings** (Configurações) do seu repositório no GitHub.
2. No menu lateral, clique em **Pages**.
3. Em "Branch", selecione a sua branch principal (master/main) e a pasta \`/(root)\`.
4. Clique em **Save**.

Em poucos minutos, o GitHub vai te dar um link oficial (HTTPS!) para o seu projeto. É mágico, é grátis e é profissional.

> 🎓 **Créditos:** Veja o vídeo do Professor Guanabara para ver ele fazendo esse processo passo a passo na tela!
`
  },
  exercises: [
    {
      id: 'git-08-01-q1',
      type: 'multiple_choice',
      question: 'O que é o GitHub Pages?',
      options: [
        'Um serviço pago de hospedagem de bancos de dados.',
        'Uma ferramenta que permite hospedar sites estáticos (HTML/CSS/JS) diretamente do seu repositório do GitHub de forma gratuita.',
        'Um editor de imagens online.',
        'O nome da página de login do GitHub.'
      ],
      correctAnswer: 1,
      explanation: 'O GitHub Pages é a forma mais rápida e barata (grátis!) de colocar seu portfólio no ar.'
    }
  ]
};
