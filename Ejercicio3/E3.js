// Ejercicio 3

// Ejercicio 3

const arr = [1, 2, 3, 4];

function sumaProducto(arr) {
    let producto = arr.reduce((resultado, elemento) => { 
        return resultado * elemento;
    }, 1);

    let suma = arr.reduce((resultado, elemento) => {
        return resultado + elemento;
    }, 0);

    console.log(`La suma es ${suma}.`);
    console.log(`El producto es ${producto}.`);
}

sumaProducto(arr);