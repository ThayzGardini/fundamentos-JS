const idadeMinima = 18;
const idadeCliente = 17;

if (idadeCliente >= idadeMinima){
    console.log('Pode beber cerveja!')
}else{
    console.log('Não pode beber cerveja!')
}

//usando operador ternario
const idadeMinima2 = 18;
const idadeCliente2 = 19;
             //condição         separador ?  //true                :  //false
console.log(idadeCliente2 >= idadeMinima2 ? 'Pode beber cerveja2!' : 'Não pode beber cerveja2!')

//existe a possibilidade de aparecerem em codigos ternarios assim como exemplo, porem com varias condições
//uma dentro da outra, isso não é usual.

//fazer comparações mais curtas usar o ternario é uma boa pratica, porém para mais comparações uma dentro da outra, boas praticas
//utiliza a estrutura de ifs mesmo.
