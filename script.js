const newAddedBook = document.createElement("div");

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

const removeBook = document.querySelectorAll(".delete-book");
removeBook.forEach((book) => {
  book.addEventListener("click", (e) => {
      console.dir(e.target)
  })
})


let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages) {
  this.book = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
}

function addBookToLibrary() {
  const title = document.querySelector(".book-title").value
  const author = document.querySelector(".author").value
  const pages = document.querySelector(".pages").value

  myLibrary.push(
      new Book(title, author, pages)
      );

  //make div and add class new-book to it
  const bookContainer = document.getElementById("book-container");
  const newAddedBook = document.createElement("div");
  bookContainer.appendChild(newAddedBook);
  newAddedBook.classList.add("new-book");

  //make div on new book and add class deletebook to it
  const deleteBook = document.createElement("div");
  newAddedBook.appendChild(deleteBook);
  deleteBook.classList.add("delete-book");
  deleteBook.innerHTML = "+";
  deleteBook.setAttribute("data-index", myLibrary.length - 1);
  
  //make div on new book and add class title to it
  const titleOfBook = document.createElement("div");
  newAddedBook.appendChild(titleOfBook);
  titleOfBook.classList.add("title");
  titleOfBook.innerHTML = title;
  
  //make div on new book and add class book-headers to it
  const authorAndPages = document.createElement("div");
  newAddedBook.appendChild(authorAndPages);
  authorAndPages.classList.add("book-headers");
  authorAndPages.innerHTML = `${author}<br>${pages} pages`
}

// function showLibrary(myLibrary) {
//   for(let i = 0; i < myLibrary.length; i++) {
//       let newDiv = document.createElement("div");
//       let newBook = document.createTextNode(myLibrary[i]);
//       bookContainer.appendChild(newDiv);
//       newDiv.appendChild(newBook);
//       newDiv.classList.add("new-book");
//   }
// }
