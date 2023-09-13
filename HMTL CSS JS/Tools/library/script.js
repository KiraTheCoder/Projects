import { bookData } from "./Books.js";
const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const bookId = document.getElementById("book-id");
const list = document.getElementById("book-list");
const alert = document.getElementById("alert");
const clearBtn = document.getElementById("clear-all");
const SortBook = document.getElementById("sort-option");

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  static books = [];
  static getBooks() {
    if (
      localStorage.getItem("books") === null ||
      localStorage.getItem("books") === undefined
    ) {
      {
        this.books = bookData;
        localStorage.setItem("books", JSON.stringify(this.books));
      }
    } else {
      this.books = JSON.parse(localStorage.getItem("books"));
    }
    return this.books;
  }
  static addBook(book) {
    this.books.push(book);

    localStorage.setItem("books", JSON.stringify(this.books));
  }

  static removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
  static removeAllBooks() {
    this.books = [];
    localStorage.setItem("books", JSON.stringify(this.books));
  }
  static sort(headName) {
    switch (headName) {
      case "title":
        this.books.sort((a, b) => {
          if (a.title > b.title)
            return 1
          else if (a.title < b.title)
            return -1
          else return 0
        })
        break;
      case "author":
        this.books.sort((a, b) => {
          if (a.author > b.author)
            return 1
          else if (a.author < b.author)
            return -1
          else return 0
        })
        break;
      case "bookId":
        this.books.sort((a, b) => {
          if (a.ISBN > b.ISBN)
            return 1
          else if (a.ISBN < b.ISBN)
            return -1
          else return 0
        })
        break;
    }
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

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
        // True if  character Found other than [0-9] number
        if (bookISBN.match(/\D/g)) throw Error("Book id must me numeric value");
        if (bookISBN.length < 13)
          throw Error("ISBN number must be greater than 13 digit");
        //  check book already added or not
        const books = Library.getBooks();

        books.forEach((book) => {
          if (book.ISBN == bookISBN) throw Error("Book ID already registered");
        });

        // add to Object
        const book = new Book(title.value, author.value, bookISBN);
        Library.addBook(book);
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
      DomManipulator.showAlert(e, "bg-info");
    }
  }

  static removeBook(e) {
    if (e.target.classList.contains("btn-close")) {
      Library.removeBook(e.target.getAttribute("id"));
      e.target.parentElement.parentElement.remove();
    }
  }


  static main() {
    const books = Library.getBooks();
    list.innerHTML = "";
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

  static removeAllBooks() {
    list.innerHTML = "";
    Library.removeAllBooks();
  }
  static sort(e) {
    console.log(e.target.value);
    Library.sort(e.target.value)
    DomManipulator.main()
  }
}
bookForm.addEventListener("submit", DomManipulator.addBook);
list.addEventListener("click", DomManipulator.removeBook);
clearBtn.addEventListener("click", DomManipulator.removeAllBooks);
SortBook.addEventListener("click", DomManipulator.sort);
document.addEventListener("DOMContentLoaded", DomManipulator.main);
