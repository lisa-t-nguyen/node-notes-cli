const jsonObj = require('./data.json');
const fs = require('fs');
const object = jsonObj.notes;
const write = fs.writeFile;

const newNote = process.argv[2];
const objStringify = JSON.stringify(object);

const objKey = Object.keys(object);

const numberKey = () => { for (let i = 0; i < objKey.length; i++) {
  const key = objKey[i];
  const keyNumber = Number(key);
  console.log(keyNumber);
}}

numberKey();
// fs.writeFile('./data.json', newNote, 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     const addNote = Object.assign(objStringify, newNote);
//     const objParse = JSON.parse(addNote);
//   }
//   console.log(data);
// })


module.exports = write;
