// Ejercicio 2
function doubleNumbers(arr) {
    let doubledArray = arr.map(num => num * 2);
    return doubledArray;
  }
  
  let originalArray = [1, 2, 4, 5];
  let updatedArray = doubleNumbers(originalArray);
  
  console.log(updatedArray);