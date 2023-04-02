
const readline = require('readline');
const fs = require('fs');
const events = require('events');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./greet.text'),
    output: process.stdout,
    console: false
});

counter = 0 ;
readInterface.on('line', function(line) {

    counter++;
    console.log(`Line-${counter}: ${line}`);
});
