/*  Script base */

function pintar1(color="green"){
    ele.style.backgroundColor = "color"
}
 
const ele = document.getElementById("ele1"); 


//ele.addEventListener("click",  pintar1('yellow'));  

// Ejercicio script 1
let elemento = document.querySelector("#ele1");
elemento.addEventListener("click",()=>{
    elemento.style.backgroundColor = "yellow"
})

/* EJERCICIO 4_colores */

// Capturamos caja1 y el evento cambiandolo a negro con una función flecha
let caja1 = document.querySelector("#contenedor1");
caja1.addEventListener('click',()=>{
    caja1.style.backgroundColor = "black"
})

// Capturamos caja2 y el evento cambiandolo a negro con una función flecha
let caja2 = document.querySelector("#contenedor2");
caja2.addEventListener('click',()=>{
    caja2.style.backgroundColor = "black"
})

// Capturamos caja3 y el evento cambiandolo a negro con una función flecha
let caja3 = document.querySelector("#contenedor3");
caja3.addEventListener('click',()=>{
    caja3.style.backgroundColor = "black"
})

// Capturamos caj4 y el evento cambiandolo a negro con una función flecha
let caja4 = document.querySelector("#contenedor4");
caja4.addEventListener('click',()=>{
    caja4.style.backgroundColor = "black"
})

