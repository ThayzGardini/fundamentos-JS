// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy or falsy
// 0 = false
// 1 = true
// undefined = existe uma variavel declarada mas ela esta sem valor
// null = vazio / nada

//exemplo de undefined:
//let minhaVar; variavel declarada porem nao passamos nenhum valor

//exemplo de null;
//let varNull = null; atribuido já como = null

console.log(0 == false);
console.log('' == false);
console.log(1 == true);

let numero = 3;
let texto = 'Alura';
let minhaVar;
let varNull = null;
console.log(typeof numero); //typeof pra ver qual o tipo de dado q esta sendo quardado nessa variavel
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);//nesse caso não irá aparecer null e sim object pois é um bug do javaScript q nao sera arrumado



