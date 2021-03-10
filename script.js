let bookContainer = document.getElementById("book-container");
const noBooksDisplay = document.querySelector(".no-books-added");

let myLibrary = [];
updateLibrary();

document.getElementById("addbook").addEventListener("click", () => {
  document.getElementById("popup-form").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("popup-form").style.display = "none";
})

document.querySelector(".add-to-library").addEventListener("click", () => {
  document.getElementById("popup-form").style.display = "none";
  addBookToLibrary();
})

function Book(bookTitle, bookAuthor, bookPages) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.readStatus = false;
}

function addBookToLibrary() {
  const title = document.querySelector(".book-title").value
  const author = document.querySelector(".author").value
  const pages = document.querySelector(".pages").value

  myLibrary.push(
      new Book(title, author, pages)
      );
  updateLibrary();
}

function updateLibrary(){
  if (myLibrary.length === 0) {
    noBooksDisplay.innerHTML = "NO BOOKS ADDED";
  } else {
    noBooksDisplay.innerHTML = "";
  }
  let html = "";
  myLibrary.map((book, index) => {
    html += `<div class="new-book">`;
    if (book.readStatus === true) {
      html += `<span class="read" data-index="${index}" onclick="read(this)">READ</span>`;
    } else {
      html += `<span class="read notread" data-index="${index}" onclick="read(this)">READ</span>`;
    }
    html += `<div class="delete-book" data-index="${index}" onclick="deleteBook(this)">+</div>`;
    html += `<div class="title">${book.title}</div>`;
    html += `<div class="book-headers">${book.author}<br>${book.pages} pages</div></div>`;
  })
  bookContainer.innerHTML = html;
}

function deleteBook(e) {
  myLibrary.splice(e.dataset.index, 1);
  updateLibrary();
}

function read(e) {
  if(!myLibrary[e.dataset.index].readStatus){
    myLibrary[e.dataset.index].readStatus = true;
  } else {
    myLibrary[e.dataset.index].readStatus = false;
  }
updateLibrary();
}
