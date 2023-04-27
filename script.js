/*jshint esversion: 6 */
let libary = [];
//Storing IP Address in Local Storage
function Book(title, author, pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
}
// Arry's
function addBook () {
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;
    // Saving Values
    libary.push(new Book(a, b, c));
    localStorage.setItem('MyLibary', JSON.stringify(libary));
    createText();
}

function createText() {
    const output = document.getElementById("output");
    const div = document.createElement("div");
    output.appendChild(div);
    div.setAttribute("id", "container");
    // Displaying stored values
    document.getElementById("container").innerHTML = localStorage.getItem('MyLibary');
    document.querySelector("form").reset();
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    addBook();
});