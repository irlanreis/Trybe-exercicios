//Muda cor do Header para Green
function colorHeader (elemento, color) {
    let captura = document.querySelector(elemento).style.backgroundColor = color
}
colorHeader('#header-container', 'rgb(70, 161, 90)');

//Muda cor do Titulo de Black lado lefth 1
function colorTitleH3(element, color) {
    let recebeH2 = document.querySelector(element).style.backgroundColor = color;
}
colorTitleH3('.emergency-tasks div h3', 'black');


//Muda cor do fundo dos lados
function colorBox (elemento, cor) {
    let recebeElemento = document.querySelector(elemento).style.backgroundColor = cor
}
colorBox  ('.emergency-tasks', 'rgb(233, 130, 122' );
colorBox ('.no-emergency-tasks', '#fcd219');;

//Muda cor do Titulo de Black rigth 1
function colorTitleH3(element, color) {
    let recebeH2 = document.querySelector(element).style.backgroundColor = color;
}
colorTitleH3('.no-emergency-tasks div h3', 'black')//rigth 1;

let titleChild = document.querySelector('.no-emergency-tasks');

