let libary = [];

//Storing IP Address in Local Storage
function addBook () {
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value
    }
    libary.push(book);

    localStorage.setItem('MyLibary', JSON.stringify(libary) );
    document.getElementById("container").innerHTML = localStorage.getItem('MyLibary');
    document.querySelector("form").reset();
}

function createText() {
    
    const body = document.getElementById("body");
    const text = document.createElement("p");

    body.appendChild(text);
    text.setAttribute("id", "container");
    
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    processRawUserInput();

    createText();
    addBook();
});