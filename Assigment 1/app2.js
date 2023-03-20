
const prompt = require('prompt-sync')({sigint: true}); // for use prompt

var personInfo = require("./AgeModule");

var name = prompt("enter your name: ");
var birthyear = parseInt(prompt("enter year of your birth date: "));
var result = personInfo(name,birthyear);
if(result != undefined)
{
    console.log(result);
}

