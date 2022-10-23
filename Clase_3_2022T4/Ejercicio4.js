const prompt = require("prompt-sync")({sigint: true});
console.log("suma");

let numero1 = parseInt (prompt("intorduzca el primer numero: "));
let numero2 = parseInt (prompt("intorduzca el segundo numero:"));
let resultado = numero1 + numero2
console.log(resultado);

