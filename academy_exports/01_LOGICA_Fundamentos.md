# 📘 MARINA ACADEMY: Fundamentos - A Base de Tudo
> Entenda como o computador armazena informações e aprenda a manipular variáveis e tipos de dados fundamentais.

---

## Aula 1: O que são Variáveis? (As Caixas da Memória)

### 📖 Explicação Teórica

# 📦 O que são Variáveis?

Imagine que você está organizando sua mudança. Você pega uma caixa, coloca seus livros dentro e escreve na etiqueta: **"livros"**. 

Na programação, uma **variável** funciona exatamente assim. É um espaço na memória do computador onde guardamos uma informação e damos um nome a ela para podermos usar depois.

---

## 🛠️ Criando sua primeira variável

No JavaScript (a linguagem que vamos usar para aprender lógica), usamos a palavra-chave `let` para criar uma "caixa" que pode ter seu conteúdo trocado.

```javascript
let nome = "Marina";
let idade = 25;

console.log(nome);
console.log(idade);
```

Aqui, criamos duas variáveis: uma chamada `nome` que guarda o texto "Marina" e outra chamada `idade` que guarda o número 25.

---

## 🔒 Variáveis que não mudam (Constantes)

Às vezes, você tem uma informação que **nunca** deve mudar, como o seu CPF ou o valor de PI. Para isso, usamos o `const`.

```javascript
const nascimento = 1998;
// Se tentarmos mudar 'nascimento' depois, o computador dará um erro!
```

---

## 🚀 Hora de Praticar!

Abra o **Editor** no botão acima e tente criar uma variável com o seu nome e outra com a sua cidade. Use o `console.log` para exibir os valores!


### 💻 Exemplos de Código

#### Exemplo de Variáveis
```javascript
let heroi = "Batman";
let city = "Gotham";

console.log("O herói é: " + heroi);
console.log("Ele mora em: " + city);
```
*Explicação: Usamos o sinal de + para juntar (concatenar) textos com variáveis.*

### 💡 Dicas de Especialista
- Pense em uma variável como uma caixa com uma etiqueta.
- No JavaScript, usamos "let" para coisas que mudam e "const" para coisas que ficam fixas.


---

## Aula 2: Tipos de Dados (O que cabe na caixa?)

### 📖 Explicação Teórica

# 🔡 Tipos de Dados

Não colocamos sopa em uma caixa de papelão, certo? Cada tipo de conteúdo precisa do recipiente adequado. Na programação, o computador precisa saber que **tipo** de informação está guardada na variável para saber o que fazer com ela.

Os tipos mais comuns são:

---

## 1. Strings (Textos)
Qualquer sequência de letras, números ou símbolos envolta em aspas.
```javascript
let saudacao = "Olá, Mundo!";
```

---

## 2. Numbers (Números)
Números inteiros ou com vírgula (usamos ponto no lugar da vírgula).
```javascript
let preco = 29.90;
let quantidade = 10;
```

---

## 3. Booleans (Verdadeiro ou Falso)
Representam estados binários. Sim ou Não.
```javascript
let estaLogado = true;
let temDesconto = false;
```

---

## 🧪 Por que isso importa?

Se você tentar somar dois números, o resultado será matemático: `10 + 10 = 20`.
Se você tentar somar dois textos, o resultado será uma junção: `"10" + "10" = "1010"`.

Teste isso agora mesmo no **Editor de Código**!


### 💻 Exemplos de Código

#### Diferença de Tipos
```javascript
let num1 = 10;
let num2 = 10;
console.log("Soma de Números:", num1 + num2);

let txt1 = "10";
let txt2 = "10";
console.log("Soma de Textos:", txt1 + txt2);
```
*Explicação: O sinal de + soma números, mas junta (concatena) strings.*

### 💡 Dicas de Especialista
- Textos sempre devem estar entre aspas: "assim" ou 'assim'.
- Números não usam aspas.
- Booleanos são como um interruptor: ligado (true) ou desligado (false).


---


*Gerado automaticamente pela Marina IA — 05/05/2026*
