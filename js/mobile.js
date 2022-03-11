const mMenuBtn = document.querySelector(".header_mobile_open");
const mMenuBtnClose = document.querySelector(".header_mobile_close");
const mMenu = document.querySelector(".header_mobile");

var dropdown = document.getElementsByClassName("footer_dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
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

