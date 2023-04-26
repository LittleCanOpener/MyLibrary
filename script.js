const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className)
};
addClas("body", "purple");

//Process Raw Data
const processRawUserInput = () => {
    const rawData = document.querySelector("input").value;
    const processedData = processUserInput(rawData)
    const libaryForm = document.querySelectorAll("libaryForm");
    libaryForm.innerHTML = processedData;
}
//Refine Processed Data
const processUserInput = (inputValue) => {
    const div = document.createElement("div");
    div.textContent = inputValue;
    return div.innerHTML;
}