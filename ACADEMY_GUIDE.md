# 🎓 Marina Academy — Guia de Criação de Cursos e Módulos

Este documento ensina como adicionar novos cursos, módulos e lições à Marina Academy usando a estrutura já existente.

---

## 📁 Estrutura de Diretórios

```
src/
├── types/
│   └── academy.ts              ← Tipos TypeScript (Course, Module, Lesson, Exercise)
├── data/
│   └── courses/
│       ├── index.ts             ← Catálogo geral (lista de todos os cursos)
│       └── powershell/          ← Pasta do curso de PowerShell
│           ├── index.ts         ← Definição do curso + imports dos módulos
│           ├── module01.ts      ← Módulo 1 (agrupa lições)
│           ├── module02.ts      ← Módulo 2
│           ├── module03.ts      ← Módulo 3
│           └── lessons/         ← Pasta das lições
│               ├── lesson0101.ts
│               ├── lesson0102.ts
│               ├── lesson0103.ts
│               ├── lesson0201.ts
│               └── ...
├── components/
│   └── academy/
│       ├── AcademyScreen.tsx    ← Tela principal / catálogo de cursos
│       ├── CourseView.tsx       ← Visão do curso com módulos expansíveis
│       ├── LessonView.tsx       ← Experiência da lição (step-by-step)
│       ├── ModuleQuizView.tsx   ← Quiz de revisão ao final de cada módulo
│       ├── ExerciseBlock.tsx    ← Renderiza exercícios (quiz + code challenge)
│       ├── AiTutor.tsx          ← Mini-chat contextualizado com IA
│       └── TerminalSimulator.tsx← Simulador de terminal PowerShell
└── services/
    └── storageService.ts        ← Persistência de progresso (localStorage)
```

---

## 🔄 Fluxo Completo para Adicionar Conteúdo

### Cenário 1: Adicionar uma nova LIÇÃO a um módulo existente

#### Passo 1: Criar o arquivo da lição

Crie o arquivo em `src/data/courses/<curso>/lessons/lessonXXYY.ts` onde XX = módulo, YY = lição.

```typescript
import { Lesson } from '../../../../types/academy';

export const lesson0104: Lesson = {
  id: 'ps-01-04',            // Formato: <curso>-<modulo>-<licao>
  title: 'Título da Lição',
  type: 'mixed',              // 'theory' | 'practice' | 'mixed'
  estimatedMinutes: 20,
  
  // (Opcional) Vídeo complementar do YouTube
  videoUrl: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  videoTitle: 'Título do Vídeo — Canal',
  
  // (Opcional) Dicas exibidas ANTES do conteúdo
  tips: [
    'Dica 1 para o aluno',
    'Dica 2 para o aluno',
  ],

  content: {
    markdown: `
# Título Principal da Lição

Texto introdutório...

---

## Seção 2

Conteúdo da seção 2...

\`\`\`powershell
Get-Process
\`\`\`

> Blockquote vira card de dica com ícone 💡

---

## Seção 3

| Coluna 1 | Coluna 2 |
|----------|----------|
| dado     | dado     |

---

## 📝 Resumo da Lição

- Ponto 1
- Ponto 2
`,
    // (Opcional) Exemplos de código com saída esperada
    codeExamples: [
      {
        title: 'Título do exemplo',
        language: 'powershell',
        code: 'Get-Date',
        output: 'domingo, 04/05/2025 19:30:00',
        explanation: 'Explicação opcional do exemplo'
      }
    ]
  },

  // Exercícios de fixação
  exercises: [
    // Quiz de múltipla escolha
    {
      id: 'ps-01-04-q1',
      type: 'multiple_choice',
      question: 'Pergunta aqui?',
      options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
      correctAnswer: 1,  // Índice 0-based (1 = Opção B)
      explanation: 'Explicação de por que essa é a resposta correta'
    },
    // Desafio de código (avaliado pela IA)
    {
      id: 'ps-01-04-code1',
      type: 'code_challenge',
      question: 'Escreva um comando que...',
      codePrompt: 'Instrução detalhada do que fazer.',
      expectedOutput: 'Resposta esperada / comando esperado',
      hint: 'Dica para ajudar',
      starterCode: '# Seu código aqui\n'
    }
  ]
};
```

#### Passo 2: Registrar no módulo

Edite `src/data/courses/<curso>/moduleXX.ts`:

```typescript
import { lesson0104 } from './lessons/lesson0104';  // Adicionar import

