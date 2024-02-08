

function totalAPagar(vehiculo, litrosConsumidos) {
    if (litrosConsumidos >=0 && litrosConsumidos <= 25) {
        total += 50;
    }

    else if (litrosConsumidos >25) {
        total += 25;
    }

    switch(vehiculo) {
        case 'coche':
            precioPorLitro = 86;
        break;
        case 'moto':
            precioPorLitro = 70;
        break;
        case 'autobus':
            precioPorLitro = 55;
        break;
        default:
            
    }

}