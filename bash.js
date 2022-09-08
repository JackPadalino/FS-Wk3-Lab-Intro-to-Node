const outputPwd = require("./pwd.js")
const outputLs = require("./ls.js")

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd ==="pwd"){
    outputPwd();
  }else if(cmd === "ls"){
    outputLs();
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});