class Calculator {
    add(a, b){
        return a + b;
    }
    subtract(a, b){
        return a - b;
    }
    multibly(a, b){
        return a * b;
    }
    divide(a, b) {
        return a / b;
   }
   modulo(a, b) {
    return a % b;
    }
}
const calculator = new Calculator()
module.exports = calculator