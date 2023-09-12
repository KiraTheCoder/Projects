const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const bookId = document.getElementById("bookid");
const list = document.querySelector("#book-list");
const alert = document.querySelector("#alert");

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  constructor(type) {
    this.type = type;
    this.books = [];
  }

  static getBooks() {
    if (
      localStorage.getItem("books") === null ||
      localStorage.getItem("books") === undefined
    ) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem("books"));
      // this.books.forEach(book => {

      // })
    }
    return this.books;
  }
  addBook(book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
const library1 = new Library("ok");
//  DOM manipulation

class DomManipulator {
  static showAlert(message, className) {
    {
      alert.classList.add(className);
      alert.appendChild(document.createTextNode(message));
      // alert.style.display = "block";
      // clear alert message after 4 esc
      setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(className);

        // alert.style.display = "none";
      }, 4000);
    }
  }
  static addBook(e) {
    e.preventDefault();
    const bookISBN = bookId.value;
    try {
      if (title.value === "" || author.value === "" || bookISBN === "") {
        throw Error("Please fill in all fields");
      } else {
        // True if Found character other than [0-9] number
        if (bookISBN.match(/\D/g)) throw Error("Book id must me numeric value");
        if (bookISBN.length < 10)
          throw Error("ISBN number must be greater than 10 digit");
        //  Logic for if book already added
        const books = Library.getBooks();
        books.forEach((book) => {
          if (book.ISBN == bookISBN) throw Error("Book ID already registered");
        });

        // add to Object
        const book = new Book(title.value, author.value, bookISBN);
        library1.addBook(book);
        // add book to DOM
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.ISBN}</td>
      <td><button id=${book.ISBN} class="btn-close btn"></button></td>
      `;
        list.appendChild(row);
        // clear after insertion
        title.value = "";
        author.value = "";
        bookId.value = "";
      }
    } catch (e) {
      DomManipulator.showAlert(e.message, "bg-info");
    }
  }

  static removeBook(e) {
    if (e.target.classList.contains("btn-close")) {
      library1.removeBook(e.target.getAttribute("id"));
      e.target.parentElement.parentElement.remove();
    }
  }

  static main() {
    const books = Library.getBooks();
    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.ISBN}</td>
  <td><button id=${book.ISBN} class="btn-close btn"></button></td>
  `;
      list.appendChild(row);
    });
  }
}
bookForm.addEventListener("submit", DomManipulator.addBook);
list.addEventListener("click", DomManipulator.removeBook);
document.addEventListener("DOMContentLoaded", DomManipulator.main);
