// tipo de dado
// booleanos 

//conversao IMPLICITA
// quando o JS se resolve e joga tudo pra string para tentar resolver sozinho
const numero = 456;
const numeroString = '456';

console.log(numero == numeroString);
console.log(numero + numeroString);
//usando o simbolo de igual
// = apenas 1 simbolo é ATRIBUIÇÃO
// == usando 2 simbolos COMPARA  se é igual independente do tipo, compara APENAS se os valores sao iguais
// === usando 3 simbolos COMPARA se é identico, digitado + tipo, se é number os dois


// conversao EXPLICITA
//quando a o dev faz a conversao
//Number();
//String();
//transformando uma string em numero
console.log(numero + Number(numeroString));
