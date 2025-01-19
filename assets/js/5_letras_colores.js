
/* Llamamos a keydown desde el globalthis */
document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A"){
        let element = document.querySelector("#key");
        element.style.backgroundColor = "pink"
    }else if (event.key === 's' || event.key === 'S'){   
        let element = document.querySelector("#key");
        element.style.backgroundColor = "orange"
    }else if (event.key === 'd' || event.key === 'D'){   
        let element = document.querySelector("#key");
        element.style.backgroundColor = "cyan"
    }else if (event.key === 'q' || event.key === 'Q'){
        crearDivGris()
    }else if (event.key === 'w' || event.key === 'W'){
        crearDivCafe()
    }else if (event.key === 'e' || event.key === 'E'){
        crearDivNaranjo()
    }
})
// Función Normal para 
function crearDivGris (){
    let contendor = document.querySelector("body");
    let nuevodiv = document.createElement("div")
        nuevodiv.style.width = "200px";
        nuevodiv.style.height = "200px";
        nuevodiv.style.backgroundColor = "grey"
        nuevodiv.style.display = "inline-block"
        contendor.appendChild(nuevodiv);

}

const crearDivCafe = function (){
    let contendor = document.querySelector("body");
    let nuevodiv = document.createElement("div")
        nuevodiv.style.width = "200px";
        nuevodiv.style.height = "200px";
        nuevodiv.style.backgroundColor = "brown"
        nuevodiv.style.display = "inline-block"
        contendor.appendChild(nuevodiv);
}

const crearDivNaranjo = ()=> {
    let contendor = document.querySelector("body");
    let nuevodiv = document.createElement("div")
        nuevodiv.style.width = "200px";
        nuevodiv.style.height = "200px";
        nuevodiv.style.backgroundColor = "orange";
        nuevodiv.style.display = "inline-block"
        contendor.appendChild(nuevodiv);
}

