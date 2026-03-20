const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayBtn = document.getElementById("autoPlayButton");
const caption = document.getElementById("caption");
const timerDisplay = document.getElementById("timerDisplay");

// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let currentIndex = 0;
let autoPlayInterval = null;

// 👉 Create images and indicators dynamically
function createCarousel() {
  images.forEach((img, index) => {
    // Create Image Element
    const imgElement = document.createElement("img");
    imgElement.src = img.url;
    imgElement.classList.add("carousel-slide");
    carouselTrack.appendChild(imgElement);

    // Create Indicator Element
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => {
      goToSlide(index);
    });
    carouselNav.appendChild(indicator);
  });

  // Set initial caption
  caption.innerText = images[0].caption;
}

createCarousel();

// 👉 Function to update carousel position
function updateCarousel() {
  const slideWidth = carouselTrack.children[0].clientWidth; // Get the actual width of a slide
  const offset = -currentIndex * slideWidth;
  carouselTrack.style.transform = `translateX(${offset}px)`;

  // Update caption
  caption.innerText = images[currentIndex].caption;

  // Update indicators
  document.querySelectorAll(".carousel-indicator").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// 👉 Move to next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  updateCarousel();
}

// 👉 Move to previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  updateCarousel();
}

// 👉 Go to specific slide
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// 👉 Handle Auto Play
function startAutoPlay() {
  if (!autoPlayInterval) {
    autoPlayBtn.textContent = "Stop Auto Play";
    timerDisplay.innerText = `Next Slides in ${5}s`;
    autoPlayInterval = setInterval(() => {
      nextSlide();
      updateTimer();
    }, 5000);
  } else {
    stopAutoPlay();
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  autoPlayBtn.textContent = "Start Auto Play";
  timerDisplay.innerText = "";
}

function updateTimer() {
  let count = 4;
  setInterval(() => {
    if (count === 0) {
      count = 5;
    }
    timerDisplay.innerText = `Next Slides in ${count--}s`;
  }, 1000);
}

// 👉 Event Listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
autoPlayBtn.addEventListener("click", startAutoPlay);

// prevBtn.addEventListener("", prevImg);

// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");
// const div4 = document.createElement("div");
// div1.classList.add("carousel-indicator");
// div2.classList.add("carousel-indicator");
// div3.classList.add("carousel-indicator");
// div4.classList.add("carousel-indicator");

// carouselNav.append(div1);
// carouselNav.append(div2);
// carouselNav.append(div3);
// carouselNav.append(div4);

// const imageElement = document.createElement("img");
// imageElement.src = `${images[0].url}`;
// imageElement.classList = "carousel-slide";

// const caption = document.querySelector("#caption");
// caption.innerText = `${images[0].caption}`;
// caption.classList = "carousel-caption";

// carouselTrack.append(imageElement);

// let prevCount = 3;

// prevBtn.addEventListener("click", () => {
//   console.log(prevCount);
//   if (prevCount < 0) {
//     prevCount = 3;
//   }
//   // images.forEach(img => {
//   // })
//   imageElement.src = `${images[prevCount].url}`;
//   caption.innerText = `${images[prevCount].caption}`;
//   prevCount--;
// });

// let count = 1;

// nextBtn.addEventListener("click", () => {
//   if (count === images.length) {
//     count = 0;
//   }
//   imageElement.src = `${images[count].url}`;
//   caption.innerText = `${images[count].caption}`;
//   count++;
// });

// function* count(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield ;
//   }
// }

// const autoPlayBtn = document.getElementById("autoPlayButton");

// autoPlayBtn.addEventListener("click", () => {
//   const timerDisplay = document.getElementById("timerDisplay");
//   autoPlayBtn.textContent = "Stop Auto Play";

//   setInterval(() => {
//     let today = new Date();
//     timerDisplay.innerText = today.getSeconds();
//   }, 1 * 1000);
// });
