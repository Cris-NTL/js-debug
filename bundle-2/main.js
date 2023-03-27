/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// il ciclo for determina i con valore 0, errore in i maggiore di 5

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(10));
console.log(addIfEven(7));
// funzione che restituisce un numero pari a cui somma 5 o un numero dispari senza somma, errore (if..= 0) sostituito con (if...= 0)

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
loopToFive();
// funzione che restituisce partendo da i = 0 una serie di numeri fino a 5, errore nella sintassi, virgole al posto di punto e virgola.

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

function displayEvenNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(displayEvenNumbers()); // [2,4,6,8]
// funzione che restituisce i numeri pari di un array, errori di sintassi 
// ((let i = 0; i < numbers.length - 1; i++;)) 
// (numbers % 2 = 0)
// return evenNumbers;
// if (numbers % 2 = 0);