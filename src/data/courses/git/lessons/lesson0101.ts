import { Lesson } from '../../../../types/academy';

export const lesson0101: Lesson = {
  id: 'git-01-01',
  title: 'O que é Git e GitHub?',
  type: 'mixed',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=xEKOcB2MvRc',
  videoTitle: 'Curso de Git e GitHub (Aula 01) - Curso em Vídeo',
  tips: [
    'Git NÃO é a mesma coisa que GitHub. Essa é a confusão número 1 dos iniciantes.',
    'O Git foi criado por Linus Torvalds, a mesma pessoa que criou o Linux, porque ele precisava de uma ferramenta melhor para organizar o código do sistema operacional.'
  ],
  content: {
    markdown: `
# 🐙 O Fim da "Cópia da Cópia"

Você já fez um trabalho escolar ou projeto em equipe onde os arquivos ficaram assim?
- \`projeto_final.docx\`
- \`projeto_final_agora_vai.docx\`
- \`projeto_final_corrigido_joao.docx\`

Isso é o caos. Quando você trabalha com códigos de computador, um único projeto pode ter milhares de arquivos de texto. Se dois programadores editarem o mesmo arquivo ao mesmo tempo e tentarem salvar, um vai sobrescrever e apagar o trabalho do outro.

É para isso que serve o Controle de Versão.

---

## 💻 O que é o Git?

O **Git** é um programa de linha de comando (terminal) que você instala no seu computador.
Ele age como uma "Máquina do Tempo" para os seus arquivos.

Sempre que você termina de escrever um pedaço de código, você avisa ao Git: *"Tire uma foto (snapshot) do meu projeto agora"*.
Se amanhã você fizer uma alteração que quebre o seu projeto inteiro, você não precisa se desesperar. Basta dizer ao Git: *"Volte o projeto inteiro para aquela foto que tiramos ontem"*, e ele restaura os arquivos instantaneamente.

Além disso, o Git consegue misturar as edições de várias pessoas de forma inteligente, sem que um apague o trabalho do outro.

---

## ☁️ O que é o GitHub?

O Git mora no seu computador local. Mas e se o seu HD queimar? E se você quiser mandar o código para a sua colega de trabalho no Japão?

É aí que entra o **GitHub**.
O GitHub é basicamente um "Google Drive" ou um "Instagram" focado exclusivamente em hospedar projetos que usam o Git.

Você pega o seu histórico do Git local (da sua máquina) e envia (faz o *Push*) para os servidores do GitHub na internet. Lá, seu código fica a salvo, visível para o mundo, e permite que outros programadores baixem o seu projeto, façam melhorias e enviem de volta.

> 💡 **Resumo da Ópera:** Git é o *motor* que roda no seu terminal. GitHub é o *site* na internet que guarda o histórico gerado pelo seu motor.

---

## 🎬 Assista e Aprenda

O material de apoio desta lição traz o Professor Gustavo Guanabara (Curso em Vídeo) explicando com uma didática incrível a história de como essas tecnologias nasceram. Recomendamos fortemente a visualização!
`
  },
  exercises: [
    {
      id: 'git-01-01-q1',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre Git e GitHub?',
      options: [
        'São nomes diferentes para o mesmo programa da Microsoft.',
        'O Git é um serviço de hospedagem na nuvem. O GitHub é o aplicativo que você instala no celular.',
        'O Git é um sistema de controle de versão local (roda no seu terminal). O GitHub é um site de hospedagem na nuvem que armazena os repositórios gerenciados pelo Git.',
        'O Git serve para imagens e o GitHub serve para textos.'
      ],
      correctAnswer: 2,
      explanation: 'O Git é a ferramenta raiz. O GitHub é apenas o site que hospeda os dados dessa ferramenta. Tanto é que existem outros sites concorrentes do GitHub (como o GitLab e o Bitbucket), mas todos eles rodam o Git por baixo dos panos.'
    },
    {
      id: 'git-01-01-q2',
      type: 'multiple_choice',
      question: 'Qual problema principal o Git resolve em um ambiente corporativo de TI?',
      options: [
        'Ele compacta os arquivos como se fosse um arquivo ZIP, economizando espaço no HD.',
        'Ele impede que os computadores peguem vírus.',
        'Ele permite o versionamento seguro do código. Você tem um histórico de cada alteração feita, pode reverter erros (como uma máquina do tempo) e várias pessoas podem trabalhar nos mesmos arquivos simultaneamente sem sobrescrever o trabalho do outro.',
        'Ele traduz automaticamente o código do inglês para o português.'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! O Git acabou com a era das pastas renomeadas manualmente e dos pen-drives passados de mão em mão.'
    }
  ]
};
