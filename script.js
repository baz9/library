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

document.querySelector(".delete-book").addEventListener("click", () => {
    const deleteBook = confirm("Are you sure you want to delete this book?");
    //CODE STILL NEEDED HERE
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

    const bookContainer = document.getElementById("book-container");
    const newDiv = document.createElement("div");
    bookContainer.appendChild(newDiv);
    newDiv.classList.add("new-book");
    document.querySelector(".new-book").appendChild(newDiv);
}

function showLibrary(myLibrary) {
    for(let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        let newBook = document.createTextNode(myLibrary[i]);
        bookContainer.appendChild(newDiv);
        newDiv.appendChild(newBook);
        newDiv.classList.add("new-book");
    }
}
