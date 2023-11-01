let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    let result = arr.join(' ');
    console.log(result);
}

printOutString();

// Usando for y condicionales

let resultFor = '';
for (let i = 0; i < arr.length; i++) {
    resultFor += arr[i];
    if (i < arr.length - 1) {
        resultFor += ' ';
    }
}

console.log(resultFor);
