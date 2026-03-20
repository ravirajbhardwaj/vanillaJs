const userColorInput = document.getElementById("colorInput");

const creatColorBtn = document.getElementById("createButton");
const createHexCodeBtn = document.getElementById("createHexCode");

function randomColorGenerator() {
  let hexColor = "#";
  let letter = "123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hexColor += letter[Math.floor(Math.random() * 15)];
  }
  return hexColor;
}

function createColor() {
  createHexCodeBtn.addEventListener("click", () => {
    userColorInput.value = randomColorGenerator();
  });
}

createColor();

function creatButton() {
  creatColorBtn.addEventListener("click", () => {
    let color = userColorInput.value;
    if (color && color.length >= 6) {
      const generatedBtn = document.createElement("button");
      generatedBtn.type = "button";
      generatedBtn.innerText = color;
      generatedBtn.style.background = color;
      const container = document.getElementById("container");
      container.appendChild(generatedBtn);
      userColorInput.value = "";
      generatedBtn.addEventListener("click", (e) => {
        document.body.style.backgroundColor = e.target.innerText;
      });
    } else {
      alert("Enter Valid Color");
    }
  });
}

creatButton();
