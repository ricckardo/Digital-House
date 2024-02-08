const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 1
let uno = 1;
let dos = 2;
let tres = 3;

function evaluacion (uno, dos, tres) {
    var total = '';

    // Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
    if (uno > dos) {
        total = dos * tres;
    }

    // Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
    if (dos % 2 === 0) {
        total = (dos + ' es par');
    }

    // Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
    if ((uno + dos + tres) % 3 === 0 ) {
        total = ('La suma de estos tres numeros es multiplo de 3');
    }

    return total;
}

console.log(evaluacion(uno, dos, tres));

// Ejercicio 2
let usuario = {
    nombre: 'Ricardo',
    apellido: 'Rosero',
    edad: 36,
    estaEmpleado: true,
    verificacion: function() {

        //Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga: [nombre] [apellido] está empleado y es mayor de edad.
        if (usuario.edad > 18 && usuario.estaEmpleado) {
            return usuario.nombre + ' ' + usuario.apellido + ' esta empleado y es mayor de edad';
        }

        // Si es mayor de edad pero no está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y es mayor de edad.
        else if (usuario.edad > 18 && !usuario.estaEmpleado) {
            return usuario.nombre + ' ' + usuario.apellido + ' NO esta empleado y es mayor de edad'; 
        }

        // Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y NO es mayor de edad.
        else {
            return usuario.nombre + ' ' + usuario.apellido + ' NO esta empleado y NO es mayor de edad'; 
        }
    }
};

console.log(usuario.verificacion());

//Ejercicio 3


let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]

// Eliminar el último elemento del arreglo
autos.pop();
console.log(autos);

// Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos
let autosNuevos = [];

for (let i = 0; i < autos.length; i++) {
     if (autos[i].anio > 2019) {
        autosNuevos.push(autos[i]);
    }
}

console.log(autosNuevos);