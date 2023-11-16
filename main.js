const navItems = document.querySelector(".nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

const openNav = () => {
  navItems.style.display = "flex";
  closeNavBtn.style.display = "inline-block";
  openNavBtn.style.display = "none";
};

const closeNav = () => {
  navItems.style.display = "none";
  closeNavBtn.style.display = "none";
  openNavBtn.style.display = "inline-block";
};
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
