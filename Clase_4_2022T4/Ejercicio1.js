let prompt = require("prompt");

prompt.start;

prompt.get(["valor"], function(err, result){
    let Conteo = 0;
    const valor = result.valor;

    for(let i = 0; i <= valor.length; i++){
        if (valor[i] === "a"){
            Conteo++
        }
    }
    console.log("se muestra "+ Conteo + " 'a'" )

})