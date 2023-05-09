function ceasarCipher(str, num){
    const alphabet = 'abcdefghijklmopqrstuvwxyz';
    let lowerCaseStr = str.lowerCaseStr();
    let newStr = '';

    for (let i = 0; lowerCaseStr.lenght; i++) {
        let currentLetter = lowerCaseStr[i];
        if(currentLetter === '') {
            newStr += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if(newIndex >25) newIndex = newIndex - 26;
        if(newIndex <0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUppercase()){
            newStr += alphabet[newIndex].toUpperCase
        }
        else newStr += alphabet[newIndex];
    }
    return newStr
}
module.exports = ceasarCipher;