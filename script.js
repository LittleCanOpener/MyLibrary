// Submit Button
document.addEventListener("submit", function() {
    document.getElementById("submit");
    getCurrentDate();
});

//Time
function getCurrentDate() {
    let today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
}