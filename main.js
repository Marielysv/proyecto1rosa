//variables 
const btn = document.querySelector("btn");

//evento
btn.addEventListener("mouseover", cambiarColor);


//funcion cambiar color
function cambiarColor(){
     btn.classList.add("bg-ff9a76");
     btn.classList.remove("btn");
     console.log('listo');
}
