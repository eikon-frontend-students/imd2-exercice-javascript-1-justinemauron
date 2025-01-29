const changeColor = document.querySelectorAll(".box")[0];
const toggleColor = document.querySelectorAll(".box")[1];
const trigger = document.querySelectorAll(".box")[2];
const target = document.querySelectorAll(".box")[3];
const triggerAll = document.querySelectorAll(".box")[4];
const triggerAllSelf = document.querySelectorAll(".box")[5];

changeColor.addEventListener("click", () => {
  changeColor.style.backgroundColor = "blue";
});

toggleColor.addEventListener("click", () => {
  if (toggleColor.style.backgroundColor == "red") {
    toggleColor.style.backgroundColor = "orange";
  } else {
    toggleColor.style.backgroundColor = "red";
  }
});

trigger.addEventListener("click", () => {
  if (target.style.display == "block") {
    target.style.display = "none";
  } else {
    target.style.display = "block";
  }
});

toggleColor.addEventListener("click", () => {
  target.style.display = "block";
});

triggerAll.addEventListener("click", () => {
  changeColor.style.backgroundColor = "blue";
  toggleColor.style.backgroundColor = "red";
});

triggerAllSelf.addEventListener("click", () => {
  changeColor.style.backgroundColor = "blue";
  toggleColor.style.backgroundColor = "red";
  triggerAllSelf.style.backgroundColor = "green";
});
