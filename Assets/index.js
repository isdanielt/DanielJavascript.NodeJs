const express = require("express")

let app = express()

app.use(express.static ("."))
app.get('/', function(req, res){
    res.sendFile(__dirname + "/etiqueta/index.html")
});

app.listen(3008);

console.log("el puerto es http://localhost:3008");