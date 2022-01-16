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




//Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões 
//de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões
// de forma explícita. Não é comum usar o operador de soma para fazer a conversão para
// números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados,
// mas são possíveis.

//OUTRA MANEIRA de converter para numero usando +
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

//CONVERSAO DE BOOLEAN PARA NUMERO
//SABEMOS que 0 é false e 1 é true dentro do JS
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.