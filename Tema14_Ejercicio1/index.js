let boton = document.querySelector("button")

boton.addEventListener("click", () => alert("Funciona el click!"))

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})