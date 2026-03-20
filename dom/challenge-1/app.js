const bulb = document.getElementById("bulb");
const body = document.getElementById("body");
const toggleBtn = document.getElementById("toggleButton");
const statusOfBulb = document.getElementById("status");

body.classList.add("dark-mode");

// setAttribute // classList two new method i learn from this project

toggleBtn.addEventListener("click", () => {
  let currentStatus = statusOfBulb.innerText;

  if (currentStatus === "Status: On") {
    bulb.classList.add("off");
    toggleBtn.innerText = "Turn On";
    statusOfBulb.innerText = "Status: Off";
    body.classList.add("dark-mode");
  } else {
    bulb.classList.remove("off");
    toggleBtn.innerText = "Turn Off";
    statusOfBulb.innerText = "Status: On";
    body.classList.remove("dark-mode");
  }
});
