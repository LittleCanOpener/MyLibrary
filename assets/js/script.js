/*jshint esversion: 6 */
// tells JSHint that I'm using ECMAScript 6 specific syntax

// Book Class: represents a book
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
// UI Class: Handle user interface tasks
class UI {
    static displayBooks(){
        const books = Store.getBooks();
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
    //Deleting GrandparentElement
    static deleteBook(el){
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector("#title").value= '';
        document.querySelector("#author").value= '';
        document.querySelector("#pages").value= '';
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
        books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(pages) {
        const books = Store.getBooks();
    
        books.forEach((book, index) => {
          if(book.pages === pages) {
            books.splice(index, 1);
          }
        });
    
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => { 
    e.preventDefault();
    // Get Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const book = new Book(title, author,pages);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
    
});

// Event Remove a Book
document.querySelector('#output').addEventListener('click', (e)=> {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});