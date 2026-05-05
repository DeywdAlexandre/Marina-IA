import { Lesson } from '../../../../types/academy';

export const lesson0801: Lesson = {
  id: 'ps-08-01',
  title: 'Segurando as Pontas: Try, Catch e Finally',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Na vida real de TI, arquivos desaparecem, a rede cai e servidores reiniciam. Seu script precisa saber lidar com isso sem "explodir" na tela do usuário.',
    'O Try/Catch é o airbag do seu código: se bater, ele amortece o impacto e te deixa assumir o controle.'
  ],
  content: {
    markdown: `
# 💥 O Problema dos Erros

Imagine que seu script tem 100 linhas. Na linha 2, ele tenta copiar um arquivo que **não existe**. O que acontece? 

Por padrão, o PowerShell exibe um texto vermelho gigante (o erro) e **continua executando** o resto do script como se nada tivesse acontecido! Isso pode causar um desastre (ex: apagar a pasta errada na linha 3 porque a linha 2 falhou).

Para evitar que o script exploda e para assumir o controle do erro, usamos o bloco **\`Try / Catch\`** (Tentar / Capturar).

---

## 🛡️ A Estrutura Try / Catch

A lógica é simples:
1. **Try (Tente):** "PowerShell, tente executar esse bloco de código perigoso."
2. **Catch (Capture):** "Se algo der errado lá dentro, PARE IMEDIATAMENTE e venha para este bloco para eu decidir o que fazer."

\`\`\`powershell
try {
    Write-Host "Tentando ler um arquivo secreto..."
    # O comando abaixo vai falhar de propósito
    Get-Content "C:\\Caminho\\Invalido\\Senha.txt" -ErrorAction Stop
    
    # Se der erro na linha acima, ESTA LINHA NUNCA SERÁ EXECUTADA:
    Write-Host "Leitura concluída com sucesso!"
}
catch {
    Write-Host "Ops! Deu ruim. O arquivo não existe ou você não tem acesso."
}
\`\`\`

> ⚠️ **MUITO IMPORTANTE:** Percebeu o \`-ErrorAction Stop\` no código acima? Falaremos muito sobre ele na próxima lição, mas entenda desde já: o \`Try/Catch\` só funciona para os chamados **"Erros Fatais"** (Terminating Errors). O PowerShell não considera "arquivo não encontrado" um erro fatal, então precisamos forçá-lo a parar usando esse parâmetro, senão o \`Catch\` será ignorado!

---

## 🕵️ Descobrindo O QUE deu errado ($_)

Quando você cai dentro do bloco \`catch\`, o PowerShell te dá um presente: a variável automática **\`$_\`** (que já vimos no Pipeline). 

Dentro de um \`catch\`, a variável \`$_\` contém **o objeto de erro exato** que causou o problema!

\`\`\`powershell
try {
    Remove-Item "C:\\ArquivoImportante.txt" -ErrorAction Stop
}
catch {
    Write-Host "Não foi possível deletar o arquivo!"
    Write-Host "Motivo técnico: $($_.Exception.Message)"
}
\`\`\`

---

## 🧹 A Limpeza Final: Finally

Às vezes, não importa se o código deu certo (Try) ou deu errado (Catch), você precisa fazer uma "limpeza" no final — como fechar a conexão com o banco de dados ou deletar arquivos temporários. 

Para isso serve o **\`finally\`**. Ele **sempre** é executado, aconteça o que acontecer.

\`\`\`powershell
try {
    Write-Host "Conectando ao banco de dados..."
    # Simula um erro
    $resultado = 10 / 0
}
catch {
    Write-Host "Erro durante o cálculo!"
}
finally {
    Write-Host "Desconectando do banco de dados (Sempre rodo!)."
}
\`\`\`

---

## 📝 Resumo Rápido

- **Try**: Bloco onde você coloca o código que pode falhar.
- **Catch**: Bloco de resgate. Só executa se o \`try\` der erro (fatal).
- **$_ no Catch**: Contém a mensagem e os detalhes técnicos do erro.
- **Finally**: Roda no final de tudo, independentemente de ter dado erro ou não.
`
  },
  exercises: [
    {
      id: 'ps-08-01-q1',
      type: 'multiple_choice',
      question: 'O que o bloco "finally" faz em uma estrutura de tratamento de erros?',
      options: [
        'Ele só é executado se o bloco Try funcionar perfeitamente.',
        'Ele só é executado se o bloco Catch for ativado.',
        'Ele é executado SEMPRE, independentemente de ter ocorrido um erro ou não. Excelente para limpezas e fechamento de arquivos.',
        'Ele finaliza o PowerShell, fechando a tela preta.'
      ],
      correctAnswer: 2,
      explanation: 'O finally é a garantia de encerramento do PowerShell. Deu certo? Roda o finally. Deu erro? Roda o finally do mesmo jeito.'
    },
    {
      id: 'ps-08-01-q2',
      type: 'multiple_choice',
      question: 'Se você colocar o comando: Write-Host "Olá" logo DEPOIS de uma linha que dá erro dentro de um bloco TRY, o que acontece?',
      options: [
        'O "Olá" é impresso na tela e depois ele vai pro Catch.',
        'O PowerShell imprime "Olá" na cor vermelha.',
        'A linha do Write-Host nunca é executada. Assim que ocorre o erro, a execução "pula" imediatamente para dentro do Catch.',
        'O script entra em loop infinito.'
      ],
      correctAnswer: 2,
      explanation: 'A essência do Try/Catch é que o Try é abortado no exato milissegundo em que o erro ocorre, e a execução é desviada para o Catch.'
    }
  ]
};
