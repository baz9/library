let bookContainer = document.getElementById("book-container");
const noBooksDisplay = document.querySelector(".no-books-added");
// let provider = new firebase.auth.GoogleAuthProvider();
const signIn = document.getElementById("signin");

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

const removeBook = document.querySelectorAll(".delete-book");
removeBook.forEach((book) => {
  book.addEventListener("click", (e) => {
      console.dir(e.target)
  })
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
    // html += `<span class="read">Read</span><input class="read-status" type="checkbox" onclick="myLibrary[${index}].read()" name="">`
    html += `<span class="read" onclick="myLibrary[${index}].read()">READ</span>`;
    html += `<div class="delete-book" data-index="${index}" onclick="deleteBook(this)">+</div>`;
    html += `<div class="title">${book.title}</div>`;
    html += `<div class="book-headers">${book.author}<br>${book.pages} pages</div></div>`;
  })
  bookContainer.innerHTML = html;
}

function deleteBook(e) {
  myLibrary.splice(e.dataset.index, 1);
  console.log(myLibrary.length);
  updateLibrary();
}

// Book.prototype.read = function() {
//   if(!this.readStatus) {
//     document.querySelectorAll(".read-status").forEach((checkbox) => {
//       checked = true;
//       this.readStatus = true;
//     })
//   } else {
//     document.querySelectorAll(".read-status").forEach((checkbox) => {
//       checked = false;
//       this.readStatus = false;
//     })
//   }
// }

Book.prototype.read = function() {
    if(!this.readStatus) {
      document.querySelectorAll(".read-status").forEach((readButton) => {
        readButton.classList.add("read.active")
        this.readStatus = true;
        console.log(this.readStatus);
      })
    } else {
      document.querySelectorAll(".read-status").forEach((readButton) => {
        readButton.classList.remove("read.active")
        this.readStatus = false;
        console.log(this.readStatus);
      })
    }
  }

  // signIn.addEventListener("click", () => {
  //   firebase.auth()
  //   .signInWithPopup(provider)
  //   .then((result) => {
  //     /** @type {firebase.auth.OAuthCredential} */
  //     var credential = result.credential;
  
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     var token = credential.accessToken;
  //     // The signed-in user info.
  //     var user = result.user;
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //   });
  
  // })
