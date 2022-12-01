const miFormulario = document.getElementById("mi-formulario");

const pantalla = document.getElementById("pantalla")

miFormulario.addEventListener("submit", function(event){
    event.preventDefault()
    const ancho = miFormulario.elements.ancho.value;
    const altura = miFormulario.elements.altura.value;
    const color =  miFormulario.elements.color.value;

    pantalla.style.width = ancho + "px"
    pantalla.style.height = altura + "px"
    pantalla.style.background = color 
});

//innerhtml 

