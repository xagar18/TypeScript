const run = (cordinates: Array<number>) => {
  const latitude = cordinates[0];
  const longitude = cordinates[1];
  const elevation = cordinates[2];
};

run([20, 30, 40]);

export {};


const run2 = (cordinates: [number, number, number?]) => {
  const latitude = cordinates[0];
  const longitude = cordinates[1];
  const elevation = cordinates[2];
};

run2([20, 30, 40]);
run2([20, 30]);

export {};
