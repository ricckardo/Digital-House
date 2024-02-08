let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];


//Convierte a mayúsculas
function uppercase(arreglo){
    for( let i=0; i < arreglo.length;i++){
        arreglo[i]= arreglo[i].toUpperCase();
    }
}

uppercase(peliculas);
console.log(peliculas);