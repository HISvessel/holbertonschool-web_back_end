const http = require('node:http');
const countStudents = require('./3-read_file_async');
const path = 'database.csv'

const app = http.createServer(async (req, res) => {
  //const content = await countStudents(path);

  if (req.url == '/') {
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url == '/students') {
    const content = await countStudents(path).toString();
    res.writeHead(200, { 'content-type' : 'text/plain' });
    res.end(content);
  } else {
    res.writeHead(404, { 'content-type' : 'text/plain' });
    res.end('404 Not found');
  }
});

app.listen(1245);

module.exports = app;
