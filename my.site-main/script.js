const menu = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("container-large");
});
