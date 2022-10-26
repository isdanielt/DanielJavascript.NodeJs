//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let prompt = require ("prompt");

prompt.start;
console.log("ingrese una frase")

let = vocal_a=0, vocal_e=0, vocal_i=0, vocal_o=0, vocal_u=0;


prompt.get(["valor"], function(err, result){
    let valor = result.valor;
    for(let i =0; i < valor.length; i++){
        switch (valor[i]) {
            case 'a': vocal_a++; break;
            case 'e': vocal_e++; break;
            case 'i': vocal_i++; break;
            case 'o': vocal_o++; break;
            case 'u': vocal_u++; break;
        }
    }
        console.log("a:" + vocal_a );
        console.log("e:" + vocal_e )
        console.log("i:" + vocal_i )
        console.log("o:" + vocal_o )
        console.log("u:" + vocal_u )
})