// Input Filed
const userName = document.getElementById("nameInput");
const userJobTitle = document.getElementById("jobInput");
const userAge = document.getElementById("ageInput");
const userBio = document.getElementById("bioInput");

// Profile Preview
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

userName.addEventListener("input", (event) => {
  console.log(userName.innerText);
  nameDisplay.innerText = event.target.value;
});

userJobTitle.addEventListener("input", (event) => {
  if (userName.innerText === "") {
    nameDisplay.innerText = `Not provided`;
  }
  jobDisplay.innerText = event.target.value;
});

userAge.addEventListener("input", (event) => {
  if (userName.innerText === "") {
    nameDisplay.innerText = `Not provided`;
  }
  console.log(event.target.value);
  ageDisplay.innerText = event.target.value;
});

userBio.addEventListener("input", (event) => {
  if (userName.innerText === "") {
    nameDisplay.innerText = `Not provided`;
  }
  console.log(event.target.value);
  bioDisplay.innerText = event.target.value;
});
