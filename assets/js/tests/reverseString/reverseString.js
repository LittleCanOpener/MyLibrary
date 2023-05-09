function reverseString(str) {
    let origStr = str + "";
    return origStr.split("").reverse().join("");
}
module.exports = reverseString