//1 -- forma declarativa de função:
function apresentar(nome){
    return `Meu nome é ${nome}`;
}
console.log('Thayz 1');

//2 -- forma expressao de função, outra forma de escrever funções
// na forma EXPRESSAO de função, a função nao possui nome e temos uma varivel const
const apresentar2 = function(nome){return `Meu nome é ${nome}`};
console.log('Thayz 2');

//apesar de serem mto semelhantes tomar cuidado pois algumas vezes podem nao ter o mesmo comportamento;
// A maior diferente entre a declaração de função X expressao de função é que a DECLARADA eu posso chamar o console.log 
//em qlqr lugar antes ou apos a declaração, já na expressao NÃO, na expressao só funciona o console.log ABAIXO da expressao ou seja
// só funciona apos ela ser lida, pois na expressao se usa a variavel que ainda não foi criada se chamar o console.log ANTES.

//3 -- função arrow-function
// mto parecida com a forma expressao porem utliza uma "flecha", não precisa usar o return, se tiver mais de uma linha ai sim utiliza o return e a chaves {} 3 exemplo
//o sinal da flecha é bem parecido com o sinal do operador MAIOR OU IGUAL QUE  >= porem o arrow-function é ao contrario =>
const apresentar3 = nome => `mue nome é ${nome}`;
console.log('Thayz 3');

//outro exemplo de arrow-function
const soma = (num1, num2) => num1 + num2;
console.log(soma(1, 6));

//3 exemplo com mais instruções utiliza o return e { chaves }
const somaNumeros = (num1, num2) => {
    if( num1 || num2 > 10){     //se num1 OU num2 for MAIOR que 10
      return "Somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}


//1-declaração de função - mais entendivel 
//2-expressao de função
//3-arrow-function - cod mais curto/ vantagens qndo utiliza objetos




