var fs = require('fs')

fs.readFile('./data.json', (error, data) => {
    if(error){
       console.log(error);
       return;
    }
    console.log(JSON.parse(data));

})