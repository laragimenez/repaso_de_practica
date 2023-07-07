const boton = document.querySelector("#btn button");

console.log("boton: ", boton)

const cartel = document.querySelector("#cartel");

 const funcion = () => {
    //console.log("se apreto el boton")
    cartel.textContent = "html"
}

boton.addEventListener("click", funcion)

const css = document.querySelector("#css button");

console.log("css: ", boton)

const pantalla = document.querySelector("#pantalla");

 const fucion = () => {
    //console.log("se apreto el boton")
    pantalla.textContent = "css"
}

boton.addEventListener("click", fucion)



