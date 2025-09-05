const http = require('node:http');
const countStudents = require('./3-read_file_async');
const path = 'database.csv';
const util = require('util');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const originalLog = console.log;
    let logBuffer = '';

    console.log = (...args) => {
      const message = util.format(...args);
      logBuffer += message + '\n';
      originalLog.apply(console, args);
    };

    const content = await countStudents(path);
    console.log = originalLog;
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.end(`This is the list of our students\n${logBuffer}`);
  } else {
    res.writeHead(404, { 'content-type' : 'text/plain' });
    res.end('404 Not found');
  }
});

app.listen(1245);

module.exports = app;
