//Escribe un programa que pida una frase y escriba las vocales que aparecen.//
const prompt = require("prompt");

prompt.start();
let vocales = ("aeiou");
prompt.get(["valor"], function(error, resultado){
    let valor = resultado.valor;
    for(let i = 0; i < valor.length; i++)
         if (valor[i] === vocales[0]){
            console.log("esta palabra contiene la vocal 'a' ")
        }
        else if(valor[i] === vocales[1]){
            console.log("esta palabra contiene la vocal 'e' ")
        }
        else if(valor[i] === vocales[2]){
            console.log("esta palabra contiene la vocal 'i' ")
        }
        else if(valor[i] === vocales[3]){
            console.log("esta palabra contiene la vocal 'o' ")
        }
        else if(valor[i] === vocales[4]){
            console.log("esta palabra contiene la vocal 'u' ")
        }

        
          
        })

