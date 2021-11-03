const container = document.querySelector(".library");
const modal = new bootstrap.Modal(document.getElementById("newBookModal"));
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#readChk");
const addBookBtn = document.querySelector("#addBook");

let localLibrary = JSON.parse(localStorage.getItem("library"));

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function (e) {
  if (e.target.classList.contains("btn-outline-success")) {
    e.target.classList.remove("btn-outline-success");
    e.target.classList.add("btn-outline-danger");
    e.target.textContent = "NOT READ";
    this.isRead = false;
  } else {
    e.target.classList.remove("btn-outline-danger");
    e.target.classList.add("btn-outline-success");
    e.target.textContent = "READ";
    this.isRead = true;
  }
  localStorage.setItem("library", JSON.stringify(myLibrary));
};

Book.prototype.removeBook = function (e) {
  let index = myLibrary.indexOf(this);
  myLibrary.splice(index, 1);
  container.removeChild(e.target.parentElement);
  localStorage.setItem("library", JSON.stringify(myLibrary));
};

function addBookToLibrary(title, author, pages, isRead) {
  // Array element
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  localStorage.setItem("library", JSON.stringify(myLibrary));
  // DOM element
  let bookCard = document.createElement("div");

  bookCard.classList.add(
    "book",
    "border",
    "border-dark",
    "rounded-2",
    "d-flex",
    "flex-column",
    "justify-content-between"
  );

  bookCard.dataset.index = myLibrary.indexOf(newBook);

  bookCard.innerHTML = `<div class="d-flex flex-column justify-content-around">
                       <h2 class="title text-center fs-3">${newBook.title}</h2>
                       <h3 class="author text-center fs-5">${newBook.author}</h3>
                       <p class="pages text-center">${newBook.pages} pages</p>
                       </div>`;

  let bookCard_buttons = document.createElement("div");
  bookCard_buttons.classList.add("d-grid", "gap-2");
  let bookCard_readBtn = document.createElement("button");
  if (newBook.isRead === true) {
    bookCard_readBtn.classList.add("btn", "btn-outline-success");
    bookCard_readBtn.textContent = "READ";
  } else {
    bookCard_readBtn.classList.add("btn", "btn-outline-danger");
    bookCard_readBtn.textContent = "NOT READ";
  }
  bookCard_readBtn.id = "readBtn";

  let bookCard_delBtn = document.createElement("button");
  bookCard_delBtn.classList.add("btn", "btn-danger");
  bookCard_delBtn.textContent = "REMOVE";
  bookCard_delBtn.id = "removeBtn";

  bookCard_buttons.appendChild(bookCard_readBtn);
  bookCard_buttons.appendChild(bookCard_delBtn);
  bookCard.appendChild(bookCard_buttons);

  bookCard
    .querySelector("#readBtn")
    .addEventListener("click", (e) => newBook.toggleRead(e));

  bookCard
    .querySelector("#removeBtn")
    .addEventListener("click", (e) => newBook.removeBook(e));

  container.appendChild(bookCard);
}

// Add book Button event

addBookBtn.addEventListener("click", () => {
  let newTitle = titleInput.value;
  let newAuthor = authorInput.value;
  let newPages = pagesInput.value;
  let newRead = readInput.checked;
  if (newTitle != "" && newAuthor != "" && newPages != "") {
    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    modal.hide();
  } else {
    return;
  }
  clearInputs();
});

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}

function displayBooks() {
  if (localStorage.getItem("library")) {
    localLibrary.forEach((book) => {
      addBookToLibrary(book.title, book.author, book.pages, book.isRead);
    });
  } else {
    return;
  }
}

displayBooks();
