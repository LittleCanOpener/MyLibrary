/*jshint esversion: 6 */
let libary = [];

function Book(title, author, pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
}
function addBook () {
    // Arry's
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;
    // Saving Values
    libary.push(new Book(a, b, c));
    localStorage.setItem('MyLibary', JSON.stringify(libary));
    const output = document.getElementById("output");
    const div = document.createElement("div");
    output.appendChild(div);
    div.setAttribute("id", "container");
    document.querySelector("form").reset();
    output.innerHTML = localStorage.getItem('MyLibary')
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    addBook();
});

