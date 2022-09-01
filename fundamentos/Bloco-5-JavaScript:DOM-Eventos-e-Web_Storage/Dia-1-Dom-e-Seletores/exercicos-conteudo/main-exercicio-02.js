//Adicione uma classe igual para os dois parágrafos.
//Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
let paragrafos = document.getElementsByClassName("texts");
let title = document.getElementsByTagName("h2");

//Altere algum estilo do primeiro deles.
paragrafos[0].style.color = "blue"

//Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
title[0].style.color = "darkgreen"

//recuperando elemento pelo querySelector
let titleId = document.querySelector("#page-title");

let titleClass = document.querySelector(".texts")
console.log(titleClass)
