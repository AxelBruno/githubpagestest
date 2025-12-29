const btnMas = document.getElementById("linkMas");
const btnVolver = document.getElementById("linkVolver");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");

btnMas.addEventListener("click", () => {
  contenido1.classList.remove("visible");
  setTimeout(() => {
    contenido1.classList.add("hidden");
    contenido2.classList.remove("hidden");
    setTimeout(() => contenido2.classList.add("visible"), 50);
  }, 600); // tiempo igual al de la transición CSS
});

btnVolver.addEventListener("click", () => {
  contenido2.classList.remove("visible");
  setTimeout(() => {
    contenido2.classList.add("hidden");
    contenido1.classList.remove("hidden");
    setTimeout(() => contenido1.classList.add("visible"), 50);
  }, 600);
});
