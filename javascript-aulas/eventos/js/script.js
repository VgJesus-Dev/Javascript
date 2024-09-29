// adicionando evento no botao
const btn = document.querySelector("#meu-botao");

// dois argumentos, tipo de evento e função que vai acontecer após clicar no evento
btn.addEventListener("click", function(){
    console.log("Clicou!")
});


// Selecionando o campo de entrada e a div de saída
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

// Adicionando o evento keydown ao campo de entrada
inputField.addEventListener("keydown", function(event){
// Exibir qual tecla foi pressionada
    output.textContent = `Você pressionou: ${event.key}`;
    });

// Adicionando o evento keyup ao campo de entrada
inputField.addEventListener("keyup", function(event){
    // Exibir qual tecla foi liberada
    output.textContent = `Você pressionou: ${event.key}`;
    });

// outros evenos de mouse
const eventosMouse = document.querySelector("#mouse");

eventosMouse.addEventListener("mousedown", () => {
    console.log("Pressione o botão do mouse");
});

eventosMouse.addEventListener("mouseup", () =>{
    console.log("Soltou o botão do mouse");
});

eventosMouse.addEventListener("dblclick", () => {
    console.log("Duplo click");
});

// Movimento do mouse
eventosMouse.addEventListener("mousemove", (e) => {
    //console.log(`Mouse no eixo X: ${e.x}`);
   //console.log(`Mouse no eixo Y: ${e.y}`); //deixamos em comentário para não ficar disparando no console as posições
});

// focus (exemplo quando você está preste a digitar e fica uma barra piscando, informando que pode digitar) e blur
const input = document.querySelector("#meu-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});