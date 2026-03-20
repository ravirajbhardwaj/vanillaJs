// alert("Hello");
const mainHeading = document.getElementById("mainHeading");
const buttons = document.querySelectorAll("div > button");

// console.log(buttons);

// learning outcomes -> How to refactor our code

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonStauts = event.target.textContent;
    switch (buttonStauts.toLowerCase()) {
      case "red":
        mainHeading.style.color = "#e74c3c";
        break;
      case "green":
        mainHeading.style.color = "#2ecc71";
        break;
      case "blue":
        mainHeading.style.color = "#3498db";
        break;
      case "purple":
        mainHeading.style.color = "#9b59b6";
        break;
      case "pink":
        mainHeading.style.color = "#ff69b4";
        break;
      case "orange":
        mainHeading.style.color = "#ff8c00";
        break;
      case "yellow":
        mainHeading.style.color = "#ffff00";
        break;
      case "aqua":
        mainHeading.style.color = "#00ffff";
        break;
      case "reset":
        mainHeading.style.color = "#34495e";
        break;
    }
  });
});

// const redButton = document.getElementById("redButton");
// const greenButton = document.getElementById("greenButton");
// const blueButton = document.getElementById("blueButton");
// const purpleButton = document.getElementById("purpleButton");
// const resetButton = document.getElementById("resetButton");

// redButton.addEventListener("click", () => {
//   mainHeading.style.color = "#e74c3c";
// });

// greenButton.addEventListener("click", () => {
//   mainHeading.style.color = "#2ecc71";
// });

// blueButton.addEventListener("click", () => {
//   mainHeading.style.color = "#3498db";
// });

// purpleButton.addEventListener("click", () => {
//   mainHeading.style.color = "#9b59b6";
// });

// resetButton.addEventListener("click", () => {
//   mainHeading.style.color = "#34495e";
// });
