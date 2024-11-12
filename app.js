let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function clicouConsole() {
    console.log("O botão foi clicado!");
}

function clicouAlert() {
    alert("Eu amo JS");
}

let cidade;

function clicouPrompt() {
    cidade = prompt("Digite uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

let numeroUm;
let numeroDois;
let soma;

function clicouSoma() {
    numeroUm = Number(prompt("Digite um número"));
    numeroDois = Number(prompt("Digite outro número"));
    soma = numeroUm + numeroDois;
    alert(soma);
}