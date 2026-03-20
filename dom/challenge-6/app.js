const digitalClock = document.querySelector(".digital-clock");
const todayDate = document.querySelector(".date");

handler();

function handler() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes().toString();
  let second = new Date().getSeconds().toString();

  hours = hours % 12;
  hours = hours ? hours : 12;

  console.log(hours, ":", minutes, ":", second);

  digitalClock.innerHTML = `${hours}:${minutes.padStart(
    2,
    "0"
  )}:${second.padStart(2, "0")}`;
}

setInterval(handler, 1000);
