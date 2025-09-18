let arr = [];
/*
*Función que solicita números válidos.
*/
function requestnumbers(positionNumber) {
    let number;
    do {
        const input = prompt(`Ingresa el ${positionNumber} número a ordenar`);
        number = Number(input);
        if (isNaN(number)) {
            alert("Por favor ingresa un número válido");
        }
    } while (isNaN(number));
    return number;
}

let number1 = requestnumbers("primer");
let number2 = requestnumbers("segundo");
let number3 = requestnumbers("tercer");

/*
*Función que añade números a la lista
*/
function addList(arr,number){
    arr.push(number);
    return arr;
}

addList(arr, number1);
addList(arr, number2);
addList(arr, number3);
console.log("Lista creada:", arr);

/*
*Función que ordena los números de forma ascendente
*/
function arraySort(arr) {
    arr.sort(function(a,b) {
    return a - b; // Ordenado ascendente
    });
    return arr;
}
let ascendientList = arraySort(arr)
console.log("Lista ascendente:", ascendientList);

/*
*función que ordena descendentemente
*/
function reverseSort(arr){
arr.sort(function(a,b) {
    return b - a; // Ordenado descendente
    });
    return arr;
}
let descendientList = reverseSort(arr)
console.log("Lista descendente:", descendientList);

// Para identificar los valores a partir de la lista descendente
console.log("Número mayor: " + arr[0]);
console.log("Número central: " + arr[1]);
console.log("Número menor: " + arr[2]);
    
/*
*Función para identificar si los números son iguales
*/
function compareNumbers(arr){
let equal = arr.every(number => number === arr[0]);
if (equal == true) {
    console.log("Los números son iguales");
    }
} 
compareNumbers(arr);

