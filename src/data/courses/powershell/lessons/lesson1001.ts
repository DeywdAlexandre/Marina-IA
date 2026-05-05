import { Lesson } from '../../../../types/academy';

export const lesson1001: Lesson = {
  id: 'ps-10-01',
  title: 'O Desafio: Auditoria e Backup (Planejamento)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Nunca comece a programar um script complexo abrindo o editor de código. Comece com um papel ou bloco de notas.',
    'Divida o problema gigante em pequenos problemas que você sabe resolver.'
  ],
  content: {
    markdown: `
# 🏆 O Seu TCC em PowerShell

Parabéns! Você chegou ao módulo final da sua trilha de PowerShell. Até aqui você aprendeu comandos soltos, lógicas, loops e tratamentos de erro. Agora, vamos juntar tudo isso para construir um **Projeto Real e Útil** que você vai usar na sua vida profissional.

### 🎯 O Problema do Mundo Real
Todo profissional de TI e todo usuário avançado enfrenta o mesmo pesadelo:
1. Esquecer de fazer backup de arquivos importantes.
2. O disco do computador ficar cheio do nada, travando o sistema.

Nossa missão é criar o script **MarinaHealthCheck.ps1**.

### ⚙️ Os Requisitos do Nosso Robô
O que o nosso script deverá fazer automaticamente quando rodar?

1. **Geração de Relatório de Saúde:** Verificar quanto espaço livre existe no Disco C: e avisar se estiver crítico (abaixo de 10%).
2. **Backup Inteligente:** Pegar todos os arquivos da pasta "Projetos" e criar um arquivo \`.zip\` compactado com a data de hoje, salvando em uma pasta "Backups".
3. **Registro de Atividades (Log):** Salvar um histórico do que aconteceu (sucesso ou falha) em um arquivo \`.txt\` para podermos auditar depois.
4. **Tratamento de Erros:** Se a pasta de Projetos não existir, o script não pode travar. Ele deve gerar um erro amigável no Log e abortar o processo com segurança.

---

## 🧩 Dividir para Conquistar (O Algoritmo)

A regra de ouro da programação: **Não tente escrever o script inteiro de uma vez.** Vamos criar o "esqueleto" (pseudo-código) usando apenas comentários!

Abra o seu editor e escreva a estrutura do pensamento:

\`\`\`powershell
# 1. Definir Variáveis de Configuração (Pastas de origem, destino, etc)

# 2. Iniciar o arquivo de Log com a Data/Hora atual

# 3. Bloco TRY principal para segurança
try {
    # 3.1. Verificar o espaço do Disco C:
    
    # 3.2. Checar se a pasta de Origem (Projetos) existe
    
    # 3.3. Se existir, fazer a compactação (ZIP) para o destino
    
    # 3.4. Registrar Sucesso no Log
} 
# 4. Bloco CATCH para lidar com problemas
catch {
    # 4.1. Registrar o Erro técnico no Log
}
\`\`\`

Esse é o mapa do tesouro. Quando você estrutura o código assim antes de digitar os comandos, o nível de estresse cai para zero. Você só precisa preencher as lacunas!

---

## 📝 Resumo Rápido

- A construção de projetos reais começa com o **levantamento de requisitos** (o que precisa ser feito).
- Projetos robustos sempre envolvem **Variáveis centralizadas** (para fácil edição), **Logs** (para auditoria) e **Tratamento de Erros** (para confiabilidade).
- O uso de "Pseudo-código" usando os comentários (\`#\`) do PowerShell é a melhor estratégia para não se perder na lógica.
`
  },
  exercises: [
    {
      id: 'ps-10-01-q1',
      type: 'multiple_choice',
      question: 'Qual é a melhor prática recomendada antes de começar a digitar comandos complexos de um script longo?',
      options: [
        'Procurar um script pronto no Google e rodar sem ler',
        'Escrever o "esqueleto" da lógica usando comentários (#) para dividir o problema grande em etapas menores.',
        'Desligar o antivírus',
        'Fazer tudo em uma única linha no terminal para poupar espaço'
      ],
      correctAnswer: 1,
      explanation: 'O pseudo-código (esqueleto em comentários) organiza a sua mente e transforma uma tarefa assustadora em pequenos passos lógicos que você já aprendeu.'
    },
    {
      id: 'ps-10-01-q2',
      type: 'multiple_choice',
      question: 'No planejamento do nosso Projeto Real, qual é o principal papel do arquivo de LOG?',
      options: [
        'Acelerar a execução do script no processador',
        'Limpar a memória RAM',
        'Servir como um histórico (auditoria) para que possamos saber, horas ou dias depois, se a automação funcionou com sucesso ou qual foi o erro exato que a impediu.',
        'Ocupar espaço no disco'
      ],
      correctAnswer: 2,
      explanation: 'Scripts rodam sozinhos (geralmente de madrugada). Sem um arquivo de log (texto) documentando o que aconteceu, você fica "cego" sobre a saúde do seu sistema.'
    }
  ]
};
