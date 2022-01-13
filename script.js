//USANDO VAR - não é mais utilizado

// var altura = 5;

// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);

// var area;

//USANDO LET
// let forma = 'retangulo';
// let altura = 5;
// let comprimento =7;
// let area;

// if (forma === 'retangulo'){
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

const forma = 'triangulo';
const comprimento = 7; //const sempre valores fixos q o sistema nao ira modificar
const altura = 5;
let area; //usar let qndo o valor sempre ira variar

if(forma === 'quadrado'){
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);




