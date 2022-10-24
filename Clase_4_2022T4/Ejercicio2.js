//Escribe un programa que pida una frase y escriba las vocales que aparecen.//
const prompt = require("prompt");

prompt.start();

prompt.get(["valor"], function(error, resultado){
    const valor = resultado.valor;
    let conteoVocales = 0;

    for(let i = 0; i <= valor.length; i++){
        if (valor[i] === "aeiou"){
            conteoVocales = conteoVocales + 1;
        }
    }
            console.log("la palabra " + valor + " tiene " + conteoVocales + " como vocales")

        })