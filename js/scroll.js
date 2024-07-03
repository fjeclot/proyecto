const scrollUpBtn = document.querySelector(".btn-scroll");

const toggleVisibility = () => {
  scrollUpBtn.style.visibility = window.scrollY > 400 ? "visible" : "hidden";
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("scroll", toggleVisibility);
scrollUpBtn.addEventListener("click", scrollToTop);
