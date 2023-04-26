let libary = [];

//Storing IP Address in Local Storage
function addBook () {
    let book = {
        title : document.getElementById("title").value,
        author : document.getElementById("author").value,
        pages : document.getElementById("pages").value
    }
    libary.push(book);

    sessionStorage.setItem('MyLibary', JSON.stringify());
    document.querySelector("form").reset();
}

function createText() {
    
    const body = document.getElementById("body");
    const text = document.createElement("p");

    body.appendChild(text);
    text.setAttribute("id", "container");
    document.getElementById("container").innerHTML = sessionStorage.getItem('MyLibary');
    
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    createText();
    addBook();
});



