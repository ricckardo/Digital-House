let vehiculo = 'moto';
let litrosConsumidos = 24;

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro;
    let total = 0;
    if (litrosConsumidos >=0 && litrosConsumidos <= 25) {
        total += 50;
    }

    else if (litrosConsumidos >25) {
        total += 25;
    }

    if (vehiculo === "coche") {
        precioPorLitro = 86;
    }

    else if (vehiculo === "moto") {
        precioPorLitro = 70;
    }

    else if (vehiculo === "autobus") {
        precioPorLitro = 55;
    }

    total += precioPorLitro * litrosConsumidos;

    return total;

}


console.log(totalAPagar(vehiculo, litrosConsumidos));