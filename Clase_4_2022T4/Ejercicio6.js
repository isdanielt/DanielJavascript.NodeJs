let prompt = require("prompt");

prompt.start;

prompt.get(["n1"], function(err, result){
let n1 = result.n1;

switch () {
    case n1 % 2 === 0:
    console.log(n1 + "es divisible por 2")
        break;
        
}
})
