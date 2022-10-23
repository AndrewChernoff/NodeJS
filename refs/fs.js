const fs = require("fs");
const path = require("path");

/* fs.mkdir(path.join(__dirname, 'fsFolder'), (err) => {
  if (err) throw err;
  console.log('Folder was created');
}); */

if (fs.existsSync(path.join(__dirname, "fsFolder"))) {
  console.log("Directory exists!");
} else {
  fs.mkdir(path.join(__dirname, "fsFolder"), (err) => {
    if (err) throw err;
    console.log("Folder was created");
  });
}

fs.writeFile(path.join(__dirname, 'fsFolder', 'newFile.txt'), "Hello World!", function (err) {
    if (err) throw err;
    console.log('File created');
  }
);

fs.appendFile(path.join(__dirname, 'newFile.txt'), 'Hi everyone!', err => {
    if(err) throw err;
    console.log('File updated')
})

fs.readFile(path.join(__dirname, 'newFile.txt'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  })