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