ScrollReveal().reveal('.nav-main');
ScrollReveal().reveal('.showcase', { delay: 500 });
ScrollReveal().reveal('.Title-and-subtitle', { delay: 500 });
ScrollReveal().reveal('.Noticia', { delay: 500 });
ScrollReveal().reveal('.twitter-link', { delay: 500 });


// Obtén el elemento en el que quieres que se haga clic
var link = document.getElementById("link");

// Agrega un event listener para detectar el clic
link.addEventListener("click", function(event) {
// Evita el comportamiento predeterminado del enlace (no seguir el enlace)
event.preventDefault();

// Redirecciona a la URL deseada
window.location.href = "https://es-la.facebook.com/help/668969529866328/?helpref=uf_share";
});