export const module01: CourseModule = {
  // ...
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
    lesson0104,  // Adicionar aqui
  ]
};
```

**Pronto!** A lição aparece automaticamente no app.

---

### Quiz de Módulo (Portão entre Módulos)

Cada módulo tem um **quiz de revisão** que aparece como a **última "aula"** do módulo (ex: se tem 3 lições, o quiz é a 1.4). O quiz:
- **Bloqueia o próximo módulo** até o aluno ser aprovado (mín. 70%)
- **Usa estrutura genérica** — só precisa dos dados no `module.quiz`
- Exibe feedback visual (✅ correto / ❌ errado + explicação)
- Permite retry infinito se reprovar

Para adicionar um quiz, inclua o campo `quiz` no arquivo `moduleXX.ts`:

```typescript
export const module01: CourseModule = {
  // ... lições ...
  quiz: {
    passingScore: 70,  // Nota mínima (0-100). Padrão: 70
    questions: [
      {
        id: 'quiz-01-q1',
        question: 'Qual é a pergunta?',
        options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
        correctAnswer: 1,  // Índice 0-based (1 = Opção B)
        explanation: 'Explicação da resposta correta'
      },
      // ... mais perguntas (recomendado: 5)
    ]
  }
};
```

**Regras de bloqueio:**
- Módulo 1 → sempre desbloqueado
- Módulo 2 → desbloqueado quando quiz do Módulo 1 é aprovado
- Módulo N → desbloqueado quando quiz do Módulo N-1 é aprovado
- Se módulo não tem quiz, basta completar todas as lições para desbloquear o próximo

**Convenções de ID:** `quiz-XX-qY` onde XX = módulo, Y = número da pergunta.

> 💡 **DICA DE DESENVOLVEDOR:** Para testar os módulos durante a criação sem precisar passar por todos os quizzes, abra o arquivo `src/components/academy/CourseView.tsx` e altere a constante `DEV_DISABLE_LOCKS = true`. Lembre-se de voltar para `false` ao final!

---

### Cenário 2: Adicionar um novo MÓDULO a um curso existente

#### Passo 1: Criar as lições (veja Cenário 1)

#### Passo 2: Criar o arquivo do módulo

Crie `src/data/courses/<curso>/moduleXX.ts`:

```typescript
import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';

export const module04: CourseModule = {
  id: 'ps-mod-04',
  title: 'Navegação e Arquivos',
  description: 'Aprenda a navegar entre pastas, criar, copiar e ler arquivos.',
  icon: '📂',               // Emoji que aparece no card do módulo
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
  ]
};
```

#### Passo 3: Registrar no curso

Edite `src/data/courses/<curso>/index.ts`:

```typescript
import { module04 } from './module04';  // Adicionar import

export const powershellCourse: Course = {
  // ...
  modules: [
    module01,
    module02,
    module03,
    module04,  // Adicionar aqui
  ]
};
```

---

### Cenário 3: Criar um NOVO CURSO completo

#### Passo 1: Criar a pasta do curso

```
src/data/courses/python/
├── index.ts
├── module01.ts
└── lessons/
    ├── lesson0101.ts
    └── lesson0102.ts
```

#### Passo 2: Criar o arquivo principal do curso

`src/data/courses/python/index.ts`:

```typescript
import { Course } from '../../../types/academy';
import { module01 } from './module01';

export const pythonCourse: Course = {
  id: 'python-zero-avancado',
  title: 'Python: Do Zero ao Avançado',
  description: 'Aprenda Python do zero...',
  icon: '🐍',
  color: '#3776AB',          // Cor do card
  difficulty: 'beginner',    // 'beginner' | 'intermediate' | 'advanced'
  estimatedHours: 60,
  tags: ['Python', 'Programação', 'Automação'],
  modules: [module01]
};
```

#### Passo 3: Registrar no catálogo geral

Edite `src/data/courses/index.ts`:

```typescript
import { powershellCourse } from './powershell';
import { pythonCourse } from './python';    // Novo import

export const allCourses = [
  powershellCourse,
  pythonCourse,              // Adicionar aqui
];
```

---

## 📝 Regras para Conteúdo de Qualidade

### Separadores de seção (`---`)
O `LessonView` **automaticamente divide** o markdown por `---` em "steps". Cada `---` cria um novo step na barra de progresso.

```markdown
# Título      ← Step 1 (com título)

Conteúdo...

---            ← Separador = novo step

## Seção 2     ← Step 2

Conteúdo...

---            ← Separador = novo step

## Seção 3     ← Step 3
```

### Ordem dos steps automáticos:
```
[Dicas] → [Vídeo] → [Seção 1] → [Seção 2] → ... → [Exemplos] → [Exercícios] → [Concluir]
```

### Headings renderizados:
- `# H1` → Texto grande com barra gradiente abaixo
- `## H2` → Texto com barra lateral azul
- `### H3` → Texto bold menor

