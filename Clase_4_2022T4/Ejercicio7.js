//Escribir un programa que escriba en pantalla los divisores de un número dado.
let prompt = require("prompt");

prompt.start

prompt.get(["n1"], function(err, result){
    let n1 = result.n1
    for(let i = 1; i <= n1/2; i++){
        if(n1 % i === 0){
            console.log(i + " son su divisores")
        }
    }

})