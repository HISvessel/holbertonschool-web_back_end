const fs = require('node:fs');

function countStudents(path) {
  return new Promise((response, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
      const rows = lines.slice(1);
      const fieldRows = rows.map((student) => {
        const name = student.split(',')[0];
        const field = student.split(',')[3];
        return [name, field];
      });
      const CSStudents = fieldRows.filter((student) => student[1] === 'CS');
      const SWEStudents = fieldRows.filter((student) => student[1] === 'SWE');

      console.log(`Number of students: ${rows.length}`);
      console.log(`Number of students in CS: ${CSStudents.length}. List: ${CSStudents.map((student) => student[0]).join(', ')}`);
      console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.map((student) => student[0]).join(', ')}`);

      response();
    });
  });
}
module.exports = countStudents;
