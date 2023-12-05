document.querySelector(".switchersBtn").onclick = () => {
  document.querySelector(".colorSwitcherContainer").classList.toggle("active");
};

let themeBtns = document.querySelectorAll(".themeBtns");
themeBtns.forEach((color) => {
  color.addEventListener("click", function () {
    let dColor = color.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--all-Color", dColor);
  });
});
