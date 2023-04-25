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

    window.sessionStorage.setItem("title", newTitleValue);
    window.sessionStorage.setItem("author", newNameValue);
    window.sessionStorage.setItem("number", newNumberValue);

    // window.localStorage.clear();
    // window.localStorage.remove("example-title");

    document.getElementById("table-body").innerHTML = "title", "author", "number";
});



