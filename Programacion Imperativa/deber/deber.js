const prompt = require("prompt-sync")({ sigint: true });

let producto = "Pan";
let cantidad;
cantidad = prompt('Ingrese la cantidad: ');
console.log("Cantidad: " + cantidad);

const precio_unitario = 5;
console.log("El precio unitario es: " + precio_unitario);
let pago = 20;
let cambio = pago - precio_unitario*cantidad;

console.log('El cambio es: ' + cambio);
