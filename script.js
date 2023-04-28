/*jshint esversion: 6 */

// Book Class: Represents a Book
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title:'Book One',
                author:'John Doe',
                pages:'140'
            },
            {
                title:'Book Two',
                author:'John Glow',
                pages:'1650'
            }
        ]
        // Get from local storage

        // setting books to arry
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const output = document.querySelector("#output");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="delete"</a>X</td>
        `;
        output.appendChild(row)
    }
    static clearFields() {
        document.querySelector("#title").value= '';
        document.querySelector("#author").value= '';
        document.querySelector("#pages").value= '';
    }
}

// Store Class: Handles Storage


// Events Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    // Get Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    // Instatiate Book
    const book = new Book(title, author,pages)
    // Adding Book To UI
    UI.addBookToList(book);
    UI.clearFields();
    console.log(book)

});
// Event Remove a Book