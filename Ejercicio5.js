const prompt = require('prompt');

prompt.start();
    
console.log("ingrese 2 numeros");

prompt.get (["numero1", "numero2"], function(error, resultado) {
   
    let numero1 = +resultado.numero1
    let numero2 = +resultado.numero2

        if (numero1 > numero2) {
         console.log("la variable 'numero1' es mayor a la variable 'numero2'")
        }
        if (numero1 < numero2) {
        console.log("la variable 'numero1' es menor a la variable 'numero2'")
        }
        if (numero1===numero2) {
        console.log("la variable numero1 es igual a la variable numero2")
        }
        
        });

        