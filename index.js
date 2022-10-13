const jsonObj = require('./data.json');
const fs = require('fs');
let object = {};

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    // console.log('data.json:', data);
    // for (var i = 0; i < jsonObj.notes.length; i++) {
      //   }
    let arr = [];
    for (var key in jsonObj) {
      arr.push(jsonObj[key]);
    }
    console.log(arr);
    return arr;
    }

  })
