const fs = require("fs");
/*
just add the renameFolder on the desktop then you ready to go
else if you need to rename in specific path, provide that path in pathName
then you ready to go. */

const foldName = "C:/Users/Vendetta/Desktop/renameFolder/"

fs.readdir(foldName, (err, files) => {
  if (!err) {
    let counter = 1;
    files.forEach((file, index) => {
      let newFileNm = foldName + newName(file);
      fs.rename(foldName + file, newFileNm, (er) => {
        if (!er) {
          console.log(counter + ' files renamed successful');
          counter++;
        } else throw er;
      });
    });
  } else {
    console.error("Could not do it", err);
    process.exit(1);
  }
});

function newName(name, rep = '') {
    let newN;
    newN = name.replace(' - YouTube', '')
    .replace(' - YouTube_2', '')
    .replace('(480P)_1', '')
    .replace('(720P_HD)_1', '')
    .replace(rep, '');
    return newN;
}