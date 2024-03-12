const sum = function(number1, number2){
    return number1 + number2;
};

const subtract = function(number1, number2){
    return number1 - number2;
};

const multiply = function(number1, number2){
    return number1 * number2;
};

const divide = function(number1, number2){
    return number1 / number2;
};

const modulus = function(number1, number2){
    return number1 % number2;
};

// const even = function(number){
//     return number % 2 === 0;
// };

// const odd = function(number){
//     return number % 2 !== 0;
// };

const isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    isEven

};


