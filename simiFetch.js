const fs = require("fs");

const simiFetch = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (!err) resolve(data);
      else reject(err);
    });
  });
};

simiFetch("data.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
