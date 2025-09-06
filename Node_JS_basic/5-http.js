const http = require('node:http');
const countStudents = require('./3-read_file_async');
const path = 'database.csv';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const content = await countStudents(path);
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end(`This is the list of our students\n${content}`);
    } catch (e) {
      throw new Error('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 Not found');
  }
});

app.listen(1245);

module.exports = app;
