//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.//

const prompt = require('prompt');

prompt.start();
console.log("cual es mayor?")
prompt.get (['numero1', 'numero2', 'numero3'], function(error, resultado){

    let numero1 = +resultado.numero1;
    let numero2 = +resultado.numero2;
    let numero3 = +resultado.numero3;
    
        if (numero1 > numero2){
            console.log("numero 1 es mayor que numero 2")
        }
        if (numero1 < numero2){
            console.log("numero 1 es menor que numero 2")
        }
        if (numero1 > numero3){
            console.log("numero 1 es mayor que numero 3")
        }
        if (numero1 < numero3){
            console.log("numero 1 es menor que numero 3")
        }
        if (numero1 === numero2){
            console.log("numero1 es igual a numero 2")
        }
        if (numero1 === numero3){
            console.log("numero 1 es igual a numero 3")
        }
            else{
                console.log("Ocurrio un error")
            }

})