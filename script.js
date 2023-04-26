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
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");

    body.appendChild(figure);
    figure.setAttribute("id", "outer-container-img");

    document.getElementById("outer-container-img").innerHTML = sessionStorage.getItem('MyLibary');
    
    figure.appendChild(figcaption);
    figcaption.setAttribute("id", "container-img");
    

    // document.getElementById("container-img").innerHTML = sessionStorage.getItem('#');
  
}

// Main Event
document.addEventListener("submit", (ev) => {
    ev.preventDefault();

    createFigure()
    addBook()
});



