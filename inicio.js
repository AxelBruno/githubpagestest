const btnMas = document.getElementById("link");
const btnVolver = document.getElementById("linkVolver");
const contenido1 = document.getElementById("contenido3");
const contenido2 = document.getElementById("contenido4");

btnMas.addEventListener("click", () => {
  contenido3.classList.remove("visible");
  setTimeout(() => {
    contenido3.classList.add("hidden");
    contenido4.classList.remove("hidden");
    setTimeout(() => contenido4.classList.add("visible"), 50);
  }, 600); // tiempo igual al de la transición CSS
});

btnVolver.addEventListener("click", () => {
  contenido4.classList.remove("visible");
  setTimeout(() => {
    contenido4.classList.add("hidden");
    contenido3.classList.remove("hidden");
    setTimeout(() => contenido3.classList.add("visible"), 50);
  }, 600);
});