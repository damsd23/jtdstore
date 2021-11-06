/* Ocultar menu */

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        this.document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
        this.document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamientoActual;
})


//Menu
let hamburguesa = document.querySelectorAll(".hamburger")[0];
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let bandera = true;


document.querySelectorAll(".hamburger")[0].addEventListener("click", function () {
    enlacesHeader.classList.toggle("menudos")


    if (bandera) {
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        bandera = false;
    } else {
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        bandera = true;
    }
})


window.addEventListener("click", e => {


    if (enlacesHeader.classList.contains("menudos") && e.target != enlacesHeader && e.target != hamburguesa) {
        enlacesHeader.classList.toggle("menudos")
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        bandera = true;
    }
})