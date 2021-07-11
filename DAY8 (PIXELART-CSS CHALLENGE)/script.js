let buttons = document.getElementsByClassName("pixel");

for (button of buttons) {
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("pixelClicked");
  });
}