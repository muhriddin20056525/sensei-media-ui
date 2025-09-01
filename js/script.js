const headerMenuBtn = document.querySelector(".header-menu");
const headerMenu = document.querySelector(".nav-list");

headerMenuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});
