
//npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true}); // for use prompt  
// ({sigint: true}) for user can terminate terminal by ctrl + c

var calculationResutl = require("./calculatorModule");

var number1 = parseInt(prompt("enter first number: "));
var number2 = parseInt(prompt("enter second number: "));
var operation = prompt("enter your operation like +,-,/,* : ");
var result;
switch (operation) {
    case "+":
        result= calculationResutl.addition(number1, number2);
        break;
    case "-":
        result= calculationResutl.substruction(number1, number2);
        break;
    case "*":
        result= calculationResutl.multiplycation(number1, number2);
        break;
    case "/":
        result= calculationResutl.divivision(number1, number2);
        break;
}

if(result != undefined)
{
    console.log(result);
}
