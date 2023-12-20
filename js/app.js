const openNav = document.getElementById("js-nav-open");

const closeNav = document.getElementById("js-nav-close");

const navbar = document.getElementById("js-mobile-nav");

openNav.addEventListener("click", function () {
  navbar.style.right = 0;
});

closeNav.addEventListener("click", function () {
  navbar.style.right = "-100vw";
});
