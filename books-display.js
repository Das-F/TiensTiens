// Display logic extracted from index.html
// Assumes `books` array is available globally (from books.js)

function createTagElement(tag) {
  const tagDiv = document.createElement("span");
  tagDiv.textContent = tag;
  tagDiv.classList.add("tag-item");
  // add a normalized data attribute for targeting specific tags in CSS/JS
  tagDiv.dataset.tag = String(tag)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
  return tagDiv;
}

// Build the static DOM structure for a book card (without any data)
function createBookCard() {
  const card = document.createElement("div");
  card.classList.add("book-card");
  const img = document.createElement("img");
  img.alt = "cover";
  img.style.width = "100%";
  img.style.height = "250px";
  card.appendChild(img);
  const titleAuthorContainer = document.createElement("div");
  titleAuthorContainer.classList.add("title-author");
  card.appendChild(titleAuthorContainer);
  const title = document.createElement("h2");
  const author = document.createElement("p");
  titleAuthorContainer.appendChild(title);
  titleAuthorContainer.appendChild(author);
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tags");
  card.appendChild(tagsContainer);
  const eyeIcon = document.createElement("a");
  eyeIcon.href = "#";
  eyeIcon.classList.add("action-button");
  eyeIcon.setAttribute("role", "button");
  eyeIcon.setAttribute("aria-label", "Voir le livre");
  eyeIcon.title = "Voir le livre";
  eyeIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `;
  card.appendChild(eyeIcon);
  return card;
}

// Populate a pre-built card with book data (text content and tags)
function fillBookCard(card, book) {
  card.querySelector("img").src = book.image;
  card.querySelector("h2").textContent = book.title;
  card.querySelector("p").textContent = `${book.author}`;
  const tagsContainer = card.querySelector(".tags") || card;
  if (Array.isArray(book.tags)) {
    book.tags.forEach((tag) => {
      const tagDiv = createTagElement(tag);
      tagsContainer.appendChild(tagDiv);
    });
  }
}

function displayBooks(books) {
  const feed = document.querySelector(".feed");
  if (!Array.isArray(books) || books.length === 0) return;
  books.forEach((book) => {
    const card = createBookCard();
    fillBookCard(card, book);
    feed.appendChild(card);
  });
}

// kick off display once the DOM is ready (could also rely on script order)
function tryDisplay() {
  if (typeof books !== "undefined" && Array.isArray(books)) {
    displayBooks(books);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tryDisplay);
} else {
  tryDisplay();
}
