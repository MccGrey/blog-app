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

const sidebar = document.querySelector("aside");
const showSidebarBtn = document.querySelector("#show__sidebar-btn");
const hideSidebarBtn = document.querySelector("#hide__sidebar-btn");

const showSidebar = () => {
  sidebar.style.left = "0";
  showSidebarBtn.style.display = "none";
  hideSidebarBtn.style.display = "inline-block";
};

const hideSidebar = () => {
  sidebar.style.left = "-100%";
  showSidebarBtn.style.display = "inline-block";
  hideSidebarBtn.style.display = "none";
};

showSidebarBtn.addEventListener("click", showSidebar);
hideSidebarBtn.addEventListener("click", hideSidebar);

// read more functioality
var i = 0;
function read() {
  if (!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";

    i = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Read more";
    i = 0;
  }
}

function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".post");
  let l = document.getElementsByTagName("h3");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName("h3")[0];

    let value = a.innerHTML || a.innerHTML || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
