const fs = require("fs");
const { json } = require("stream/consumers");

const simiFetch = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (!err) resolve(data);
      else reject(err);
    });
  });
};

// simiFetch("data.json")
//   .then((data) => {
//     return data;
//   })
//   .then((data) => {
//     console.log(JSON.parse(data));
//   })
//   .then((data) => {
//     // enviar data al servidor
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log("Proceso fallido");
//   });

// simiFetch("data.jason")
//   .then((data) => {
//     console.log(data);
//     console.log("Proceso exitoso");
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log("Proceso fallido");
//   });

const consultaDatos = async (path) => {
  try {
    const data = await simiFetch(path);
    console.log(data);
  } catch (error) {
    console.log("Oh no! un error", error);
  }
};

console.log(consultaDatos("data.json"));
