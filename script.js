const form = document.getElementById("form");

const title = document.getElementById("title");
const author = document.getElementById("author");
const number = document.getElementById("number");


// Submit Button
document.addEventListener("submit", function(e) {
    e.preventDefault();

    const newTitleValue = title.value;
    const newNameValue = author.value;
    const newNumberValue = number.value;

    window.localStorage.setItem("title", newTitleValue);
    window.localStorage.setItem("author", newNameValue);
    window.localStorage.setItem("number", newNumberValue);

});



