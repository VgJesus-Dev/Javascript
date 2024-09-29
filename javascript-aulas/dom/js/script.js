// DOM movimentando-se nele
//console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1].childNodes);

// propriedade para acessar o elemento do título
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Para corrigir o retorno dos filhos do nó, sem os espaços em branco do texto
//utilize a linha de comando abaixo
// o Header estará na posição 0, main na posição 1 e footer na 2
console.log(document.body.children);

//alterando para children, agora ele mostra o conteúdo do texto do footer na posição real (posição 2)
console.log(document.body.children[2].childNodes[1].textContent);

//selecionando por tags
const listadeItens = document.getElementsByTagName("li");
console.log(listadeItens);

//selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

//selecionando elementos por classe
const produtos = document.getElementsByClassName("produtos");
console.log(produtos);

//insertBefore, neste caso cria um novo paragrafo e insere antes do h1 titulo.
const paragrafo = document.createElement("p");
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);

//appendChild, neste caso cria um novo item de lista e add no final da lista.
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild, neste caso crio um h2 e subtitui pelo h1 com id titulo, novo titulo será novo titulo.
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";
header.replaceChild(h2, titulo);

//criando um nó de texto
const meuTexto = document.createTextNode("Inserindo outro título");
console.log(meuTexto);

const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);
//header.replaceChild(h3, titulo); //?fazer em casa

//set Attribut e getAttribut, aqui seleciona o primeiro link na nav e altera seu href.
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);

primeiroLink.setAttribute("href", "https://www.uol.com.br");

//pegando o link alterado, imprime o href do primeiro link no console.
console.log(primeiroLink.getAttribute("href"));

//abrir em uma nova aba, altera o link para abrir em uma nova aba.
primeiroLink.setAttribute("target", "_blank");

//altura e largura, imprime a largura e altura do elemento footer no console.
const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getBoudingClientRect,  imprime as coordenadas e dimensões do primeiro elemento com a classe "produtos".
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());

//css com js, altera a cor do texto e o fundo do contêiner principal.
const mainCss = document.getElementById("main-container");
mainCss.style.color = "red";
mainCss.style.backgroundColor = "#000";
mainCss.style.paddingBottom = "100px";

//HTML Collection
//fazend um loop no li e alterando a cor de fundo, altera a cor de fundo de todos os itens de lista para amarelo.

for(const li of listadeItens){
    li.style.backgroundColor = "yellow";
}