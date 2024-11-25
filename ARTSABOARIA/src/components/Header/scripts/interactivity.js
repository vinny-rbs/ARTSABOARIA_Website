const hamburguer = document.querySelector('#hamburguer');
const nav = document.querySelector('nav');
console.log(hamburguer);
console.log(nav)

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));