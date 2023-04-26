    // window.sessionStorage.setItem
    // window.localStorage.clear();
    // window.localStorage.remove("example-title");


// Submit Button & Local Storage
let libary = [];
// Storing IP Address in Local Storage
function addBook () {
    let book = {
        id: Date.now(),
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value
    }
    libary.push(book);
    document.querySelector("form").reset();
    localStorage.setItem("MyLibary", JSON.stringify(libary));
}

// Creating Elements
function createFigure() {
    const body = document.getElementById("body");
    const figure = document.createElement("figure");
    // Creating Figure & Figcaption
    figure.setAttribute("id", "fig");
    body.appendChild(figure);

    const figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);
}

//el would be the element that received the click event. ev is the actual click event itself
document.addEventListener("submit", (ev) => {
    ev.preventDefault();
    createFigure()
    addBook()

});