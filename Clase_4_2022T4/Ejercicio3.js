let prompt = require("prompt");

prompt.start;
prompt.get(["palabra"], function(err, result){

    let palabra = result.palabra;
    let contador = 0;

        for (let i = 0; i < palabra.length; i++){
            if ((palabra.charAt(i) === 'a') || (palabra.charAt(i) === 'e') || (palabra.charAt(i) === 'i') || (palabra.charAt(i) === 'o') || (palabra.charAt(i) === 'u')) {
                contador++;
            }
        }
        console.log("la palabra " + palabra + " contiene " + contador + " vocales");



})