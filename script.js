// Submit Button & Local Storage
// const form = document.querySelector("form");
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

document.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTitleValue = title.value;
    const newNameValue = author.value;
    const newNumberValue = pages.value;

    window.sessionStorage.setItem("title", newTitleValue);
    window.sessionStorage.setItem("author", newNameValue);
    window.sessionStorage.setItem("pages", newNumberValue);

    create();

    // window.localStorage.clear();
    // window.localStorage.remove("example-title");
});

function create() {
    const body = document.getElementById("body")
    const figure = document.createElement("figure");
    figure.setAttribute("id", "fig");

    body.appendChild(figure);

}

