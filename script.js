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

let erros = 0;

let encontrou = false;

for(let i=0;i<palavra.length;i++){

    if(palavra[i]===letra){

        exibicao[i]=letra;

        encontrou = true;
    }
}

if(!encontrou){

    erros++;

    document
    .getElementById("erros")
    .innerText =
    "Erros: " + erros;
}

if(!exibicao.includes("_")){

    document
    .getElementById("resultado")
    .innerText =
    "VOCÊ GANHOU";
}

if(erros >= 6){

    document
    .getElementById("resultado")
    .innerText =
    "VOCÊ PERDEU";
}