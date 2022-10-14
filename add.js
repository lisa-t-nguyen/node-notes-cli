const jsonObj = require('./data.json');
const fs = require('fs');
const object = jsonObj.notes;
const write = fs.writeFile;

const newNote = process.argv[2];
const objStringify = JSON.stringify(object);

fs.writeFile('./data.json', newNote, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    const addNote = Object.assign(objStringify, newNote);
    const objParse = JSON.parse(addNote);
  }
  // jsonObj.notes[5] = newNote;
  console.log(data);
})


module.exports = write;
