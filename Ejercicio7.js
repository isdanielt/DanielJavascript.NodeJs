let prompt = require("prompt");

prompt.start

prompt.get(['numero'], function (error, resultado){
    let numero = +resultado.numero

    if (numero % 2 === 0) {
        console.log("numero es divisible por 2");
    }

    else { 
        console.log("numero no es divisible por 2")
    }
})
