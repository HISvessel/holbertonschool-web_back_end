const http = require('node:http');
const countStudents = require('./3-read_file_async');
const path = process.argv[2];

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
      res.writeHead(400, { 'content-type': 'text/plain' });
      res.end(`This is the list of our students\n${e.toString().replace('Error:', '' )}`);
    }
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 Not found');
  }
});

app.listen(1245);

module.exports = app;
