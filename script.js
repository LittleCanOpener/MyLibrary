    // window.sessionStorage.setItem
    // window.localStorage.clear();
    // window.localStorage.remove("example-title");
let libary = [];

//Storing IP Address in Local Storage
function addBook () {
    let book = {
        title : document.getElementById("title").value,
        author : document.getElementById("author").value,
        pages : document.getElementById("pages").value
    }
    libary.push(book);

    sessionStorage.setItem('MyLibary', JSON.stringify(libary) );
    document.querySelector("form").reset();
}
// Creating Figure & Figcaption
function createFigure() {
    
    const body = document.getElementById("body");
    const figure = document.createElement("p");

    body.appendChild(figure);
    figure.setAttribute("id", "container");
    document.getElementById("container").innerHTML = sessionStorage.getItem('MyLibary');
    

  
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();

    createFigure()
    addBook()
});



