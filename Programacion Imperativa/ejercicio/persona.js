const prompt = require("prompt-sync")({ sigint: true })

let nombre = "Victoria";
let apellido;
let mes = "15";

nombre = prompt("Ingrese su nombre: ");
mes = prompt("Ingrese el mes: ");

console.log("Nombre: " + nombre);