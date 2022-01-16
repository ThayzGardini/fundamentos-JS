//usando o simbolo de igual
// = apenas 1 simbolo é ATRIBUIÇÃO
// == usando 2 simbolos COMPARA  se é igual independente do tipo, compara APENAS se os valores sao iguais
// === usando 3 simbolos COMPARA se é identico, digitado + tipo, se é number os dois

// == comparação implicita
const numero = 5;
const texto = '5';

console.log(numero == texto);

console.log(typeof numero);
console.log(typeof texto);

// === comparação explicita
const numero2 = 5;
const texto2 = '5';

console.log(numero2 === texto2);

console.log(typeof numero2);
console.log(typeof texto2);

//Boas praticas sempre usar o === comparação explicita, 
// caso queira converter usar os conversores Number()  OU String();

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators