const palavras = [
    "JAVA",
    "PHP",
    "HTML",
    "CSS"
];

const palavra =
    palavras[Math.floor(Math.random()*palavras.length)];

let exibicao =
    Array(palavra.length).fill("_");

document.querySelector(".forca")
.innerText =
exibicao.join(" ");

function jogar(){

    let letra =
    document
    .getElementById("letra")
    .value
    .toUpperCase();

    for(let i=0;i<palavra.length;i++){

        if(palavra[i]===letra){

            exibicao[i]=letra;
        }
    }

    document.querySelector(".forca")
    .innerText =
    exibicao.join(" ");
}