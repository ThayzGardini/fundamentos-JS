// parametros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parametro X argumentos

// ordem dos parametros
function nomeIdade(nome, idade){
return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(34, 'Thayz'));

//usando uma function dentro de outra function
function soma2(soma1, soma2){
    return soma1 + soma2
}
                   //9      , 6 
                   // =1     , =1 como default(padrao), caso não receba o numero joga 1 para que não de erro.   
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma2(4, 5), soma2(3, 3)));
console.log(multiplica(soma2(4, 5))); //exemplo que usou o valor default

//boas praticas, é passar poucos argumentos para a função, se tiver mtos argumentos melhor quebrar em mais funções.