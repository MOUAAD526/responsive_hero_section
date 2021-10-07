// dropdown menu on mobile screen:

let toggle_Menu = document.querySelector(".hero__nav");

toggle_Menu.addEventListener("click", () => {
  toggle_Menu.classList.toggle("mobile-menu");
});

// change navbar color on scroll:

let navBar_1 = document.querySelector(".hero__nav");

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  if (top > 100) {
    navBar_1.classList.add("nav__bg");
  } else {
    navBar_1.classList.remove("nav__bg");
  }
});
