const express = require('express');

const port = 1245;
const countStudents = require('./3-read_file_async');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const content = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${content}`);
  } catch (e) {
    res.end(`This is the list of our students\n${e.toString().replace('Error: ', '')}`);
  }
});

app.listen(port);

module.exports = app;
