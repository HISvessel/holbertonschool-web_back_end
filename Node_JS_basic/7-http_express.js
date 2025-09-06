const express = require('express');
const path = 'database.csv';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const content = await countStudents(path);
  res.end(`This is the list of our students\n${content}`);
});

app.listen(port);

module.exports = app;
