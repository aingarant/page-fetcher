const request = require("request");
const fs = require("fs");

const args = process.argv.splice(2);
const url = args[0];
const file = args[1];
let content = "";



const readFile = (url) => {
  request(url, function (error, response, body) {
    content = body;
    writeToFile(file, content);
  });
};
readFile(url);


const writeToFile = (file, content) => {
  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    let size = fs.statSync(file).size;
    console.log(`Downloaded ${url} and saved ${size} bytes to ${file}`);
  });
};