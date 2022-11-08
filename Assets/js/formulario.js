
const express = require("express")

let app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.listen(3008);

console.log("el puerto es http://localhost:3008");

