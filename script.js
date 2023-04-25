// Submit Button & Local Storage
const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const number = document.getElementById("number");

document.addEventListener("submit", function(e) {
    e.preventDefault();

    const newTitleValue = title.value;
    const newNameValue = author.value;
    const newNumberValue = number.value;

    window.localStorage.setItem("title", newTitleValue);
    window.localStorage.setItem("author", newNameValue);
    window.localStorage.setItem("number", newNumberValue);

    // consider using sessionStorage rather than localStorage as it automatically clears itself.
    // window.localStorage.clear();
    // window.localStorage.remove("example-title");

});



