const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
  hamburger.classList.toggle("hamburger_active");
});

menu.addEventListener("click", function (e) {
  if (e.target.closest(".menu_link")) {
    menu.classList.toggle("active");
    hamburger.classList.toggle("hamburger_active");
  }
});
