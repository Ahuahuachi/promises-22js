const getRandNumber = (maxNum) => {
  return Math.ceil(Math.random() * maxNum);
};

const coinToss = () => {
  return getRandNumber(2) == 1;
};

const simiFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (coinToss()) resolve();
    else reject();
  }, getRandNumber(5) * 1000);
});

simiFetch
  .then(() => {
    console.log("Promesa1 cumplida");
  })
  .catch(() => {
    console.error("Promesa1 rechazada");
  })
  .finally(() => {
    console.log("Proceso terminado");
  });

simiFetch
  .then(() => {
    console.log("Promesa2 cumplida");
  })
  .catch(() => {
    console.error("Promesa2 rechazada");
  })
  .finally(() => {
    console.log("Proceso terminado");
  });

simiFetch
  .then(() => {
    console.log("Promesa3 cumplida");
  })
  .catch(() => {
    console.error("Promesa3 rechazada");
  })
  .finally(() => {
    console.log("Proceso terminado");
  });
