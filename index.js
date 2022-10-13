const jsonObj = require('./data.json');
const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  // console.log('data.json:', data);
  for (var i = 0; i < jsonObj.notes.length; i++) {
    console.log(jsonObj.notes[i]);
  }
})
