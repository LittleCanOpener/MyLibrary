    // window.sessionStorage.setItem
    // window.localStorage.clear();
    // window.localStorage.remove("example-title");


//  Local Storage
let libary = [];

//Storing IP Address in Local Storage
function addBook () {
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
    }
    libary.push(book);
    document.querySelector("form").reset();
    sessionStorage.setItem('MyLibary', JSON.stringify(libary) );
}

// Creating figure
function createFigure() {
    const body = document.getElementById("body");
    // Creating Figure & Figcaption
    const figure = document.createElement("figure");
    figure.setAttribute("id", "outer-container-img");
    body.appendChild(figure);
    const figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);
    figcaption.setAttribute("id", "container-img");
}

// Main Event
//el would be the element that received the click event. ev is the actual click event itself
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    createFigure()
    addBook()

});