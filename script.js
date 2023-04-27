/*jshint esversion: 6 */
let libary = [];

//Storing IP Address in Local Storage
function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
}
function addBook () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    
	if (title !== '' && author !== '' && pages !== '' ){
        libary.push(new Book(title, author, pages));
		localStorage.setItem('MyLibary', JSON.stringify(libary) );
		document.getElementById("container").innerHTML = localStorage.getItem('MyLibary');
		document.querySelector("form").reset();
    } 
    else {
        alert('Form not filled out');
	}
}

function createText() {
    const body = document.getElementById("body");
    const text = document.createElement("div")
    body.appendChild(text);
    text.setAttribute("id", "container");
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();

    createText();
    addBook();
});