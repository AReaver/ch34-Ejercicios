let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Print out all of the people in the list.
console.log("1. Personas en la lista:");
for (let person of people) {
    console.log(person);
}

// 2. retira a Dany del arreglo
let indexDani = people.indexOf("Dani");
if (indexDani !== -1) {
    people.splice(indexDani, 1);
}

// 3. retira a Juan del arreglo
let indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
    people.splice(indexJuan, 1);
}

// 4. mueve a luis del arreglo
let indexLuis = people.indexOf("Luis");
if (indexLuis !== -1) {
    let luis = people.splice(indexLuis, 1);
    people.unshift(luis[0]);
}

// 5. Agregar mi nombre al final del arreglo
let miNombre = "Alan";
people.push(miNombre);

// 6. itera el arreglo y finaliza despues de que se imprima Maria
console.log("itera el arreglo y finaliza despues de que se imprima Maria':");
for (let person of people) {
    console.log(person);
    if (person === "Maria") {
        break;
    }
}

// 7. muestra el indice donde se encuentra Maria
let indexMaria = people.indexOf("Maria");

// Imprime la actualizacion del arreglo
console.log("Indice donde se encuentra Maria:");
console.log(people);

console.log(`Indice de Maria' es ${indexMaria}.`);
