var add = function (number1, number2) {
    if (isNaN(number1)||isNaN(number2)) {
        console.log("each of number1, number2 must be number only");
        return;
    }
    else {
        return number1 + number2;
    }
};

var sub = function (number1, number2) {
    if (isNaN(number1)||isNaN(number2))  {
        console.log("each of number1, number2 must be number only");
        return;
    }
    else {
        return number1 - number2;
    }
};

var multiply = function (number1, number2) {
    if (isNaN(number1)||isNaN(number2))  {
        console.log("each of number1, number2 must be number only");
        return;
    }
    else {
        return number1 * number2;
    }
};

var divide = function (number1, number2) {
    if (isNaN(number1)||isNaN(number2))  {
        console.log("each of number1, number2 must be number only");
        return;
    }
    else if (number2==0)
    {
        console.log("number2 than want to devide on can't be zero");
        return;
    }
    else {
        return number1 / number2;
    }
};


module.exports = {
    addition:add,
    substruction:sub,
    multiplycation:multiply,
    divivision:divide
};
