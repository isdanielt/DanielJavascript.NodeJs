//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

let prompt = require("prompt");

prompt.start;

prompt.get(["n1"], function(err, result){
let n1 = result.n1;

if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
console.log("Es divisible por 2, 3, 5 o 7");
} else {
console.log("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
})