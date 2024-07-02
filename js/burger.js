document.querySelector(".burger-menu").addEventListener("click", () => {
  const mainNav = document.querySelector(".main-nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerLines = document.querySelectorAll(".burger-menu .line");

  mainNav.classList.toggle("nav-active");
  burgerMenu.classList.toggle("grey-background");
  burgerLines.forEach(line => line.classList.toggle("white"));
  document.body.classList.toggle("no-scroll");
});

