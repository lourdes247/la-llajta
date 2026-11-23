
// MENU DE NAVEGACION

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", function() {

        menu.classList.toggle("active");

        const abierto = menu.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", abierto);

        menuBtn.innerHTML = abierto ? "✕" : "☰";

    });


    // CERRAR MENU AL SELECCIONAR UNA OPCION

    const enlaces = document.querySelectorAll(".menu a");

    enlaces.forEach(function(enlace) {

        enlace.addEventListener("click", function() {

            menu.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.innerHTML = "☰";

        });

    });

}


// MENSAJE DE BIENVENIDA

console.log("Bienvenidos al restaurante La Llajta");
console.log("Tradición y sabor cochabambino");
