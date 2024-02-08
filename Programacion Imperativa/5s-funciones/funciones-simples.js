const prompt = require("prompt-sync")({ sigint: true });

numero = 0;

let numero= parseInt(prompt("Ingrese numero "));

function numeroSiguientes (numero) {
    for (let i = numero + 1; i <= numero + 10; i++) {
        console.log(i);
    }
}

