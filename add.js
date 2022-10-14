
const jsonObj = require('./data.json');
const fs = require('fs');
const object = jsonObj.notes;
const write = fs.writeFile;

const newNote = process.argv[2];
const objStringify = JSON.stringify(object);

const objKey = Object.keys(object);
const nextId = jsonObj.nextId;


// NEW CODE BELOW
fs.writeFile('./data.json', newNote, 'utf8', err => {
  if (err) {
    throw err;
  } else {
    object[nextId] = newNote;
    JSON.stringify(object, null, 2);
    jsonObj.nextId++;
  }
});

module.exports = write;

// const jsonObj = require('./data.json');
// const fs = require('fs');
// const object = jsonObj.notes;
// const write = fs.writeFile;

// const newNote = process.argv[2];
// console.log('newNote:', newNote);
// const objStringify = JSON.stringify(object);

// const objKey = Object.keys(object);

// // converting property to a number
// // const numberKey = () => { for (let i = 0; i < objKey.length; i++) {
// //   const key = objKey[i];
// //   const keyNumber = Number(key);
// //   console.log(keyNumber);
// // }}
// const nextId = jsonObj.nextId;
// console.log('nextId:', nextId);
// // numberKey();

// fs.writeFile('./data.json', newNote, 'utf8', err => {
//   if (err) {
//     throw err;
//   } else {
//     jsonObj.object[nextId] = newNote;
//     const objParse = JSON.parse(addNote);
//     console.log(objParse);
//     nextId++;
//   }
//   // console.log(data);
// })

// module.exports = write;
