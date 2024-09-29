/*Objeto do console exibe mensagens
.log - exibe mensagem no console*/

//.warn - mensagem de aviso
console.warn("Atenção: Aviso!");

//.error - mensagem de erro 
console.error("Ocorreu erro");

//.info - mensagem informativa 
console.info("Informativa");

//.group - cria grupo de mensagens
console.group("mensagens de teste");
console.log("Atente-se ao passo 1");
console.log("Execute o passo 2");
console.log("Execute o passo final");
//.groupEnd - finaliza grupo de mensagens
console.groupEnd();

//.clear() - limpa console
//console.clear();