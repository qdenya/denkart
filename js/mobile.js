var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
const mMenuBtn = document.querySelector(".header_mobile_open");
const mMenuBtnClose = document.querySelector(".header_mobile_close");
const mMenu = document.querySelector(".header_mobile");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("actives");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

mMenuBtn.addEventListener('click', () => {
  mMenu.classList.toggle("header_mobile_active");
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector(".header_mobile_back").classList.toggle("header_mobile_back_active");
});
mMenuBtnClose.addEventListener('click', () => {
  mMenu.classList.toggle("header_mobile_active");
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector(".header_mobile_back").classList.toggle("header_mobile_back_active");
});