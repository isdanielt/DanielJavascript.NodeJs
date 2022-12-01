//ejecutar fucion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu)

//declaramos variable
var side_menu = document.getElementById("menu__side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//evento para mostrar y ocultar menu
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move")
    }