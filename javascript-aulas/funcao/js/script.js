// funções
function minhaFuncao(){ //os parenteses serve para executar a função
    console.log("Teste de Função");
}

minhaFuncao(); //chamando a função para que ela funciona, em cima apenas criei
minhaFuncao(); //posso chamar quantas vezes eu quiser a função

// Função na variável
const minhaFuncaonaVariavel = function(){
    console.log("Teste de função na variável");
}

minhaFuncaonaVariavel();

// Função por parâmetro
function funcaoParametro(txt){
    console.log(`Exibindo ${txt}`);
}

funcaoParametro("Teste de função no Parâmetro");

// Return
const a = 5;
const b = 6;
const c = 10;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma (a,b);
console.log(resultado);

console.log(soma(c,d));

// escopo aninhado
let m = 15;

function escopoAninhado(){
    let m = 30;

    if(true){
        let m = 35;

        if(true){
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado(); //quando ele entra na função ele vai executar primeiro o que está mais dentro da função, é de dentro para fora, por isso mostra o 40 primeiro.
console.log(m);


// arrow function
const quadrado = (numero) => numero * numero; //isso aqui é a mesma coisa que function valor (numero)...

console.log(quadrado(5));

// mais uma arrow function
const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x; //igual o de cima, mas de outra forma
console.log(raizQuadrada2(4));
console.log(raizQuadrada2(6));
