let prompt = require("prompt");

prompt.start;

prompt.get(["n1"], function(err, result){
let n1 = result.n1;

    if (n1 % 2 === 0){
    console.log("es dicvisible entre 2")}

    else if (n1 % 3 === 0){
        console.log("es divisible entre 3")}
       
    else if (n1 % 5 === 0){
        console.log("es divisible entre 5")}

    else if (n1 % 7 === 0){
        console.log("es divisible entre 7")}   
    else{
        console.log("No es divisible ni por 2, ni por 3, ni por 5, ni por 7")
    }})   
