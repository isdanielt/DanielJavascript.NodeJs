const express = require("express")

let app = express()

//app.get('/', function(req, res){
  //  res.send("hello word")
//})
app.use(express.static(__dirname + "/aplicacion"))
app.get('/', function(req, res){
    res.sendFile(__dirname + "/aplicacion/index.html")
})
 
app.listen(3001)

console.log("este es mi servidor: http://localhost:3001")
