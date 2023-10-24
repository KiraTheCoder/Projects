# Siksha Library Website


This website allows users to manage their Booklist, which includes adding, removing, and sorting their Books.

## How to use Library


### <a href="https://shankarprashadji.github.io/Library/">visit Siksha Library Website</a>


- You see already listed books
- It allows to remove all books from the library


### Add book


- You can add your book to the booklist. By filling in all the details of the book and clicking on the add book button to add your book and book shows in the list


-------------------------------------------

### Remove book


- For removing a book from the list click on the corresponding close icon of the book. It will be deleted from the list.


### Remove All


- Click on the Remove All button to remove all books from the list.


## Features


### sort books
- sort books by selecting the option from Sort Books: `By title`, `By author`, and `By book id`


### Save listed books
- your added book is always there even if you close the browser. If you remove the book from the website then it will also be removed from browser.




## Use cases
- Add your book collection
- Manage books you want to read or already read




## Deeply Knowing What's going on this Website


#### Inside app.js very top section imports books data and gets nodes by their IDs


### JavaScript Classes

**Class-Based Structure**

 ***Book Class***

the class encapsulates the details of the book.



<details>
<summary>class Book code</summary>

```
class Book {
constructor(title, author, ISBN) {
this.title = title;
this.author = author;
this.ISBN = ISBN;
}
}
```

</details>

1. **Properties:**


- `title`: This property stores the book's title
- `author`: This property stores the book's author
- `ISBN`: This property stores the book's ISBN


This class efficiently bundles these properties, ensuring they are logically organized and encapsulated.

<hr>

**Library Class**


the class encapsulates the data of books and methods that manipulate books data.

<details>
<summary>Books property code</summary>


1. **Properties:**
```
static books = [];
```

</details>

- `Books`: this property Store list of books object




2. **Methods:**

<details>
<summary>getBooks() method code</summary>

```
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
```

</details>

- `getBooks()`: This method allows users to get Books from localStorage, if the user first time opens this website then localStorage is empty for this website then Some books are stored on localStorage. If the user already uses this website then this method returns already store books

<details>
<summary>addBook(book) method code</summary>

```
static addBook(book) {
this.books.push(book);


localStorage.setItem("books", JSON.stringify(this.books));
}
```

</details>

- `addBook(book)`: Users can use this method to add a book, and then update the local storage and UI accordingly.

<details>
<summary>removeBook(ISBN) method code</summary>


```
static removeBook(ISBN) {
this.books = this.books.filter((book) => book.ISBN !== ISBN);
localStorage.setItem("books", JSON.stringify(this.books));
}

```

</details>

- `removeBook(ISBN)`: Users can utilize this method to remove the book.

<details>
<summary>removeAllBooks() method code</summary>

```
static removeAllBooks() {
this.books = [];
localStorage.setItem("books", JSON.stringify(this.books));
}
```

</details>

- `removeAllBooks()`: Users can use this method to remove all books.


<details>


<summary>sort(headName) method code</summary>


```
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
default :
DomManipulator.showAlert("none selected nothig to sort", "bg-info");




}
localStorage.setItem("books", JSON.stringify(this.books));
}
```


</details>


- `sort(headName)`: This method is used to sort books by `title`, `author`, and `book id`


### Switch Statements


**Switch Statements for User Actions:**


The JavaScript effectively uses a `switch` statement to handle user actions:


When the user selects one of the options from the Dropdown the corresponding switch cases execute and perform the appropriate operation


``cases to be matched ``


- **title**: if this case matched then Books sorted by title


- **author**: if this case matched then Books sorted by author


- **title**: if this case matched then Books sorted by book ID


- **default**: when the user selects default that is none then a pop-up shows on the UI to ensure the user clear feedback.


This `switch` statement enhances code readability and maintainability.


<hr>

**DomManipulator Class**


- `This class encapsulated method for DOM Manipulation`


1. **Methods:**

<details>
<summary>showAlert(message, className, color) method code</summary>

```
static showAlert(message, className, color) {
{
alert.classList.add(className, color);
alert.appendChild(document.createTextNode(message));
// alert.style.display = "block";
//Clear alert message after 4 esc
setTimeout(() => {
alert.textContent = "";
alert.classList.remove(className);


// alert.style.display = "none";
}, 4000);
}
}
```

</details>

- `showAlert(message, className, color)`: This method shows a pop-up at the top of the page for ensuring to provide clear feedback to the user, like messages: `Please fill in all fields, `Book id must be numeric value` and `book added to Siksha Library`


<br>


<details>
<summary>show addBook(e) method code</summary>

```
static addBook(e) {
e.preventDefault();
const bookISBN = bookId.value;
try {
if (title.value === "" || author.value === "" || bookISBN === "") {
throw Error("Please fill in all fields");
} else {
// True if character Found other than [0-9] number
if (bookISBN.match(/\D/g)) throw Error("Book id must be numeric value");
if (bookISBN.length < 13)
throw Error("ISBN number must be greater than 13 digit");
// checkbook already added or not
const books = Siksha Library.getBooks();


books.forEach((book) => {
if (book.ISBN == bookISBN) throw Error("Book ID already registered");
});


// add to Object
const book = new Book(title.value, author.value, bookISBN);
Siksha Library.addBook(book);
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
DomManipulator.showAlert("book added to Siksha Library", "bg-success");
}
} catch (e) {
DomManipulator.showAlert(e, "bg-danger", "text-white");
}
finally {
console.log("Application Works fine")
}
}
```
</details>



- `addBook(e)`: This method is used to add book on UI and other place. In this method check the provided book details and then do further operation. Also, use Try-Catch-Finally Statements to handle error


### Try-Catch-Finally Statements


Robust error handling is a key feature of `try-catch-finally` statements to ensure a smooth and secure user experience:


- **Try Block**: Within the `try` block, each user action is attempted. When the user clicks on the `add book`option then this block of code executes and then checks `any field empty` if any field is empty then throws an Error. `Book id ` if the book id is not numeric or less than 13 or the book id is already inserted throws an error


- **Catch Block**: In the event of an error call showAlert() generates user-friendly error messages as pop up. This ensures that users receive clear and informative feedback about the nature of the issue.


- **Finally Block**: The `finally` block print in the console shows that everything is working fine.
It execute even try block or catch block executed.


<details>
<summary>removeBook(e) method code</summary>

```
static removeBook(e) {
if (e.target.classList.contains("btn-close")) {
Siksha Library.removeBook(e.target.getAttribute("id"));
e.target.parentElement.parentElement.remove();
}
}
```

</details>


- `removeBook(e)`: This method use to remove book from DOM and invoked Siksha Library.removeBook() method for further operation



<details>
<summary>sort(e) method code</summary>

```
static sort(e) {
console.log(e.target.value);
Siksha Library.sort(e.target.value)
main()
}
```

</details>

- `removeAllBooks()`: This method is used to remove all books from DOM and invoke Siksha Library. remove book() method for further operation

<details>
<summary>removeBook(e) method code</summary>


```
static sort(e) {
console.log(e.target.value);
Siksha Library.sort(e.target.value)
main()
}
```

</details>

- `sort(e)`: This method sorts Books in order by invoking Siksha Library. sort(e.target.value) method and Update DOM by invoking main() method


<br>


<details>
<summary>show addBook(e) method code</summary>


```
function main() {
const books = Siksha Library.getBooks();
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


#### main() function is the try point of the Application


```


</details>
<br>


- `At the the last:` add EventListener to appropriate nodes

