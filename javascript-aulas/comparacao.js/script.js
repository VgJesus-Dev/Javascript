//compara dois valores e retorna um booleano

const numeroA = 2;
const numeroB = 8;
console.log(numeroA < numeroB);
console.log(numeroA > numeroB);

const numeroC = 20;
const numeroD = 20;
console.log(numeroC >= numeroD);
console.log(numeroC <= numeroD);

//Comparação 
// === comparação estrita - verifica se os 2 valores são iguais em tipo e valor
// == comparação ampla - converte os 2 valores p mesmo tipo antes de realizar a comparação

const a = 2;
const b = 2;
console.log(a === b);

//converteu pro mesmo tipo
const c = 10;
const d = "10";
console.log(c == d);

//diferenciação estrita
const e = 3;
const f = 4;
console.log (e !== f);

//diferenciação ampla
const g = 1;
const h = "1";
console.log(g != h);

//empty values
let x;
let y = null;
let z = "";
console.log(x);
console.log(y);
console.log(z);