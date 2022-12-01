const express = require("express");
let app = express();
const path = require("path")

app.use("/Assets", express.static(path.resolve(__dirname, "Assets")));
app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname, "vistas", "index.html"));
});
app.get('/curriculum', function(req, res){
        res.sendFile(path.resolve(__dirname, "vistas", "curriculum.html"));
});
app.get('/maqueta', function(req, res){
        res.sendFile(path.resolve(__dirname, "vistas", "maqueta.html"));
});
app.get('/tarea1', function(req, res){
        res.sendFile(path.resolve(__dirname, "vistas", "tarea1.html"));
});
app.get('/formulario', function(req, res){
        res.sendFile(path.resolve(__dirname, "vistas", "formulario.html"));
});



app.listen(3005);

console.log("puerto de proyecto http://localhost:3005")