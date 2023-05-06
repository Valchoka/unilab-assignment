const burgerButton = document.querySelector(".burger_button");
const menuList = document.querySelector(".menu");

burgerButton.addEventListener("click", () => {
  menuList.classList.toggle("show");

  // Disable scrollbar when menu is open.
  if (menuList.classList.contains("show")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
