const jsonObj = require('./data.json');
const fs = require('fs');
const object = jsonObj.notes;
const read = fs.readFile;

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    for (const [key, value] of Object.entries(object)) {
      console.log(`${key}: ${value}`);
    }
  }
});

module.exports = read;
