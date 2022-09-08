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
