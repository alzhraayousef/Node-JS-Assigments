const fs = require('fs');
//Create test file 
try {
  fs.writeFileSync('./test.txt', 'Zahraa');
} catch (err) {
  console.error(err);
}

   
// Rename the file
fs.rename('./test.txt', './info.txt', (error) => {
  if (error) {
      
    console.log(error);
  }
  else {
      console.log("\nFile Renamed\n");
  }
});


//Remove file 

fs.unlink('./info.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});