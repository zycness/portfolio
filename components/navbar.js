const btnMenu = document.querySelector(".navbar-btn");
const NavBar = document.querySelector(".navbar-group");
const navLinks = document.querySelectorAll(".navbar-link-a");

addEventListener("DOMContentLoaded", () => {
  btnMenu.addEventListener("click", () => {
    NavBar.classList.toggle("displayNB");
  });

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      if (NavBar.classList.contains("displayNB")) {
        NavBar.classList.toggle("displayNB");
      }
    });
  });
});
