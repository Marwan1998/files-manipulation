const fs = require("fs");
/*
just add the renameFolder on the desktop then you ready to go
else if you need to rename in specific path, provide that path in pathName
then you ready to go. */

const pathName = "C:/Users/Vendetta/Desktop/renameFolder/"

fs.readdir(pathName, (err, files) => {
  if (!err) {
    let counter = 1;
    files.forEach((file, index) => {
      let newFileNm = pathName + newName(file); // Only Edite this function params
      fs.rename(pathName + file, newFileNm, (er) => {
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

function newName(name, rep='', withThis='', def=true) {
    let newN;
    if(def){
    newN = name.replace(' - YouTube', '')
    .replace(' - YouTube_2', '')
    .replace('(480P)_1', '')
    .replace('(480P)', '')
    .replace('(720P_HD)_1', '')
    }
    newN = def ? newN.replace(rep, withThis) : name.replace(rep, withThis);
    return newN;
}