/*

//~~~~~ORIGINAL CODE~~~~~//

const fs = require('fs');

// `files` will be an array of filenames, like ['bash.js', 'pwd.js']
let fsFunction = fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
        console.log(files);
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });

  module.exports = function(){
      fsFunction;
  };
*/

//~~~~~WORKING CODE~~~~~//

const fs = require('fs');

module.exports = function(){
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
        //console.log(files); this will print the array of files that was created
        process.stdout.write(files.join('\n'));
        //process.stdout.write('prompt > ');
    }
  });;
};

// This will work but the code doesn't stop. It runs another prompt.
// Do you understand why? I don't!