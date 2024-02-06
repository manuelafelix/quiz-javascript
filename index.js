// array com as perguntas do quiz
const perguntas = [
  {
    pergunta: "Qual é a saída do seguinte código JavaScript: console.log(2 + '2' - 1)?",
    respostas: [
      "22",
      "3",
      "21",
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'splice()' faz em JavaScript?",
    respostas: [
      "Remove elementos de um array e/ou adiciona novos elementos no lugar.",
      "Inverte a ordem dos elementos de um array.",
      "Ordena os elementos de um array em ordem alfabética.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador utilizado para atribuição de valor em JavaScript?",
    respostas: [
      "=",
      "==",
      ":=",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'reduce()' em JavaScript?",
    respostas: [
      "Executa uma função callback em cada elemento de um array, retornando um novo array com os resultados.",
      "Concatena todos os elementos de um array em uma única string.",
      "Reduz um array a um único valor, aplicando uma função acumuladora.",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'undefined' e 'null' em JavaScript?",
    respostas: [
      "'undefined' é utilizado para variáveis não inicializadas, enquanto 'null' é um valor atribuído explicitamente a uma variável para indicar que não possui valor.",
      "'undefined' e 'null' são utilizados de forma intercambiável em JavaScript.",
      "'undefined' é utilizado para valores nulos, enquanto 'null' é utilizado para variáveis não inicializadas.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método utilizado para converter uma string em letras minúsculas em JavaScript?",
    respostas: [
      "toLowerCase()",
      "toLower()",
      "lowerCase()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'filter()' faz em um array em JavaScript?",
    respostas: [
      "Retorna o primeiro elemento que satisfaça a condição especificada.",
      "Remove elementos duplicados de um array.",
      "Cria um novo array com todos os elementos que passam no teste da função fornecida.",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão 'typeof NaN' em JavaScript?",
    respostas: [
      "'number'",
      "'NaN'",
      "'undefined'",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de comparar se duas variáveis são estritamente diferentes em JavaScript?",
    respostas: [
      "!==",
      "!=",
      "<>",
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Verifica se dois valores são iguais em valor, mas não necessariamente do mesmo tipo.",
      "Verifica se dois valores são iguais em valor e tipo.",
      "Verifica se dois valores são diferentes em valor e tipo.",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

// laço de repetição para os itens do quiz 
for (const item of perguntas) {
  // clona todos os nós dentro de template (incluindo os filhos da div)
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  // laço de repetição para as respostas 
  for (let resposta of item.respostas) {
    // clona os filhos de dt (input e span)
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;

    // seleciona o description list e adiciona dt como filho
    quizItem.querySelector('dl').appendChild(dt);
  }
  // remove o elemento dt da página, já que foi feita uma cópia e adicionada a description list, anteriormente 
  quizItem.querySelector('dl dt').remove();
  
  quiz.appendChild(quizItem);
}