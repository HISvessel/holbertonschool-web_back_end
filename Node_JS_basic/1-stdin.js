const { spawn } = require("node:child_process");
const echo = spawn("echo");

process.stdout.write("Welcome to Holberton School, what is your name? \n");
process.stdin.on("readable", function() {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  echo.stdin.on("echo", () => {
    process.stdout.write("This important software is now closing \n");
  });
});
