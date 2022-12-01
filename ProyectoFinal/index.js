const express = require("express");
let app = express();

app.use(express.static ("Assets"));
app.get('/', function(req, res){
        res.sendFile(__dirname + "/Assets/index.html")
});

app.listen(3005);

console.log("puerto de proyecto http://localhost:3005")