### Elementos especiais no markdown:
- `> texto` → Card de dica com ícone 💡
- `` `código` `` → Inline code verde
- ` ```powershell ``` ` → Bloco com header "PowerShell", dots coloridos e botão copiar
- `| col | col |` → Tabela premium com zebra striping

### Convenções de nomenclatura:
- IDs de lição: `ps-XX-YY` (curso-módulo-lição)
- IDs de exercício: `ps-XX-YY-q1` (quiz) ou `ps-XX-YY-code1` (code challenge)
- Nomes de arquivo: `lessonXXYY.ts`, `moduleXX.ts`

---

## 💻 Terminal Simulator — Adicionando Comandos

O simulador fica em `src/components/academy/TerminalSimulator.tsx`. Para adicionar novos comandos:

```typescript
// No objeto SIMULATED_OUTPUTS:

// Saída estática
'get-service': `\nStatus   Name...\n`,

// Saída dinâmica (função)
'get-date': () => {
  const now = new Date();
  return `\n${now.toLocaleDateString()}\n`;
},

// Para pipeline (use o comando inteiro normalizado em lowercase)
"get-service | where-object status -eq 'running'": `\n...saída filtrada...\n`,
```

**Regras:**
- A chave deve ser o comando **em lowercase** e com espaços normalizados
- Para `__CLEAR__`, o terminal limpa em vez de mostrar saída
- Para comandos com pipe, use o comando inteiro como chave
- Funções permitem saídas dinâmicas (dados aleatórios, data real, etc.)

---

## ✅ Checklist de Verificação

Depois de criar novo conteúdo, verificar:

### 1. Compilação
```bash
# O dev server deve estar rodando sem erros
npm run dev
```

### 2. Teste Visual no Browser
1. Abrir `http://localhost:5000`
2. Clicar no botão 🎓 no header
3. Clicar no curso
4. Verificar que o novo módulo aparece
5. Clicar na primeira lição do novo módulo
6. Navegar por TODOS os steps (Continuar/Continuar/...)
7. Verificar:
   - ✅ Headings renderizam com estilo correto
   - ✅ Tabelas têm zebra striping e header azul
   - ✅ Code blocks têm dots coloridos e botão copiar
   - ✅ Blockquotes viram cards de dica
   - ✅ Exercícios aparecem e funcionam (selecionar resposta + verificar)
   - ✅ Step indicators no topo progridem corretamente
   - ✅ Progress bar avança
   - ✅ Botão "Marcar como Concluída" funciona
   - ✅ Terminal Simulator abre e responde comandos
   - ✅ Chat da Marina (AiTutor) abre

### 3. Teste de Progressão
1. Completar uma lição
2. Voltar para a visão do curso
3. Verificar que o indicador de progresso atualizou (✅ verde)
4. Verificar que a contagem "X/Y" atualizou

### 4. Teste Mobile (responsividade)
1. Redimensionar a janela para ~375px de largura
2. Verificar que o conteúdo não quebra
3. Verificar que a navegação funciona

---

## 🎯 Dicas para Conteúdo Rico

1. **Comece do zero** — assuma que o aluno não sabe nada
2. **Use analogias** — compare com coisas do dia a dia
3. **Não seja superficial** — explique O QUE, POR QUE e COMO
4. **Exercícios variados** — misture quiz e code challenge
5. **Tabelas comparativas** — ajudam muito na memorização
6. **Blockquotes para dicas** — destacam informações importantes
7. **Código com explicação** — todo bloco de código deve ter contexto
8. **Resumo ao final** — recapitular os pontos principais
9. **Vídeos complementares** — buscar no YouTube em PT-BR
10. **Terminal Simulator** — adicionar comandos relevantes para cada módulo

---

## 📊 Status Atual do Curso PowerShell

| Módulo | Lições | Status |
|--------|--------|--------|
| 1 — Introdução ao PowerShell | 3 | ✅ |
| 2 — Comandos Essenciais | 3 | ✅ |
| 3 — Pipeline e Objetos | 3 | ✅ |
| 4 — Navegação e Arquivos | 3 | ⏳ |
| 5 — Variáveis e Tipos | 3 | ⏳ |
| 6 — Controle de Fluxo | 3 | ⏳ |
| 7 — Funções e Scripts | 3 | ⏳ |
| 8 — Tratamento de Erros | 2 | ⏳ |
| 9 — Automação Prática | 3 | ⏳ |
| 10 — Projeto Final | 3 | ⏳ |
| BÔNUS — Limpeza do PC | 3 | ⏳ |
