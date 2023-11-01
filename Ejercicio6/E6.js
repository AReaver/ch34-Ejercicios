// Realizar una función que realice el algoritmo de burbuja.
// Entrada [3, 6, 12, 5, 100, 1 ]
// Salida [1, 3, 5, 6, 12, 100]

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let entrada = [3, 6, 12, 5, 100, 1];
let salida = bubbleSort(entrada);

console.log(salida);
