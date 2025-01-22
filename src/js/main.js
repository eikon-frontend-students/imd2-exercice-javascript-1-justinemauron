document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box.change-color");

  if (box) {
    box.addEventListener("click", () => {
      box.style.background = "blue";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box.toggle-color");

  if (box) {
    let isRed = false;

    box.addEventListener("click", () => {
      if (isRed) {
        box.style.background = "orange";
      } else {
        box.style.background = "red";
      }
      isRed = !isRed;
    });
  }
});
