import { Lesson } from '../../../../types/academy';

export const lesson0901: Lesson = {
  id: 'ps-09-01',
  title: 'Lidando com Dados: CSV e JSON',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Arquivos CSV (Comma Separated Values) são as famosas planilhas do Excel em formato de texto.',
    'JSON é o formato universal da internet. Quase toda API moderna "conversa" usando JSON.'
  ],
  content: {
    markdown: `
# 📊 Trabalhando com Planilhas (CSV)

No mundo corporativo, muita coisa é controlada via planilhas. Se o RH te manda uma lista de 500 novos funcionários no Excel para criar contas, você não vai fazer isso à mão. Você exporta para **.csv** e usa o PowerShell!

O comando mágico aqui é o **\`Import-Csv\`**. Ele não apenas lê o texto, mas transforma CADA LINHA da planilha em um **Objeto** rico do PowerShell!

\`\`\`powershell
# usuarios.csv:
# Nome,Cargo,Departamento
# Joao,Analista,TI
# Maria,Gerente,RH

$lista = Import-Csv -Path "C:\\usuarios.csv"

# Agora podemos fazer um loop mágico:
foreach ($pessoa in $lista) {
    Write-Host "Criando conta para: $($pessoa.Nome)"
    Write-Host "Setor: $($pessoa.Departamento)"
}
\`\`\`

**E para salvar dados numa planilha?**
Basta pegar qualquer lista de objetos e jogar no pipe para o **\`Export-Csv\`**.

\`\`\`powershell
# Gera um CSV com todos os processos rodando no seu PC agora!
Get-Process | Select-Object Name, CPU, Memory | Export-Csv -Path "C:\\processos.csv" -NoTypeInformation
\`\`\`
*(A dica de ouro é sempre usar \`-NoTypeInformation\`, senão o PowerShell insere uma linha técnica feia no topo do seu CSV).*

---

## 🌐 O Formato da Internet: JSON

Se você for integrar seu script com APIs na web, AWS, Azure, ou até mesmo com o ChatGPT, os dados virão no formato **JSON**.

O JSON é estruturado através de "chaves" (parecido com as HashTables do Módulo 5).
Para lidar com ele, temos dois comandos muito amigáveis:
- **\`ConvertFrom-Json\`**: Pega um texto JSON e transforma em Objeto do PowerShell.
- **\`ConvertTo-Json\`**: Pega Objetos do PowerShell e transforma em texto JSON.

\`\`\`powershell
# Imagine que uma API te devolveu este texto:
$textoJson = '{ "nome": "Marina", "idade": 25 }'

# Convertendo para objeto:
$objeto = $textoJson | ConvertFrom-Json

# Agora você acessa com o ponto, como se fosse um dicionário local!
Write-Host "Acesso concedido para: $($objeto.nome)"
\`\`\`

---

## 📝 Resumo Rápido

- **Import-Csv**: Pega um arquivo \`.csv\` do seu PC e converte as linhas em Objetos com propriedades.
- **Export-Csv**: Pega objetos da memória e gera um arquivo \`.csv\` legível pelo Excel.
- **ConvertFrom-Json**: Pega um texto cru no padrão JSON e "hidrata" como Objeto para você trabalhar.
- **ConvertTo-Json**: Formata seus dados para você enviá-los a alguma API na web.
`
  },
  exercises: [
    {
      id: 'ps-09-01-q1',
      type: 'multiple_choice',
      question: 'Ao usar o comando Import-Csv "C:\\dados.csv", o que o PowerShell retorna?',
      options: [
        'Apenas um grande texto cru com todas as vírgulas e aspas.',
        'Um erro se você não tiver o Microsoft Excel instalado.',
        'Uma coleção (array) de Objetos, onde cada coluna do CSV se tornou uma "Propriedade" que você pode acessar facilmente.',
        'Um arquivo JSON.'
      ],
      correctAnswer: 2,
      explanation: 'Essa é a magia do PowerShell em relação a outros shells. Ele transforma as colunas de texto em propriedades reais (ex: $item.Nome, $item.Preco).'
    },
    {
      id: 'ps-09-01-q2',
      type: 'multiple_choice',
      question: 'Ao gerar um arquivo CSV com o "Export-Csv", qual parâmetro costumamos adicionar para evitar que o PowerShell suje o arquivo com metadados estranhos na primeira linha?',
      options: [
        '-Clean',
        '-NoTypeInformation',
        '-Force',
        '-RemoveHeaders'
      ],
      correctAnswer: 1,
      explanation: 'O parâmetro -NoTypeInformation impede que o PowerShell coloque aquela linha técnica "#TYPE System.Management.Automation.PSCustomObject" no topo da sua planilha.'
    }
  ]
};
