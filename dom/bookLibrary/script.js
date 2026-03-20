// Global Variables
let pageNumber = 1;
let limit = 10;
let searchQuery = "";
let apiData = await fetchData(pageNumber, limit);
let nextPage = apiData.data.nextPage;
let previousPage = apiData.data.previousPage;
let totalPages = apiData.data.totalPages;

// Fetch books from the API
async function fetchData(pageNumber = 1, limit = 10) {
  const options = {
    method: "GET",
    url: "https://api.freeapi.app/api/v1/public/books",
    params: {
      page: pageNumber,
      limit: limit,
      inc: "kind%2Cid%2Cetag%2CvolumeInfo",
      query: searchQuery,
    },
    headers: { accept: "application/json" },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: { data: [], nextPage: false, previousPage: false, totalPages: 0 },
    };
  }
}

// Clicking on a book item, should open more details in a new tab (using infoLink)
// Show book details including title, author, publisher, published date, and thumbnail
const bookContainer = document.querySelector(".card-container");
let booksList = apiData.data.data;

renderBooks(booksList);

function renderBooks(books) {
  bookContainer.innerHTML = ""; // Clear previous books
  books.forEach((book) => {
    const bookVolume = book.volumeInfo || {};
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    // Clicking on a book item, should open more details in a new tab (using infoLink)
    // Show book details including title, author, publisher, published date, and thumbnail
    bookCard.innerHTML = `
      <a href="${bookVolume.infoLink || "#"}" target="_blank">
        <div class="image-container">
          <div class="image">
            <img src="${
              bookVolume.imageLinks?.thumbnail || "placeholder.jpg"
            }" alt="Book cover" loading="lazy" />
          </div>
        </div>
        <div class="about">
          <h2 class="title">${bookVolume.title || "Unknown Title"}</h2>
          <div class="book-meta">
            <div class="Author"><strong>Authors:</strong> ${
              bookVolume.authors?.join(", ") || "Unknown"
            }</div>
            <div class="Publisher"><strong>Publisher:</strong> ${
              bookVolume.publisher || "Unknown"
            }</div>
          </div>
          <div class="publish-date"><strong>Published on:</strong> ${
            bookVolume.publishedDate || "N/A"
          }</div>
          <div class="pages"><strong>Pages:</strong> ${
            bookVolume.pageCount || "N/A"
          }</div>
        </div>
      </a>
    `;
    bookContainer.appendChild(bookCard);
  });
}

// Implement a search bar to filter books by title or author
async function fetchSearch(searchQuery) {
  const options = {
    method: "GET",
    url: "https://api.freeapi.app/api/v1/public/books",
    params: {
      page: "1",
      limit: "10",
      inc: "kind%2Cid%2Cetag%2CvolumeInfo",
      query: searchQuery,
    },
    headers: { accept: "application/json" },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: { data: [], nextPage: false, previousPage: false, totalPages: 0 },
    };
  }
}

const searchInput = document.querySelector(".search-field");
searchInput.addEventListener("input", async (event) => {
  searchQuery = event.target.value;
  let data = await fetchSearch(searchQuery);
  renderBooks(data.data.data);
});

// display them as a list/grid
// Provide an option to user to switch between the viewing type of list v/s grid
let grid = true;
const viewBtn = document.querySelector("#view-type");
viewBtn.addEventListener("click", () => {
  if (grid) {
    bookContainer.classList.remove("grid");
    grid = false;
  } else {
    bookContainer.classList.add("grid");
    grid = true;
  }
});

// Implement a sort feature to list books in Alphabetical order based on their title, date of release (publishedDate)
const sortByName = document.querySelector("#sortByName");
const sortByDate = document.querySelector("#sortByDate");

sortByName.addEventListener("click", async () => {
  console.log("clicked");
  const apiData = await fetchData();
  const books = apiData.data.data;
  console.log(books);
  const sortedbook = books.sort((a, b) => {
    return a.volumeInfo.title > b.volumeInfo.title ? 1 : -1;
  });
  renderBooks(sortedbook);
});

sortByDate.addEventListener("click", async () => {
  const apiData = await fetchData();
  const books = apiData.data.data;
  const sortedbook = books.sort((a, b) => {
    return a.volumeInfo.publishedDate > b.volumeInfo.publishedDate ? 1 : -1;
  });
  renderBooks(sortedbook);
});

// Implement pagination on reaching the end of the page to call next set of details
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const pageNumberContainer = document.querySelector("#pageNumbers");

// Update Pagination
function updatePagination(data) {
  let booksList = data.data.data;
  totalPages = data.data.totalPages; // Update total pages dynamically
  nextPage = data.data.nextPage;
  previousPage = data.data.previousPage;

  pageNumberContainer.innerHTML = `${pageNumber} / ${totalPages}`;
  renderBooks(booksList);
}

//
prevBtn.addEventListener("click", async () => {
  if (pageNumber > 1) {
    pageNumber--;
    let apiData = await fetchData(pageNumber);
    updatePagination(apiData);
  }
});

nextBtn.addEventListener("click", async () => {
  if (nextPage) {
    pageNumber++;
    let apiData = await fetchData(pageNumber);
    updatePagination(apiData);
  }
});
