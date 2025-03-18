//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let elementoListaAmigos = document.getElementById("listaAmigos");

    if (amigo.value.trim() === "") {
        alert("Por favor, insira um nome.");
    return;
    }

    if (listaAmigos.includes(amigo.value)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(amigo.value);

    if (elementoListaAmigos.textContent === "") {
        elementoListaAmigos.textContent = amigo.value;
    } else {
        elementoListaAmigos.textContent += ", " + amigo.value;
    }

    amigo.value = "";
}