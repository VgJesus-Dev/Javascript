// Javascript:
// Variáveis
//exibindo um número na tela (o console log faz aparecer algo na tela):

console.log(2);

//exibindo o tipo de dado na tela
console.log(typeof 2.5);

//declarando constante e imprimindo
const meunumero = 10;
console.log(meunumero);

//erro ao alterar a constante:
const numero = 5;
//numero = 3;
console.log(numero);

//quando eu declaro nomes, estou declarando strings, string é entre aspas
console.log("Estou aprendendo Javascript");
console.log("Continue a aprendizagem");

//contagem de strings
const nome = "Carlos Cunha";
console.log(nome.length);

//string de numeros
const valores = "579";
console.log (valores);
console.log(typeof valores);

//pular uma linha da string
console.log("Vou pular a linha \n R$50,00");

//espaçamento entre as strings
console.log("Espaçamento na \t string");

//variaveis var e let
//var para escopo global
//let para escopo local
var numero1 = 5;
numero1 = 3;
console.log(numero1);

let numero2 = 10;
numero2 = 3;
console.log(numero2);


/*interpolação: forma de inserir valores de variaveis em strings
feita utilizando crase com chaves
*/ 

const sobrenome = "Silva";
console.log (`Olá, ${sobrenome}`); //não é aspas.

const idade = 21;
console.log(`Sua idade é ${idade} anos`);

console.log(`Seu sobrenome é ${sobrenome}, sua idade é ${idade}`);